
// Homework #4

function isPalindrome(word) {
    const reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("lakers")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("celtics")); // false


// Other Solution
// function isPalindrome(word) {
//     let reverseWord = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i];
//     }
//     return word === reverseWord;
// }

// const word = "racecar";
// const palindromeWord = isPalindrome(word);
// console.log(palindromeWord); //true

// const otherWord = "hello!";
// const notPalindrome = isPalindrome(otherWord);
// console.log(notPalindrome); //false

