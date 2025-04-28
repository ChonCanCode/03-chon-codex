import "./style.css";

function App() {
  return (
    <>
      <h1>JavaScript Daily Challenge</h1>
      <br />
      <hr />
      <h2>Day 1</h2>
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
      <h2>Day 2</h2>
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
        Important here of having .map(Number) without this it will return in an
        array of string instead of array of splited numbers
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
      <h2>Day 3</h2>
      <span>
        Complete the method that takes a boolean value and return a "Yes" string
        for true, or a "No" string for false.
      </span>

      <h3>My Solution</h3>
      <span>
        Important here of having .map(Number) without this it will return in an
        array of string instead of array of splited numbers
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
      <h2>Day 4</h2>
      <span>
        Complete the method that takes a boolean value and return a "Yes" string
        for true, or a "No" string for false.
      </span>

      <h3>Searched solutiopn</h3>
      <span>
        Important here of having .map(Number) without this it will return in an
        array of string instead of array of splited numbers
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
      <h2>Day 5</h2>
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
      <h2>Day 6</h2>
      <span>
        We need a function that can transform a number (integer) into a string.
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
      <h2>Day 7</h2>
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
      <h2>Day 8</h2>
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
    </>
  );
}

export default App;
