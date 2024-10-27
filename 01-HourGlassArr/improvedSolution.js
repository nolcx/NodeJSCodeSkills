'use strict'

const fs = require('fs')
const filePath = 'input.txt'

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum (arr) {
  // Write your code here
  const hourGlassSums = []
  const rows = arr.length
  const cols = arr[0].length

  for (let y = 0; y <= rows - 3; y++) {
    for (let x = 0; x <= cols - 3; x++) {
      const top = arr[y].slice(x, x + 3)
      const middle = arr[y + 1][x + 1]
      const bottom = arr[y + 2].slice(x, x + 3)

      const sum = top.reduce((a, b) => a + b, 0) + middle + bottom.reduce((a, b) => a + b, 0)

      hourGlassSums.push(sum)
    }
  }

  return hourGlassSums
}

function main (inputString) {
  const arr = new Array(6)
  const lines = inputString.split('\n')

  for (let i = 0; i < 6; i++) {
    arr[i] = lines[i].split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  const result = hourglassSum(arr)

  console.log('Hour glasses sums:', { result })
  console.log(`Max Sum: ${Math.max(...result)}\nMin Sum: ${Math.min(...result)}`)
}

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }

  main(data)
})
