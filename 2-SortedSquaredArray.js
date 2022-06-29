const sortedSquaredArray = (arr) => {
  const newArr = arr.map(item => item * item)
  return newArr.sort((a, b) => a - b)
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]));