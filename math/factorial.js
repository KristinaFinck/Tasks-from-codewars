// Factorial is the product of all positive integers from 1 up to a given number n.
// Example:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// By definition:
// 0! = 1


//solution with cycle
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = i*result
    }
    if (n < 0) {
        return 
       'Negative number'
    }
    return result
    
}
console.log(factorial(5))

// solution with recursive
function factorialRec(n){
    if (n < 0) throw new Error('Negative number')
   return n? n * factorialRec(n-1): 1
}
console.log(factorialRec(4))
console.lot(factorialRec(-1))

//There is no built-in factorial function in JavaScript.