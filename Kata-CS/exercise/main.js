/**
 * welcome
 * {
 * w: 1
 * e :2
 * l :1
 * c :1
 * o :1
 * m :1
 * }
 */

const counterLetter = (word) => {
  // weelcome
  /**
   * .split("") -> ["w", "e", "l"]
   * separar palabra por palabra
   */

  const objectLetter = {};

  for (let index = 0; index < word.length; index++) {
    // 6
    // objectLetter[ word[index] ] =  objectLetter[word[index]] !== null ?  +1 : 1
    //e -> objectLetter.e -> 1
    if (objectLetter[word[index]] !== undefined) {
      // objectLetter.e = 2
      console.log("value", objectLetter[word[index]]);
      objectLetter[word[index]] = objectLetter[word[index]] + 1;
    } else {
      objectLetter[word[index]] = 1;
      // {w: 1}, {e : 1}, {l : 1}, {c: 1}, {o: 1 }, {m: 1}, {}
    }
  }

  return objectLetter;
};

console.log(counterLetter("welcome"));

const word1 = "hello";

const capitalLetter = word1[0].toUpperCase(); // H  + ello
const result = capitalLetter + word1.substr(1);
