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
    </>
  );
}

export default App;
