// fetch("url",options)
// create a asynchronous function



// let data = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(data);


// return promise in pending state.......

// function fetch_data() {
//     let data = fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log(data)
// }

// fetch_data();


// async -> create a asynchronous function that return promises
// await -> pause the execution of asynchronous function untill resolved or rejected.
// data.json() -> to convert data into json

async function fetch_data() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let res=data.json()
    console.log(res)
}

fetch_data();