// Fibonacci sequence:
// A sequence of numbers where each number is the sum of the two previous ones.
// Starts with 0 and 1:
// 0, 1, 1, 2, 3, 5, 8, ...

// Formula:
// F(n) = F(n-1) + F(n-2)
function fibonacci(n){
      if (n < 0) throw new Error('Negative number');

  let arr = [0, 1]
 for (let i = 2; i <= n; i++ ){
    arr[i] = arr[i-1] + arr[i - 2] //arr.push(arr[i-1] + arr[i-2]])
 }
 return arr[n]}
console.log(fibonacci(10))

function fib(n) {
    return n<=1? n: fib(n-1) + fib(n-2);
}
console.log(fib(15))