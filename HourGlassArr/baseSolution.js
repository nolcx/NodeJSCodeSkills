'use strict'

const fs = require('fs')
const PATH_INPUT = 'input.txt'

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum (arr) {
  // Write your code here
  const hourGlassSums = []

  // We could call this hard code... you can get the same result
  // if you rest 3 to the length of x or y (with less resources)
  /*
    let horizontalMaxPos = arr.length / (arr.length / 3)
    let verticalMaxPos = arr.length / (arr.length / 3)
  */
  for (let y = 0; y <= arr.length - 3; y++) { // The rows
    for (let x = 0; x <= arr[0].length - 3; x++) { // The cols
      const sum = (arr[y][x] + arr[y][x + 1] + arr[y][x + 2]) +
                      (arr[y + 1][x + 1]) +
                      (arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2])
      hourGlassSums.push(sum)
    }
  }

  return hourGlassSums
}

function main (stringData) {
  const arr = new Array(6)

  const lines = stringData.split('\n')

  for (let i = 0; i < 6; i++) {
    arr[i] = lines[i].split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  const result = hourglassSum(arr)

  console.log('Hour glasses sums:', { result })
  console.log(`Max Sum: ${Math.max(...result)}\nMin Sum: ${Math.min(...result)}`)
}

fs.readFile(PATH_INPUT, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }

  main(data)
})
