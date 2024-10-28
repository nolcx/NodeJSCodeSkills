function repeatedString (s, n) {
  const numPossibleRepetition = Math.floor(n / s.length)
  const remainder = n % s.length

  // Count occurrences of 'a' in the original string
  const countOfAInS = [...s].filter(letter => letter === 'a').length

  // Calculate total 'a's in fully repeated parts and the remainder
  const totalCountOfA = (countOfAInS * numPossibleRepetition) +
                        [...s.slice(0, remainder)].filter(letter => letter === 'a').length

  return totalCountOfA
}

function main () {
  const countOfAString = repeatedString('udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps', 872514961806)

  console.log(countOfAString)
}

main()
