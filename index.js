function isPalindrome(word) {
  // Write your algorithm here
  //iterate the word going forward 
  for(let i = 0; i < word.length / 2; i++){
    //we start setting a iteration loop backward
    const j = word.length -1 -i;
    //if statement to return if it is true or false
    if(word[i] !== word[j]) return false
  }
return true
}

/* 
  Add your pseudocode here
  we check letter by assigning it an index i form the beggining
  another check starts form the end of the wod with an index j

*/

/*
  Add written explanation of your solution here
  examples
  racecar
  i      j
  we check i going in the foerward loop while j goes in a backward loop till
  the thay reach the middle
  for racecar it is 'e'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
