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
      </div>
    </>
  );
}
