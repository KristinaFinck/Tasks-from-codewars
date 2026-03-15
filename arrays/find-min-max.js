/*
Find Min and Max in Array

Algorithm:
Iterate through the array and update min/max values.

Time Complexity: O(n)
Space Complexity: O(1)
*/

//Find min value
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]< minValue){
        minValue = numbers[i]
    }
}
console.log(minValue)

//Find max value
const numbers2 = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let maxValue = numbers2[0];
for (let i = 0; i < numbers2.length; i++){
    if(numbers2[i] > maxValue){
        maxValue = numbers2[i]
    }
}
console.log(maxValue)

// Short solution

const min = Math.min(...numbers)
const max = Math.max(...numbers)

console.log(min)
console.log(max)

//Solution with reduce
const numbers3 = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]

const minValueReduce = numbers3.reduce((min, current) => {
  return current < min ? current : min
})

console.log(minValueReduce)