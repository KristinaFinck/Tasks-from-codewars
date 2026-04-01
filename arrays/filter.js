'use strict'

// ===============================
// 1. Remove falsy values
// ===============================

const arr1 = [0, 1, false, 2, '', 3, null, undefined]

const filtered1 = arr1.filter(Boolean)

console.log(filtered1)
// [1, 2, 3]

// ===============================
// 2. Filter numbers greater than N
// ===============================

const numbers = [5, 10, 15, 20]

const filtered2 = numbers.filter(n => n > 10)

console.log(filtered2)
// [15, 20]

// ===============================
// 3. Filter objects by condition
// ===============================

const users = [
  { name: 'Anna', age: 17 },
  { name: 'John', age: 25 },
  { name: 'Kate', age: 19 }
]

const adults = users.filter(user => user.age >= 18)

console.log(adults)
// [{ name: 'John', age: 25 }, { name: 'Kate', age: 19 }]

// ===============================
// 4. Remove empty strings
// ===============================

const cities = ['Paris', '', 'London', '', 'Berlin']

const filteredCities = cities.filter(city => city !== '')

console.log(filteredCities)
// ['Paris', 'London', 'Berlin']

// ===============================
// 5. Remove duplicates
// ===============================

const nums = [1, 2, 2, 3, 3, 4]

const unique = nums.filter((el, index, array) => {
  return array.indexOf(el) === index
})

console.log(unique)
// [1, 2, 3, 4]

// ===============================
// 6. Filter by index (every second element)
// ===============================

const arr2 = ['a', 'b', 'c', 'd', 'e']

const everySecond = arr2.filter((el, index) => index % 2 === 0)

console.log(everySecond)
// ['a', 'c', 'e']

// ===============================
// 7. Filter by multiple conditions
// ===============================

const people = [
  { name: 'Alice', age: 22, active: true },
  { name: 'Bob', age: 17, active: true },
  { name: 'Charlie', age: 25, active: false }
]

const result = people.filter(p => p.age >= 18 && p.active)

console.log(result)
// [{ name: 'Alice', age: 22, active: true }]

// ===============================
// 8. Filter strings by length
// ===============================

const words = ['hi', 'hello', 'world', 'js']

const longWords = words.filter(word => word.length > 3)

console.log(longWords)
// ['hello', 'world']

// ===============================
// 9. Filter items not equal to value (remove specific)
// ===============================

const arr3 = [1, 2, 3, 2, 4]

const withoutTwo = arr3.filter(el => el !== 2)

console.log(withoutTwo)
// [1, 3, 4]

// ===============================
// 10. Filter + map combo
// ===============================

const users2 = [
  { name: 'Anna', age: 17 },
  { name: 'John', age: 25 },
  { name: 'Kate', age: 19 }
]

const names = users2
  .filter(user => user.age >= 18)
  .map(user => user.name)

console.log(names)
// ['John', 'Kate']