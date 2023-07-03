
// Homework #5

function convertToVowels(word) {
    const vowels = "aeiouAEIOU";
    let result = "";
    
    for (let i = 0; i < word.length; i++) {
        // The includes() method returns true if a string contains a specified string.
        if (vowels.includes(word[i])) {
            result += word[i];
        }
    }
    return result;
}

const word = "thisissomeword";
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels);