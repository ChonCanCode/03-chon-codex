const reverseSeq = (n) => {
  let result = [];

  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

let n = 5;

console.log(reverseSeq(n));
