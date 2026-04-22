// primitives
console.log(typeof "hello");     // string
console.log(typeof 123);         // number
console.log(typeof NaN);         // number ❗
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object ❗ (bug)

// bigint & symbol
console.log(typeof 10n);         // bigint
console.log(typeof Symbol());    // symbol

// objects
console.log(typeof {});          // object
console.log(typeof []);          // object ❗
console.log(typeof new Date());  // object

// functions
console.log(typeof function(){}); // function
console.log(typeof (() => {}));   // function

// classes
class A {}
console.log(typeof A);            // function ❗
// In JavaScript, classes are syntactic sugar over constructor functions,
// so typeof a class returns "function"


// weird cases
console.log(typeof console.log);  // function
console.log(typeof Math);         // object
console.log(typeof JSON);         // object

// not defined variable
// console.log(typeof x);         // undefined ❗ (не падает)

// but:
let y;
console.log(typeof y);            // undefined

// tricky
console.log(typeof typeof 123);   // string ❗

// array check
console.log(Array.isArray([]));   // true