import {performCalculations as single} from './singlethread.js'
import {performCalculations as multi} from './multithread.js'

console.log('Started single-thread calculations...\n')

let time = performance.now()

single()

time = performance.now() - time
console.log(`\nEstimated time in single-thread: ${Math.round(time)}ms\n`)

console.log('Started multi-thread calculations...\n')

time = performance.now()

await multi()

time = performance.now() - time
console.log(`\nEstimated time in multi-thread: ${Math.round(time)}ms`)
