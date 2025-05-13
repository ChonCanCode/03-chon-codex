function doubleChar(str) {
  return str
    .split("")
    .map((num) => num + num)
    .join("");
}

const word = "Strong!";

console.log(doubleChar(word));
