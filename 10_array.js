// 1.) What is an Array?its types,usage,advantage,methods

// An Array is a data structure used to store multiple values of same data type or different data types
// into a single variable.and can access these values by using index number that always start from 0.

// NOTE::
// modification of an array (permanent / temporary) depend on the method used......

// 1. permanent changes (mutating method)
// a.push()
// b.pop()
// c.splice()
// d.sort()
// e.reverse()

// 2.temporary changes (non-mutating methods)
// a.map()
// b.filter()
// c.concat()
// d.slice()



// TYPES:
// 1.String array:
// 2.numeric array:
// 3.mixed array
// 4.multidimensional array

// usage::
// To store multiples related values together in a single variable
// access by using index.

let arr = [10, 20, 30, 40, 50, 60];
document.write(arr) // print all values
document.write("<br>")

let fruit = ["apple", "banana", "orange"]
document.write(fruit)
document.write("<br>")

let mix = [1, "nitin", "patel", 23, true, false, 0.23, null, undefined]
document.write(mix)
document.write("<br>")

let multidimensional = [[1, 2, 3], ["Bob", "adam", "Casey"]]
document.write(multidimensional, "<br>")
document.write(multidimensional[0],"<br>")
document.write(multidimensional[1],"<br>")
document.write(multidimensional[0][2], "<br>")
document.write(multidimensional[1][1], "<br>")

// access throgh loops

// for of
let arr2 = [10, 20, 30, 40, 50, 60]
for (let value of arr2) {
    document.write(value," ")
}
document.write("<br>")

// for in
let arr3 = ["Bob", "adam", "Casey"]
for (let value in arr3) {
    document.write(arr3[value]," ")
}
document.write("<br>")

// for loop
let arr4 = [10, 20, 30, 40, 50, 60,"Bob", "adam", "Casey"]
for (let i = 0; i < arr4.length; i++){
    document.write(arr4[i]," ")
}
document.write("<br>")
document.write("<br>")

// METHODS::

// lenght property: return the number of elements in an aray (size)

// document.write("Length of an array: ", array.length)

//1. push(): To add element in last of an array 
let array = [10, 20, 30, 40]

document.write("Before calculation:", array,"<br>")
array.push(50)
document.write("After insert element at last", array)
document.write("<br>")
document.write("<br>")

//2. pop(): To remove last element from an array 

document.write("Before calculation:", array,"<br>")
array.pop(50)
document.write("After remove last element :", array)
document.write("<br>")
document.write("<br>")

//3. shift(): To remove first element from an array 

document.write("Before calculation:", array,"<br>")
array.shift(50)
document.write("After remove first element : ", array)
document.write("<br>")
document.write("<br>")

//4. unshift(): To add element begin of an array 

document.write("Before calculation:", array,"<br>")
array.unshift(50)
document.write("Add element in begin : ", array)
document.write("<br>")
document.write("<br>")

//5. indexOf(): return position of an element

document.write("Before calculation:", array,"<br>")
let p= array.indexOf(30)
document.write("array: ", array,"<br>")
document.write("position: ", p)
document.write("<br>")
document.write("<br>")

//6. sort()=> Arrange the elements of an array in ascending or descending order
document.write("Before sorting:", array,"<br>")
array.sort()
document.write("After sorting: ", array,"<br>")
document.write("<br>")
document.write("<br>")

//7. reverse()=> To reverse the array
document.write("Before reversing:", array,"<br>")
array.reverse()
document.write("After reverse: ", array,"<br>")
document.write("<br>")
document.write("<br>")

// ===========================================================================

//8.  slice() and splice() method

// 1. slice() : create a new array by extracting  the portion of an original array without changing it.

// syntax::
let ar = [10, 20, 30, 40, 50, 60, 70]
document.write(ar,"<br>")
let ar2 = ar.slice(2, 5)  // 5 means till 4
document.write(ar2, "<br><br>")

// 2. splice() : Modifies the original array by adding,removing or replacing elements
let ar3 = [10, 20, 30, 40, 50, 60, 70,80,90,100]
document.write(ar3,"<br>")
let ar4 = ar3.splice(1, 3)  // remove 3 element from index 1
document.write(ar4, "<br><br>") 
document.write(ar3, "<br>")

// add
ar3.splice(2, 0, 5, 52, 5, 1, 2, 45)
document.write(ar3, "<br>")

// replace
ar3.splice(2, 3, 5, 52, 5, 1, 2, 45)
document.write(ar3, "<br>")
document.write("<br><br>")

// =======================================================================================

// map() and filter() methods (non-mutating method)

// 1.) map() : Basically map() method is used to tranform / modify every elements of an original array and create
//           a new array with the same size of an original array without changing the original array.

// Usage:  Transform each elements of an array,object....

// WORKING: Create a new array by applying callback function to each element of an array...

let map_arr = [10, 20, 30, 40, 50]
document.write(map_arr,"<br>")
let map_arr2 = map_arr.map((value) => value * 2)
document.write(map_arr2)
document.write("<br><br>")

// 2. filter() : Filter() method is used to filter the elements of an array based on a condition.
// and return a new array with the elements that passes a condition,without modifying the original array.

// Usage : Filter elements of an array by applying condition

// Working : used callback function to filter the elements

let filter_arr = [2, 52, 5, 45, 2, 62, 10, 23, 5, 82, 89, 22, 30, 403, 22, 530, 145, 2]
document.write("Before filter:", filter_arr,"<br>")
let filter_arr2 = filter_arr.filter((value) => value > 50)
document.write("After filter:", filter_arr2,"<br>")










