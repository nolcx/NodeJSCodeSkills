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

}

function main (inputString) {
  const arr = new Array(6)
  const lines = inputString.split('\n')

  for (let i = 0; i < 6; i++) {
    arr[i] = lines[i].split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  const result = hourglassSum(arr)

  console.log('Hour glasses sums:', { result })
  console.log(`Max Sum: ${Math.max(...result)}`)
}

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }

  main(data)
})
