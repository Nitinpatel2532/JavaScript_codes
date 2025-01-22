// Random methods

// task1 : generate 3 random number by one button at one time

let h1 = document.querySelector("#h1")
let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")

document.querySelector("#btn").addEventListener("click", () => {
    h1.innerHTML = Math.floor(Math.random() * 50) + 1
    h2.innerHTML = Math.floor(Math.random() * 50) + 1
    h3.innerHTML=Math.floor(Math.random()*50)+1
})


