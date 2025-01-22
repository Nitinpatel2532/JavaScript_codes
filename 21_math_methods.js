// 1.) what is math methods?

// math object provides set of methods for performing mathematical tasks.
// use :
// To perform complex mathematical operations without manually writting the logic.
// To save time and avoid errors

// Methods :

// 1. math.abs() -> return the absolute value , removing sign
let a = -20;
let a1=Math.abs(a)
console.log(a1)

// 2.math.round() : rounds the number to the nearest number
let b = 4.8
console.log(Math.round(b))

// 3. math.ceil() : rounds a number up to next integer
let c = 4.2
console.log(Math.ceil(c))

// 4.math.floor() : round a number down to previous integer

let d = 9.8
console.log(Math.floor(d))

// 5. math.max() : return maximum number from argument
console.log(Math.max(10, 20, 30))

// 6. math.min() : return minimum number from argument
console.log(Math.min(10, 20, 30))

// 7. math.random() : Generate a random number between 0 (inclusive) and 1 (exclusive).
let e = Math.random() // between 0 to 0.999999999999

e=Math.floor(Math.random()*10)+1
console.log(e)


// 8.math.trunc() : return only integer part by removing decimal numbers

// 9. math.sqrt() :

// 10. math.pow()