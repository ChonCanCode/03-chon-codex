const reverse = (n) => {
  return parseInt(n.toString().split("").reverse().join(""), 10);
};

console.log(reverse(1234));
