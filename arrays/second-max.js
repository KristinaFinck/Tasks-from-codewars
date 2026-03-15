/*
Find second max number */

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let maxValue = numbers[0];
let secondMaxValue = [0];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > maxValue){
        maxValue = numbers[i]
        secondMaxValue = maxValue
    }
    else if (numbers[i] > secondMaxValue && numbers[i] !== maxValue){
        secondMaxValue = numbers[i]
    }
    console.log(secondMaxValue)
}

/*
Edge cases:
- empty array
- one element
- duplicates
*/
// --- Safe solution ---

function findSecondMax2(arr) {

  if (arr.length < 2) return null

  let max = -Infinity
  let secondMax2 = -Infinity

  for (let num of arr) {

    if (num > max) {
      secondMax2 = max
      max = num

    } else if (num > secondMax2 && num !== max) {
      secondMax2 = num
    }

  }

  return secondMax2 === -Infinity ? null : secondMax2
}
console.log(findSecondMax([1,45,66,2,4,6,-2,-10,-100,100]))

