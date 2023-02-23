const calculate = (n) => {
  let k = 0

  for (let i=0; i<n; i++) {
    const x = Math.random()*2
    const y = Math.random()*2

    k = (x-1)**2 + (y-1)**2 <= 1 ? k+1 : k
  }

  return k/n*4

}

export const performCalculations = (cores, sand) => {
  for (let i=0; i<cores; i++) {
    const ans = calculate(sand)

    console.log(`Calculated Pi: ${ans}`)
    console.log(`Real Pi: ${Math.PI}`)
    console.log(`Difference: ${Math.abs(Math.PI - ans)}`)
  }
}

// let time = performance.now()
//
// performCalculations()
//
// time = performance.now() - time
// console.log(`Estimated time: ${Math.round(time)}ms`)