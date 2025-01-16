//  1.) What is an object?
// 2.)Nested object
// 3.) array inside object

// Object in javascript is a variables / data structure  that allow you to group related data and function together.
// in the form of key-value pair.
// these keys are called properties => for data,methods => for functions.
// it is a real life entity that represent properties nad methods..

// Usage: group related data and function into a single place.
// eg. representing a car,user,profile,products.....

const person = {
    name: "nitin patel",
    age: 23,
    Department: "IT",
    email: "nitin@gmail.com",
    greet: function(){
        document.write("Hello my name is "+this.name,"<br>")
    }
}
// document.write(person) // return [object object]
document.write(person.name, "<br>")  //using dot notation
person.greet();    // to print value of function

// Dynamic nature => add or delete properties and method at runtime

// add properties
person.address = "Bhopal"  // add properties in an object
person.address = "Pune"     // overhide the previous value
person.gender="male"
document.write(person.address, "<br>")
document.write(person.gender, "<br>")

// delete properties
delete person.gender;
document.write(person.gender,"<br>")  // deleted / return undefined

//2. nested object

const user = {
    name: "Bob",
    age: 25,
    address: {
        city: "mumbai",
        pincode:462021
    }
}

document.write(user.name, "<br>")
// document.write(user.address) // return object object
document.write(user.address.city,"<br>")

//3. Array in object

const car = {
    car_name: "Tata Safari",
    color: "White",
    model: ["smart", "pure", "adventure", "accomplished"],
    display: function () {
        document.write(`car name: ${this.car_name} <br>
            color: ${this.color}`)        
    },
    
}
document.write(car.car_name, "<br>")
document.write(car.color, "<br>")
document.write(car.model, "<br>")
car.display()
document.write("<br>")


//  How to print all values of an object using for in loop

const profile = {
    name: "Anjel priya",
    Password: "Anjel@gmail.com",
    age: 25,
    gender: "female",
   
    
}
for (let value in profile) {
    document.write(value," : ",profile[value],"<br>")
}
