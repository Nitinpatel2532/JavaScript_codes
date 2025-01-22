//1.)  what is SetTimeOut And ClearTimeOut ?

// In javascript, setTimeout and clearTimeout methods are used to manage delayed execution of code.

// 1. SetTimeOut - It runs a function after a specified amount of time.
// use : To delay the execution of code.eg.if you want a message after 3 min.

let a= setTimeout(() => {
    alert("30 minutes left...........")
}, 5000)

// 2. clearInterval : It cancels a timeout that was set using settimeout.
// use : To stop the execution of a function that was supposed to run after a delay..........

let b= setTimeout(() => {
    alert("30 minutes left...........")
}, 5000)

clearTimeout(b)

 