function numOfMatchSocks (socks) {
  const sockCount = new Map()
  let numOfPairs = 0

  // Count occurrences of each sock
  socks?.forEach(sock => {
    // The map will save the sock as a key and it value will be the occurrences of itself
    // If there is the sock already, the value increase by one
    // If it's not, than it will be 0 + 1 which is 1 at the end (a new counting will be created)
    sockCount.set(sock, (sockCount.get(sock) || 0) + 1)
  })

  // Calculate the number of pairs for each sock type
  sockCount?.forEach(count => {
    numOfPairs += Math.floor(count / 2)
  })

  return numOfPairs
}

function main (socks) {
  // Number of socks that have a pair
  const numPairs = numOfMatchSocks(socks)
  console.log(numPairs)
}

const mixteSocks = ['a', 'b', 'c', 'd', 'e', 'a', 'g', 'a']
main(mixteSocks)
