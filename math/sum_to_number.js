// We should find the sum of all numbers from 1 to n (n > 0)

// solution with a cycle
function sumWithCycle(n) {
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i
  }

  return result
}

// solution with recursion
function sumWithRecursion(n) {
  if (n === 1) return 1
  return n + sumWithRecursion(n - 1)
}

// solution with arithmetic progression
// Sn = n / 2 * (a1 + an)
function sumWithArithmeticProgression(n) {
  return (n / 2) * (1 + n)
}