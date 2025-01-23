//1.) what is local storage ?

// Local storage is a feature of the web browser that allows you to store small amount of data
// as a string data type in the form of (key-value pair). on the user computer.it is used to
// save data locally.so it remains available even if the browser refreshes or close the browser.
// unless explicitely deleted..

// the storage limit around 10 mb.
// stored data as a string. can store object by converting them into json string.
// not accessible for other domain or port.

//2.) Methods ::

// 1. setItem() :- saves a key value pair.
// 2. getItem() :- Retrives the value for a given key.
// 3. removeItem() :- used to delete specific key value pair.
// 4. clear() :- delete all data from local storage.
// 5. key() :- retrives the key at a given index.
// 6. length :- return the number of items in local storage.

// 1. setItem() :- saves a key value pair.
localStorage.setItem("name", "nitin")
localStorage.setItem("course", "FSD")

let contact = "8719966634"
localStorage.setItem("mob", contact)

let age1 = "24"
localStorage.setItem("Age", age1)


// 2. getItem() :- Retrives the value for a given key.
let name = localStorage.getItem("name")
document.write(name,"<br>")

let c = localStorage.getItem("course")
document.write(c, "<br>")

// 3. removeItem() :- used to delete specific key value pair.
localStorage.removeItem("Age")

// 5. key() :- retrives the key at a given index.
let k = localStorage.key(1)
document.write(k, "<br>")

// 6. length :- return the number of items in local storage.
console.log(localStorage.length)

// 4. clear() :- delete all data from local storage.
localStorage.clear()


// key ::

// local storage is synchronous and work only on client side.
// it is not secure for sensitive data eg. password
// can access by js.



