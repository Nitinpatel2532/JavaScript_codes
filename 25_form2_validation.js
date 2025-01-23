// make creative form using events
let a = document.querySelector("#name1")
let b = document.querySelector("#email1")
let c = document.querySelector("#age1")
let d= document.querySelector("#password1")

document.querySelector("#name1").addEventListener("focus", () => {
    a.style.backgroundColor = "lime";
})
document.querySelector("#name1").addEventListener("blur", () => {
    a.style.backgroundColor = "";
})

 
document.querySelector("#email1").addEventListener("focus", () => {
    b.style.backgroundColor = "lime";
})
document.querySelector("#email1").addEventListener("blur", () => {
    b.style.backgroundColor = "";
})

 
document.querySelector("#age1").addEventListener("focus", () => {
    c.style.backgroundColor = "lime";
})
document.querySelector("#age1").addEventListener("blur", () => {
    c.style.backgroundColor = "";
})
 
document.querySelector("#password1").addEventListener("focus", () => {
    d.style.backgroundColor = "lime";
})
document.querySelector("#password1").addEventListener("blur", () => {
    d.style.backgroundColor = "";
 })