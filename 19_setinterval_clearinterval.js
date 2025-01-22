// 1.) What is setInterval And clearInterval methods..

// In Javascript, SetInterval() and clearInterval() are methods used to manage repetitive actions with
// a fixed time delay between each repetition.....

// 1.) Setinterval() -> It repeatedly executes a given function after a specified time interval (in millisecond)

// usage :  To perform periodic tasks like :
// 1. updating a clock
// 2. automatically refreshing data on webpage
// 3. Animations.

const setTime = setInterval(fun, 1000);
function fun() {
    console.log("Hello world...........")
}


// 2.) clearInterval() -> It stop the execution of funtion that was scheduled with Setinterval().

// usage : To stop the repetive task when its no longer needed

clearInterval(setTime)  

// ==================================================================================================

// Timer 

let a = 0;
let res = document.querySelector("#h1")
let st=null

 document.querySelector("#start").addEventListener("click", () => {
     st = setInterval(() => {
        res.innerHTML = a++;
    },100) 
    
} 
  
)

document.querySelector("#stop").addEventListener("click", () => {
    console.log("clicked");
    
    clearInterval(st)
})








