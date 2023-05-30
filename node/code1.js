// Node (1/4)
function highAndLow(numbers) {
  const numArray = numbers.split(' ');
  let max = Number(numArray[0]);
  let min = Number(numArray[0]);
  for (let i = 1; i < numArray.length; i++) {
    const num = Number(numArray[i]);
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return max + ' ' + min;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
