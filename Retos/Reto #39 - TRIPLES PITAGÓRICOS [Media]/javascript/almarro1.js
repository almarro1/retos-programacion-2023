function searchPithagoricTriplets(maxNumber) {
  console.log(`Searching for pithagoric triplets for a max element of ${maxNumber}:`);
  for (let c = maxNumber; c > 0; c--) {
    for (let b = c; b > 0; b--) {
      for (let a = b; a > 0; a--) {
        if (isPithagoricTriplet(a, b, c)) {
          console.log(`... found triplet [${a}, ${b}, ${c}]`);
        }
      }
    }
  }
}

function isPithagoricTriplet(a, b, c) {
  return (a * a + b * b) === c * c;
}

searchPithagoricTriplets(20);
