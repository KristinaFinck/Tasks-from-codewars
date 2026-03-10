/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0 || word === "") return word;
      return word[0].toUpperCase() + word.slice(1)
    })
    .join('');
}

//here 
// split() breaks the string into an array of words
// /[-_]/ is a regular expression that matches "-" or "_"
// map() iterates over the array and returns a new array
// map receives two arguments: (element, index)
// index === 0 → keep the first word unchanged
// word[0].toUpperCase() → capitalize the first letter
// slice(1) → return the rest of the word without the first letter
// join('') → combine all words into one string

// Short one-line solution

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, letter) => letter.toUpperCase());
}

//here
// replace() searches the string for a pattern and replaces matches

// /[-_](.)/g is a regular expression:
// [-_] → matches "-" or "_"
// (.) → captures the next character after the delimiter
// g → global flag, meaning "find all matches in the string"

// the replace callback receives arguments:
// _ → the full matched substring (for example "-s")
// letter → the captured character after "-" or "_"
