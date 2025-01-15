 // 1.) What is varibales and types of variables.....

        // Variables is a container that is used to hold the values.
        // Types => There are 3 types of variables in JS
        // 1. Var
        // 2.Let
        // 3.Const

        // Var -> When we declare a variables by using var keyword then we can redeclare the variables
        // and reassign the value both

        // Let ->  When we declare a variables by using Let keyword then we can not redeclare the variables again
        // but reassign the value 

        // Const ->  When we declare a variables by using Const keyword then we can not redeclare the variables again
        // and also can't reassign the value 

var a = 10;
var a = 20;      // Reassign the variables
a = 30;       // Reassign the values / Overhide the value
document.write(a + "<br>")

let b = "Nitin"
// let b="patel"     // can not redeclare the variables again../ throw Error
b="Nitin patel"      // overhide the previous value 
document.write(b + "<br>")

const c = "hey this is me"
// const c=" let do it guys.."    //cant redeclare the varibales / throw error
// c="this is you"       //cant reassign the value
document.write(c +"<br>")

// =============================================================================================

// 2.) Data-Types in javascript and its types.

// Data-types can be defined as a different type of values that can be stored in a varibales
// Types =>1. primitive data types
//         2.non - primitive (reference) data types.

// 1.Primitive Data types = Primitive data types are immutable (cannot be changed ) and stored by values.
// Types :
//  1.String = > Represent textual data

var st = "this is nitin patel here"
document.write(st + "<br>")

// 2.number: Represent integer or floating values
var num = 2532
document.write(num + "<br>")
var float = 25.32
document.write(float + "<br>")

// 3. boolean: Represent true or false values
let t = true
document.write(t + "<br>")
let f = false
document.write(f + "<br>")

// 4.undefined: A variables that has been declared but not assign a value..
var undfd;
document.write(undfd + "<br>")  // return undefined

// 5.null: represent intentional absence of value...
var nul = null;
document.write(nul + "<br>")  // return null

//6.symbol: Introduced in ES6. represent a unique identifer
// let sym = Symbol("id");
// document.write(sym + "<br>")

// 7.BigInt:Used for very large number limit (2^53 - 1)...
let bignum = 123n;
document.write(bignum + "<br>")


// 2.) Non-primitive data types / reference data types..
// Types:
// 1. Array: A array is a special type of object used to store ordered collection of values.
let fruits = ["apple", "banana", "grapes"]
document.write(fruits +"<br>")  // print all values separated with ,

// 2.Object: an object is variables used to store collections of data and more complex entites..
let obj = {
    name: "Nitin",
    age: 23,
    email:"nitin@gmail.com"
}
// document.write(obj)  // return object object
document.write(obj.email + "<br>")

// 3.function: function in javascript  treated as first-class object
function fun() {
    document.write("calling function" + "<br>")
}
fun()

// 4.Date: Represent date and time
let today = new Date();
document.write(today)

// RegExp: represent regular expression
let pattern = /[a-z]/g;


// KEY POINTS......
// 1. Array and function are technically object in js.