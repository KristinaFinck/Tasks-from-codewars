// map creates a new array of the same length based on the original one

// example 1: transform values
const numbers = [1, 2, 3]
const doubled = numbers.map(n => n * 2)

// example 2: change type
const strings = ['1', '2', '3']
const nums = strings.map(el => +el)
// clearer way
const nums2 = ['1', '2', '3'].map(el => Number(el))



// example 3: with condition
const ages = ['18', '20', '12'].map((el) => +el)
// transform array of strings to array of numbers

const people = ages.map((age) => {
    // 
if (age >= 18) {
        return { age: age, adult: true }
     } else {
        return { age, adult: false }
     }

});
console.log(people)
// [
//   { age: 18, adult: true },
//   { age: 20, adult: true },
//   { age: 12, adult: false }
// ]

// map returns a new array with the same length

// 1. does not mutate original array
const arr = [1, 2, 3]

const result = arr.map(n => n * 2)

console.log(arr)    // [1, 2, 3]
console.log(result) // [2, 4, 6]

// 2. must return a value
const res = [1, 2, 3].map(n => n * 2)
console.log(res) // 2, 4, 6

const res2 = [2,4,6].map(n => {
    return  n * 2
    // if we hame { } return is required
})

// 3. use () for objects
let newArray = ages.map( n => ({ age: n })) 
// do not forget ( ) for getting an object
console.log(newArray)


// 4. has access to index
let array = [10, 20, 30].map((value, index) => {
  return value + index
}) 
console.log(array) // 10, 21, 32

// 5. can be chained
// 6. always returns same length

// common mistake:
[1, 2, 3].map(n => { n * 2 }) // [undefined, undefined, undefined]