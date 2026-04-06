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

console.log(result) //{ apple: 3, banana: 2, orange: 1 }

//============================================================
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

console.log(resultOfNumbers)//{ '1': 3, '2': 2, '3': 1 }

//============================================================
// create an object ignoring empty strings
const words2 = ['apple', 'banana', 'apple', '', 'banana', 'orange', '']

const trimmedString = words2.reduce((acc, word) => {
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

console.log(trimmedString) //{ apple: 2, banana: 2, orange: 1 }

//============================================================

// find the max integer 
const numbers2 = [3, 7, 2, 9, 5];
const maxInteger = numbers2.reduce((acc, number) => {
  return number > acc ? number : acc
})
 console.log(maxInteger) // 9
// ===========================================================
 // double every integer in the array
 const doubleArr = numbers2.reduce((acc, number) => {
  acc.push(number * 2)
  return acc
}, [])
console.log(doubleArr) //[ 6, 14, 4, 18, 10 ]

//=============================================================
// group people by age
const people = [
  { name: 'Anna', age: 20 },
  { name: 'Ivan', age: 17 },
  { name: 'Olga', age: 25 },
  { name: 'Petr', age: 16 }
]

const groups = people.reduce((acc, person) => {

   if (person.age >= 18) {
    acc.adult.push(person)
   } else { acc.minor.push(person)}

   return acc
}, {
   adult: [],
   minor: []
})
console.log(groups)// {
 // adult: [ { name: 'Anna', age: 20 }, { name: 'Olga', age: 25 } ],
 // minor: [ { name: 'Ivan', age: 17 }, { name: 'Petr', age: 16 } ]
// }