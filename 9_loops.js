// 1.) What is Loops / Iteration , Types,usage,advantage.....

// Loops are used to repeat a block of code multiples times untill a condition is satisfied or no longer true.

// Types::
// 1. for loop : When we know that how many times we want to repeat a block of code.
// 2. while loop : when we don't know how many times we want to repeat a block of code../Repeat as long
// as condition is true.....
// 3. do-while loop : similar as while loop , but its execute atleast once before checking the condition.
// 4. for in loop : Used to loop through the properties of an object..
// 5. for of loop : Used to loop through the values of an iterable like arrays or strings....

// Usage::
// 1.Iterating over arrays on strings
// 2.performing repeated actions(eg,calcualtion,logging)

// Advantage::
// 1.Code reusability :
// 2.Efficiency
// 3.Flexibility


// counting 1 - 10
for (var i = 1; i <= 10; i++){
    document.write(i ," ")
}
document.write("<br>")

// print even number 1-50
for (var i = 1; i <= 50; i++){
    if (i % 2 == 0) {
        document.write(i ," ")
    }    
}
document.write("<br>")

// print odd number 1-50
for (var i = 1; i <= 50; i++){
    if (i % 2 != 0) {
        document.write(i ," ")
    }  
}
document.write("<br>")

// for in

var obj = {
    fname: "Nitin",
    lname: "patel",
    age: 23,
    email: "nitin@gmail.com",
    salary:"85000"
}
// document.write(obj.fname)
for (var key in obj) {
    document.write(key," : ",obj[key] ,"<br>")
}

// for of

let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    document.write(value," ")
}

