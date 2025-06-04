function generateHashtag(str) {
  if (!str || str.trim() === "") return false;

  const words = str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  const hashtag = "#" + words.join("");

  return hashtag.length > 140 ? false : hashtag;
}

const str = "i am awsome!";

console.log(generateHashtag(str));

// https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript

//Day 08 - Code review - Lazy day only have time to review code from yesterday. Line 2 - .trim() to check user input by removing space at the start. Line 6 regular expressiong space was used as in indicator to split up the words in to array of individual word. Line 7 .map() was used to tringger a group of function to minupulate each word (character 0 to uppercase, return the remaing word). Line 9 simplyy joing the word together as the value is an array. Takeaway, dont limit my self from thinking function can only be trigger by function name() or annoymus function. Instead declaration with varaiable decalaration & built-in can also work while spliting the process in multiple stage help with claraity and minupulation. Lastly in Line 11 return while performing a finaly check.
