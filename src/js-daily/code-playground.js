function findUniq(arr) {
  console.log("Original array:", arr);

  arr.sort((a, b) => a - b);
  console.log("Sorted array:", arr);

  if (arr[0] !== arr[1]) {
    console.log(" if Unique number is at the start:", arr[0]);
    return arr[0];
  } else {
    console.log("if Unique number is at the end:", arr[arr.length - 1]);
    return arr[arr.length - 1];
  }
}

let array1 = [1, 1, 1, 2, 1, 1];
let array2 = [2, 2, 2, 1, 2, 2];
console.log("Final result:", findUniq(array1));
console.log("Final result:", findUniq(array2));
