function sumOfMinimums(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    let minValue = Math.min(...row);
    sum += minValue;
  }
  return sum;
}
  
let array = [[5, 4, 2, 9], [7, 9, 15], [6, 9, 11, 17]];
console.log(sumOfMinimums(array));