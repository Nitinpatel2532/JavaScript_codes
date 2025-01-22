// 1.) What is addEventListner ?

// The addEventListner method is used to attach an event handler to an element.it listnes for specific
// events (eg.. clicks,key press etc).and executes a callback function when the event occurs.

// It is preferred over inline event handler because---
// 1. It allow multiple event listner on the same element.
// 2. It separated the js file from HTML file,improving maintainability
// 3. better control over event propagation..

// 2.) Why we use

// 1. To handle user interactions like clicks,form submissiom,key presses.
// 2. To dynamically attach or remove event listner for flexibilty in web applications..
// 3. ensure code maintainabilty and modularity..

// 3.) Methods and operations.

// 1.Add an Event listner : Use addEventListner to register the event.

const buttonHandler = () => { console.log("Button clicked") }

document.querySelector("#btn").addEventListener("click", buttonHandler)

document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".divpara").style.backgroundColor="orange"
})

// 2. Remove an event listner : 
document.querySelector("#btn").addEventListener("click", buttonHandler)

document.querySelector("#btn").removeEventListener("click", () => {
    document.querySelector(".divpara").style.backgroundColor=""
})

// 3.) Event propagation :
// 1. Capture Phase
// 2.) bubbling phase


// classlist using addeventlistner....

document.querySelector("#btn2").addEventListener("click", () => {
    document.querySelector(".divpara2").classList.toggle("abc")
})