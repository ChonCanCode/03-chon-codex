// There is an array with some numbers. All numbers are equal except for one. Try to find it! t’s guaranteed that array contains at least 3 numbers. The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}
let array1 = [1, 1, 1, 2, 1, 1];
console.log(findUniq(array1)); // Output: 2
