import "./style.css";

export default function Fundamental() {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-black-500">JavaScript Daily Challenge</h1>
        <br />
        <hr />
        <h2>Challenge 1</h2>
        <span>
          In this simple assignment you are given a number and have to make it
          negative. But maybe the number is already negative?
        </span>
        <code>
          {`makeNegative(1); // return -1 
makeNegative(-5); // return -5
makeNegative(0); // return 0 
makeNegative(0.12); // return -0.12`}
        </code>
        <h3>My Solution</h3>
        <code>
          {`function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return -num;
  }
}`}
        </code>
        <h3>Best practice</h3>
        <code>{` return -Math.abs(num);`}</code>
        <br />
        <hr />
        <h2>Challenge 2</h2>
        <span>
          Given a random non-negative number, you have to return the digits of
          this number within an array in reverse order.
        </span>
        <code>
          {`35231 => [1,3,2,5,3]
0     => [0]
      `}
        </code>
        <h3>My Solution</h3>
        <span>
          Important here of having .map(Number) without this it will return in
          an array of string instead of array of splited numbers
        </span>
        <code>
          {`
      function digitize(n) {
      return n.toString().split().reserve().map(Number);
      }
      `}
        </code>
        <h3>Best practice</h3>
        <code>
          {`
      function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
      `}
          &
          {`
      function digitize(n) {
  return String(n).split('').reverse().map(Number)
}
      `}
        </code>
        <br />
        <hr />
        <h2>Challenge 3</h2>
        <span>
          Complete the method that takes a boolean value and return a "Yes"
          string for true, or a "No" string for false.
        </span>
        <h3>My Solution</h3>
        <span>
          Important here of having .map(Number) without this it will return in
          an array of string instead of array of splited numbers
        </span>
        <code>
          {`
   function boolToWord(bool) {
  if(bool === true){
    return "Yes"
  }
  else{
      return "No"
  }
}
      `}
        </code>
        <h3>Best practice</h3>
        <code>
          {`
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
      `}
        </code>
        <br />
        <hr />
        <h2>Challenge 4</h2>
        <span>
          Complete the method that takes a boolean value and return a "Yes"
          string for true, or a "No" string for false.
        </span>
        <h3>Searched solutiopn</h3>
        <span>
          Important here of having .map(Number) without this it will return in
          an array of string instead of array of splited numbers
        </span>
        <code>
          {`
function grow(x){
let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
      }`}
        </code>
        <br />
        <hr />
        <h2>Challenge 5</h2>
        <span>
          Build a function that returns an array of integers from n to 1 where
          n&gt;0.
        </span>
        <h3>Self score: 60%</h3>
        <span>
          My logic of using for loop is correct but failed to pull it out
          specially the finaly part.
        </span>
        <code>
          {`
const reverseSeq = (n) => {
  let result = [];

  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

let n = 5;

console.log(reverseSeq(n));`}
        </code>
        <br />
        <hr />
        <h2>Challenge 6</h2>
        <span>
          We need a function that can transform a number (integer) into a
          string.
        </span>
        <h3>Self score: 60%</h3>
        <span>Logic is ok still struggle with syntax.</span>
        <code>
          {`function numberToString(num) {
  
  let result = ''
  
  if (typeof num === 'number'){
    result = num.toString();
  }
  
  return result;


  or 

  function toString(num) {
  
  return num.toString();
  return String(num);

  }

}`}
        </code>
        <br />
        <hr />
        <h2>Challenge 7</h2>
        <span>
          Create a function which answers the question "Are you playing banjo?".
          If your name starts with the letter "R" or lower case "r", you are
          playing banjo!
        </span>
        <h3>Self score: 40%</h3>
        <span>Logic is ok still struggle with syntax.</span>
        <code>
          {`function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}


  or 

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}`}
        </code>
        <br />
        <hr />
        <h2>Challenge 8</h2>
        <span>
          Create a function that takes an integer as an argument and returns
          "Even" for even numbers or "Odd" for odd numbers.
        </span>
        <h3>Self score: 90%</h3>
        <span>No need for help just check previous syntax error.</span>
        <code>
          {`function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
}`}
        </code>
        <br />
        <hr />
        <h2>Challenge 9</h2>
        <span>
          Create a function which translates a given DNA string into RNA. "GCAT"
          to "GCAU"
        </span>
        <h3>Self score: 40%</h3>
        <span>
          Only managed to come up with with a few built in function but unable
          to put them together to use.
        </span>
        <code>
          <span style={{ color: "red" }}>My Attempt:</span>
          <br />
          {`function DNAtoRNA(dna) {
  return for (let i = dna.split("")){
    if char === (char === "T"? "U":char).join("")  }
}`}
          <br />
          <span style={{ color: "green" }}>Correct outcome:</span>
          <br />
          {`function DNAtoRNA(dna) {
  return dna
  .split("")
  .map((char) => (char === "T"?"U":char))
  .join("");
}
`}
        </code>
        <br />
        <hr />
        <h2>Challenge 10</h2>
        <span>
          Write a function that takes an array of numbers and returns the sum of
          the numbers. The numbers can be negative or non-integer. If the array
          does not contain any numbers then you should return 0.
        </span>
        <h3>Self score: 10%</h3>
        <span>Need to review code</span>
        <code>
          <span style={{ color: "red" }}>My Attempt:</span>
          <br />
          {`function sum (numbers) {
  if numbers !== [] (
  return numbers.map(num ++!) ) else {
    return 0
  }
}`}
          <br />
          <span style={{ color: "green" }}>Correct outcome:</span>
          <br />
          {`function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}`}{" "}
          OR{" "}
          {`function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
`}{" "}
          or{" "}
          {`sum = function (numbers) {
  "use strict";
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
`}
        </code>
        <br />
        <hr />
        <h2>Challenge 11</h2>
        <span>
          Write a function named setAlarm/set_alarm/set-alarm/setalarm
          (depending on language) which receives two parameters. The first
          parameter, employed, is true whenever you are employed and the second
          parameter, vacation is true whenever you are on vacation.
        </span>
        <h3>Self score: 100%</h3>
        <span>All went well in first attempt</span>
        <code>
          <span style={{ color: "green" }}>My Attempt:</span>
          <br />
          {`function setAlarm(employed, vacation){
if (employed === true && vacation ==! true) {
  return true
} else {
  return false
}
`}

          <span style={{ color: "green" }}>Other outcomes:</span>
          <br />
          {`const setAlarm = (employed, vacation) => employed && !vacation;`}
          <br />
          <hr />

          {`function setAlarm(employed, vacation){
  return employed && !vacation;
}
`}
          <hr />
          {`function setAlarm(employed, vacation){
  return (employed && !vacation) ? true : false;
}
`}
        </code>
        <br />
        <hr />
        <h2>Challenge 12</h2>
        <span>
          Given a string, you have to return a string in which each character
          (case-sensitive) is repeated once.
        </span>
        <h3>Self score: 60%</h3>
        <span>
          Getting there with .map() within the () there must be something
          telling what do with the map layout
        </span>
        <code>
          <span style={{ color: "green" }}>My Attempt:</span>
          <br />
          {`function doubleChar(str) {
  return str
    .split("")
    .map((num) => num + num)
    .join("");
}

const word = "Strong!";

console.log(doubleChar(word));

`}

          <span style={{ color: "green" }}>Other outcomes:</span>
          <br />
          {`function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};`}
        </code>
        <br />
        <hr />
        <h2>Challenge 13</h2>
        <span>
          Your task is to create a function that does four basic mathematical
          operations. The function should take three arguments -
          operation(string/char), value1(number), value2(number). The function
          should return result of numbers after applying the chosen operation.
        </span>
        <h3>Self score: 40%</h3>
        <span>
          Syntax error, I tried to use .map() & .join() to have the formula
          output the result directly. But in coding there can only be
          num/char/boolean therefore even by joining the output together with
          string it will not work.
        </span>
        <code>
          <span style={{ color: "green" }}>First take:</span>
          <br />
          {`function basicOp(operation, value1, value2){
  
  array = [operation, value1, value2]

  result = array.map(calc = value1 + operation + value2)

  return result;
}

const task = ['+', 4, 7];

console.log(basicOp(task));`}
          <span style={{ color: "green" }}>Other outcomes:</span>
          <br />
          {`function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  } else {
    return "operation input error";
  }
}

console.log(basicOp("+", 4, 7));
`}
          <hr />
          {`function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}`}{" "}
          <hr />
          {`function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7));
`}
        </code>
        <br />
        <hr />
        <h2>Challenge 14</h2>
        <span>
          Complete the solution so that it reverses the string passed into it.
        </span>
        <h3>Self score: 80%</h3>
        <span>
          Logically and syntax I am on the right track. As this exercise similar
          the one in the past.
        </span>
        <code>
          <span style={{ color: "green" }}>First take:</span>
          <br />
          {`function solution(str) {
  return str.split("").reverse().join("");
}`}
          <span style={{ color: "green" }}>Other outcomes:</span>
          <br />
          {`const solution = str => str.split('').reverse().join('');
`}
          <hr />
          {`const solution = s => [...s].reverse().join('')`} <hr />
          {`function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}`}
        </code>
      </div>
    </>
  );
}
