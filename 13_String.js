//1.) What is string? usage, implementations , methods

// A String is a data-type that is used to represent a sequence of character.it is commonly used for
// storing and dmanipulating text.

// Declarations of string

// In js we can declare a string in 3 ways:
// 1. using single quates:
 
let str1 ='hello user! this is Nitin patel'
document.write(str1, "<br>")
 
// 2. using double quates:

let str2 = " I am pursuing Full Stack development from cybrom";
document.write(str2,"<br>")

// 3. using backticks (template literals): basically for multi-line string.
let str3 = ` I have completed my graduation from <br>
            "sagar institute of research and technology" <br>Bhopal`;
document.write(str3,"<br>")

// Concatenate two strings::
let name = "Nitin patel";
let greet = "Good morning";
document.write(greet + " " + name,"<br>")
document.write("<br>")
// Methods::
// 1. length => property => return length of string
let st = "    hello user! this is Nitin patel,I am pursuing Full Stack development    " ;
document.write(st,"<br>")
document.write("length: ", st.length)
document.write("<br>")

// 2. toUpperCase
document.write("touppercase: ", st.toUpperCase())
document.write("<br>")

// 2. tolowerCase
document.write("toLowerCase: ", st.toLowerCase())
document.write("<br>")

// 3.slice()
document.write("extract some portion : ", st.slice(0,5))
document.write("<br>")

// 4.replace()
document.write("Replace : ", st.replace("development","Developer"))
document.write("<br>")

// 5.trim() : removes whitespace from both ends of string
document.write("whitespace : ", st.trim())
document.write("<br>")

// and many more methods...............

// ===============================================================================================

// 2.) backtick string / template literals

// A backtick string in javascript is also known as template literal,is a way to create a string instead
// of single quates or double quotes,commonly used for writing multi-line string and embedding expression
// inside string..

// usage:
// 1. multi-line string
// 2. string interpolation -> use expression inside string
// 3.expression inside

// syntax:

let a = `this is me
nitin patel
from bhopal`
console.log(a)
document.write(a)
document.write("<br>")

let age = 23;
let b = ` this is nitin patel
and age is ${age} `
console.log(b)
document.write(b)
document.write("<br>")

let num1 = 20;
let num2 = 30;
let res = `Addition of two number is : ${num1 + num2}`
document.write(res)


            
