// [4, 2, 1]
// [1, 2, 4] -> 3 
// [1, 2, 3]

const minSumChange = (arr) => {
  const arrSorted = arr.sort((a, b) => a - b)
  console.log({ arrSorted })
  let acc = 0

  // Pass through arr to get the sum
  for (let i = 0; i < arrSorted.length - 1; i++) {
    console.log({ acc, item: arrSorted[i] })
    if (arrSorted[i] > acc + 1) {
      return acc + 1
    }
    // add next value to acc
    acc += arrSorted[i]
  }

  return acc + 1
}

console.log(minSumChange([4, 2, 1]))
console.log(minSumChange([5, 7, 1, 1, 2, 3, 22]))
console.log(minSumChange([1, 1, 1, 1, 1]))
console.log(minSumChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))