import {performCalculations as single} from './singlethread.js'
import {performCalculations as multi} from './multithread.js'
import {cpus} from 'node:os'

const cores = cpus().length

const sand = 25000000

console.log('Started single-thread calculations...\n')

let start = Date.now()

single(cores, sand)

let time = Date.now() - start
console.log(`\nEstimated time in single-thread: ${Math.round(time)}ms\n`)

console.log('Started multi-thread calculations...\n')

start = Date.now()

await multi(cores, sand)

time = Date.now() - start
console.log(`\nEstimated time in multi-thread: ${Math.round(time)}ms`)
