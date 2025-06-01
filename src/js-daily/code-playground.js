// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let noSpaces = str.split(" ").join("");
  if (noSpaces.length !== 0 && noSpaces.length < 140) {
    return "#" + noSpaces[0].toUpperCase() + noSpaces.slice(1);
  } else {
    return false;
  }
}

const str = "i am awsome!";

console.log(generateHashtag(str));
