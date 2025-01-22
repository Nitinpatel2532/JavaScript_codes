// color-picker using array and random number / hexadecimal number............... bgt5

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let cnz_color=document.querySelector("#cnz_color")


document.querySelector("#btn").addEventListener("click", () => {
    let colors = "#"

for (let i = 0; i < 6; i++){
    colors += arr[rand_num()];
}
    cnz_color.innerHTML = colors;
    document.body.style.backgroundColor=colors;
    
})


const rand_num = () => {
    return Math.floor(Math.random()*arr.length)
}



