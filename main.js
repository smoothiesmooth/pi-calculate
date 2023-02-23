import {performCalculations as single} from './singlethread.js'
import {performCalculations as multi} from './multithread.js'
import {cpus} from 'node:os'

const cores = cpus().length

const sand = 25000000

console.log('Started single-thread calculations...\n')

let time = performance.now()

single(cores, sand)

time = performance.now() - time
console.log(`\nEstimated time in single-thread: ${Math.round(time)}ms\n`)

console.log('Started multi-thread calculations...\n')

time = performance.now()

await multi(cores, sand)

time = performance.now() - time
console.log(`\nEstimated time in multi-thread: ${Math.round(time)}ms`)
