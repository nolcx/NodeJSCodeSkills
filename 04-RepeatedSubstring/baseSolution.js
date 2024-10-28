function repeatedString (s, n) {
  // Write your code here
  const numPossibleRepetition = Math.floor(n / s.length)
  // This is literally the remainder, it is unnecessary to make all the operation step by step (in this case)
  // const missingSubstringLength = n - (numPossibleRepetition * s.length)
  const remainder = n % s.length

  let countOfAString = 0

  for (const letter of s) {
    if (letter === 'a') countOfAString++
  }

  n > 0 ? countOfAString = (countOfAString * numPossibleRepetition) : countOfAString = 0

  if (remainder > 0) {
    const subStringOfS = s.slice(0, remainder)

    for (const letter of subStringOfS) {
      if (letter === 'a') countOfAString++
    }
  }

  return countOfAString
}

function main () {
  const countOfAString = repeatedString('udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps', 872514961806)

  console.log(countOfAString)
}

main()
