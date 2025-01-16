// 1.) what is array of object?

// An array of object is a collection where each element is an object that contains multiple related data,
// eg. list of person,products,students

// usage::
// to group related data together.

// syntax:

let student = [
    {
        name: "Bob",
        age: 23,
        department: "IT",
        city:"mumbai"
        
    },
    {
        name: "Donald",
        age: 20,
        department: "sales",
        city:"pune"
        
    },
    {
        name: "Casey",
        age: 19,
        department: "cs",
        city:"delhi"
        
    },
    {
        name: "Hook",
        age: 32,
        department: "Electrical",
        city:"lucknow"
        
    }
]
// display:

// for (let i = 0; i < student.length; i++){        => can not use
//     document.write(student[i])
// }

// Access indiviual object
document.write(student[0].name)  
document.write("<br>")

for (let value of student) {
    document.write(value.name ," ",value.department," ",value.age,"<br>")
}
document.write("<br>")

const m = student.map((value) => {
    return value.name + " " + value.age
})
document.write(m)
document.write("<br>")





