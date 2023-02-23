import {Worker} from 'node:worker_threads'

const answers = []

const runService = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData })
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with code ${code}`))
    })
  })
    .then((data) => answers.push(data))
}

const run = async (i) => {
  const result = await runService(i)
}

const createRuns = (cores, sand) => {
  const promiseArray = []
  for (let i=0; i<cores; i++) {
    promiseArray.push(run(sand))
  }
  return promiseArray
}

export const performCalculations = async (cores, sand) => {
  await Promise.all(createRuns(cores, sand))
  answers.forEach((ans) => {
    console.log(`Calculated Pi: ${ans}`)
    console.log(`Real Pi: ${Math.PI}`)
    console.log(`Difference: ${Math.abs(Math.PI - ans)}`)
  })
}

// let time = performance.now()
//
// await performCalculations()
//
// time = performance.now() - time
// console.log(`Estimated time: ${Math.round(time)}ms`)