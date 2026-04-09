// CLOSURE: COUNTER EXAMPLE

/*
What is a closure?

A closure is a function that remembers variables
from its outer scope even after that outer function has finished.

In simple words:
the function "remembers" where it was created.
*/

function makeCounter() {
    let count = 1;

    return function () {
        return count++;
    };
}

// usage
const counter1 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

// independent counter
const counter2 = makeCounter();

console.log(counter2()); // 1

/*
Explanation:

Each call of makeCounter creates a new scope.

Inside that scope:
- a new variable `count` is created

The returned function closes over this variable.

So:
counter1 and counter2 have different `count` variables.
*/

// ============================================
// Interview task 1

/*
What will be the output?
*/

function testClosure() {
    let value = 0;

    return function () {
        value += 2;
        return value;
    };
}

const fn = testClosure();

console.log(fn()); // 2
console.log(fn()); // 4

// ============================================
// Interview task 2

/*
Classic closure trap with var
*/

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // 4 4 4
    }, 100);
}

/*
Expected:
1 2 3

Actual:
4 4 4

Why?
Because var is function-scoped, not block-scoped.
All callbacks share the same variable `i`.

By the time setTimeout callbacks run,
the loop has already finished and `i` is 4.

Fix:
use let
*/

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // 1 2 3
    }, 100);
}