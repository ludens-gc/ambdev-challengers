function nextId(arr) {
  let nextNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== nextNumber) {
      return nextNumber;
    }
    nextNumber++;
  }
  return nextNumber;
}

const arr1 = [0, 1, 2, 3, 5];
console.log(nextId(arr1));
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nextId(arr2));
const arr3 = [-3, -1, 0, 1, 2, 3, 4];
console.log(nextId(arr3));
const arr4 = [-5, -3, -2, -1, 0, 1, 2, 3, 4];
console.log(nextId(arr4));