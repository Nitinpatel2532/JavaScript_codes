// Local Storage......................
//1.)  How to store and retrieve multiple data of objects or array.....

// To store and retrieve multiple objects or arrays in the browser local storage using javascript
// we can use JSON.stringfy() to convert the data into string before storing it.and JSON.parse()
// to retrieve and parse it back into its original form

// JSON.stringfy() :- to convert the given data into strings.
// JSON.parse() -> to convert the string into its original form..


let user_data = {
    name: "nitin",
    course: "FSD",
    email: "Nitin@gmail.com",
    age:"24"
    
}
// localStorage.setItem("Data",user_data)     //  store  [ object object ]

// convert it into string before storing...

localStorage.setItem("data", JSON.stringify(user_data))

// get data from local storage........

let stored_data = localStorage.getItem("data")
console.log(stored_data)                      // return data in form of string........


// get data from local storage into its original form........

let stored_data2 = localStorage.getItem("data")
console.log(JSON.parse(stored_data2))         //return data in object form......

let stored_data3 = JSON.parse(localStorage.getItem("data"))
console.log(stored_data3)


// particular data of object
let stored_data4 = JSON.parse(localStorage.getItem("data"))
console.log(stored_data3.name ," ",stored_data3.course)


