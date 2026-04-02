// count words
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const result = words.reduce((acc, word) => {
   if (!acc[word]) {
      acc[word] = 1
   } else {
      acc[word]++
   }
   return acc
}, {})

console.log(result)


// count numbers
const numbers = [1, 2, 1, 3, 2, 1]

const resultOfNumbers = numbers.reduce((acc, number) => {
   if (!acc[number]) {
      acc[number] = 1
   } else {
      acc[number]++
   }
   return acc
}, {})

console.log(resultOfNumbers)


// create an object ignoring empty strings
const words2 = ['apple', 'banana', 'apple', '', 'banana', 'orange', '']

const result2 = words2.reduce((acc, word) => {
   if (word === '') {
      return acc
   }

   if (!acc[word]) {
      acc[word] = 1
   } else {
      acc[word]++
   }

   return acc
}, {})

console.log(result2)