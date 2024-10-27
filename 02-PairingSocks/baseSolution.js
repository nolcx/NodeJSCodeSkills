/*
  This solution produces the correct result, but contains
  a lot of redundancy and unnecessary complexity.
*/

function numOfMatchSocks (socks) {
  // The collection of the socks grouped, for each value
  const separedSocks = []
  // The total number of pair socks
  let numOfPairs = 0

  socks.forEach(sock => {
    // If the current sock is already grouped, past to the next value
    if (!separedSocks.find(a => a[0] === sock)) {
      // Collect all the socks with the same value
      const sameSocks = socks.filter(a => a === sock)
      // We have to be sure that only sum the integer values
      numOfPairs += Math.floor(sameSocks.length / 2)
      separedSocks.push(sameSocks)
    }
  })

  return numOfPairs
}

function main (socks) {
  // Num of socks that have a pair
  const numPairs = numOfMatchSocks(socks)

  console.log(numPairs)
}

const mixteSocks = ['a', 'b', 'c', 'd', 'e', 'a', 'g', 'a']
main(mixteSocks)
