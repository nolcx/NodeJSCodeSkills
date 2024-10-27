// We need to determine the number of valleys and mountains the hiker traversed.

function trackHikerPath (steps, path) {
  // Write your code here
  let level = 0

  let countOfUpHill = 0
  let countOfDownHill = 0

  let countOfValleys = 0
  let countOfMountains = 0

  for (const step of path) {
    const previousLevel = level

    if (step === 'U') {
      level++
      countOfUpHill++
    }

    if (step === 'D') {
      countOfDownHill++
      level--
    }

    if (level === 0) {
      // If the hiker was at the level 0 and he made more then 1 up steps to be there.
      // It means that he has exited the valley.
      if (previousLevel < 0 && countOfDownHill > 1) {
        countOfValleys++
      }

      // If the hiker was at the level 0 and he made more then 1 down steps to be there.
      // It means that he has exited the mountain.
      if (previousLevel > 0 && countOfUpHill > 1) {
        countOfMountains++
      }

      countOfUpHill = 0
      countOfDownHill = 0
    }
  }

  return { countOfValleys, countOfMountains }
}

function main () {
  const { countOfValleys, countOfMountains } = trackHikerPath(8, 'UDDDUUUUDD')

  console.log({ countOfValleys }, { countOfMountains })
}

main()
