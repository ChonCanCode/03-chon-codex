export default function Rankup() {
  return (
    <>
      <div>
        <h1 className="font-bold">Rank Up Challenges</h1>
        <h2>Challenge 01</h2>
        <span>
          Given two arrays a and b write a function comp(a, b) (orcompSame(a,
          b)) that checks whether the two arrays have the "same" elements, with
          the same multiplicities (the multiplicity of a member is the number of
          times it appears). "Same" means, here, that the elements in b are the
          elements in a squared, regardless of the order.
        </span>

        <h3>Self score: 10%</h3>
        <span>
          Miss understood the question, dont even know what I wrote lol
        </span>

        <code>
          <span className="text-red-300">My Attempt:</span>
          <br />
          {`function comp(array1, array2) {
  let result1 = [];
  let result2 = [];

  for (let i = 0; i < array1.length; i++) {
    result1.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    result2.push(array1[i]);
  }

  if (result1 || results2) {
    return true;
  } else {
    false;
  }
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

`}

          <span className="text-green-300">Correct outcomes:</span>
          <br />
          {`function comp(array1, array2) {
  if (!array1 || !array2) return false;

  // Square each element in array1
  const squaredArray1 = array1.map(x => x * x);

  // Sort both arrays
  squaredArray1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  // Compare elements
  return squaredArray1.every((val, index) => val === array2[index]);
}`}
        </code>
      </div>
    </>
  );
}
