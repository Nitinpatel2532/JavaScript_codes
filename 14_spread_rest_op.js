// 1.) Spread and rest operator.................

// Spread operator (...)

// Spread operator is used to 'spread' the element of an array or object into indiviual elements..

// uses::
// copying array or object
// merge array or object
// passing array element as argument into functions

// symbol  ...

// syntax:

let arr1 = [10, 20, 30]
let arr2 = [...arr1, 40, 50, 60];
document.write(arr2)
document.write("<br>")


// passing array to a function
function fun(...args) {
    document.write(args)
}
fun(arr1);
document.write("<br>")


//2.) Rest operator (...)

// Rest operator are used to collect multiples values into a single array or object.it is used to handle
// multiples argument in a function or to group remaining elements...

function fun1(a, b, c) {
    document.write(a, "<br>")
    document.write(b, "<br>")
    document.write(c,"<br>")
}
fun1(100, 200, 300)
document.write("<br>")


function fun2(...args) {
   return args.reduce((total,num)=>total+num)
}
let ans=fun2(100, 200, 300,400,500,600)
document.write(ans,"<br>")

