import {workerData, parentPort} from 'node:worker_threads'

const calculate = (n = workerData) => {
  let k = 0

  for (let i=0; i<n; i++) {
    const x = Math.random()*2
    const y = Math.random()*2

    k = (x-1)**2 + (y-1)**2 <= 1 ? k+1 : k
  }

  return k/n*4

}

const sendResult = () => {
  parentPort.postMessage(calculate())
}

sendResult()