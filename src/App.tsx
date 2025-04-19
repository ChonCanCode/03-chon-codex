import "./style.css";

function App() {
  return (
    <>
      <h1>JavaScript Daily Challenge</h1>

      <h2>Day 1</h2>
      <span>
        In this simple assignment you are given a number and have to make it
        negative. But maybe the number is already negative?
      </span>
      <code>
        makeNegative(1); // return -1 <br />
        makeNegative(-5); // return -5 <br />
        makeNegative(0); // return 0 <br />
        makeNegative(0.12); // return -0.12
      </code>

      <h2>Solution</h2>
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
    </>
  );
}

export default App;
