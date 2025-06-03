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
      <br />
      <hr />
      <h2>Challenge 02</h2>
      <span>
        There is an array with some numbers. All numbers are equal except for
        one. Try to find it!
      </span>

      <h3>Self score: 40%</h3>
      <span>
        My attempt was not wrong, but I am not aware that I can use for loop
        twice to loop out individual unit and have it compare each other.
      </span>

      <code>
        <span className="text-red-300">My Attempt:</span>
        <br />
        {`
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i]) {
      return arr[i];
    }
  }
}

let array1 = [1, 1, 1, 2, 1, 1];

console.log(findUniq(array1));

`}

        <span className="text-green-300">Correct outcomes:</span>
        <br />
        {`function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}
let array1 = [1, 1, 1, 2, 1, 1];
console.log(findUniq(array1));`}
      </code>

      <br />
      <hr />
      <h2>Challenge 03</h2>
      <span>
        The marketing team is spending way too much time typing in hashtags.
        Let's help them with our own Hashtag Generator! Here's the deal: It must
        start with a hashtag (#). All words must have their first letter
        capitalized. If the final result is longer than 140 chars it must return
        false. If the input or the result is an empty string it must return
        false.
      </span>

      <h3>Self score: 50%</h3>
      <span>
        Managed to use the things that I learned before, but unable to resolove
        adding Captial letter in every word.
      </span>

      <code>
        <span className="text-red-300">My Attempt:</span>
        <br />
        {`
function generateHashtag(str) {
  let noSpaces = str.split(" ").join("");
  if (noSpaces.length !== 0 && noSpaces.length < 140) {
    return "#" + noSpaces[0].toUpperCase() + noSpaces.slice(1);
  } else {
    return false;
  }
}
`}

        <span className="text-green-300">Correct outcomes:</span>
        <br />
        <span className="text-green-500">With regular expression</span>
        <br />
        {`function generateHashtag(str) {
  if (!str || str.trim() === "") return false;

  const words = str.trim().split(/\s+/).map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  const hashtag = "#" + words.join("");

  return hashtag.length > 140 ? false : hashtag;
}`}
        <hr />
        <span className="text-green-500">Best practice</span>
        <br />
        {`function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
`}
      </code>
    </>
  );
}
