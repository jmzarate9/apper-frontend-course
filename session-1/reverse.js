
// Homework #3

function reverse(word) {
    // Create an empty string that will host the new created string
    let reverseString = "";
    // (word.length - 1) which corresponds to the last character of the string which is "o".
        // Example:
            /* 
                 First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
                 Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
                 .....            
            */
    for (let i = word.length - 1; i >= 0; i--) {
        reverseString += word[i];
    }
    return reverseString;
}

const word = "cavite";
const reverseWord = reverse(word);
console.log(reverseWord);


// Other Solution without using for loops
// function reverse(word) {
    /* 
        Use the split() method to return a new array
        Use the reverse() method to reverse the new created array
        Use the join() method to join all elements of the array into a string 
    */
//     return word.split("").reverse().join("");
// }

// const word = "hello"
// const reverseWord = reverse(word);
// console.log(reverseWord);