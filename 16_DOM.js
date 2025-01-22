// 1.) what is DOM in js? its usage,implementation,methods.....

// DOM ( document object model ) is a programing interface for web documemts. it represents the structure
// of HTML or XML documents as a tree of object , where each element in the document is a node. this allow
// developers to manipulate the content ,structure ,style of webpage using javascript.

// 2.) Why we use DOM?

// Dynamically update the content of webpage without reloading.
// Add,Remove,modify HTML elements or styles.
// Respond to user interactions like click,input,or mouse movements.

// 3.) Implementation of DOM in js

// To interact with the DOM, javascript uses built-in methods and properties.

// 1.) Selecting Elements..

// select by ID = document.getElementById(idname)
// select by class = document.getElementByClassName(classname)
// select by tag = document.getElementByTagName(tagname)
// Select one element = Document.queryselector()
// Select multiple element = Document.queryselectorAll()

//2.) Ṃanipulating Elements

// Change content = .textContent=" "
// change style = .style
// add new HTML = .innerHTML

//3.) EventHandling

// .addEventListner("event name",function)

// 4.)Create and appending elements
// CreateElement()

// ===========================================================================================

// 1.) Dom Targeting methods.........

// 1. ID,class,name = document.getElementById(idname),document.getElementByClassName(classname),document.getElementByTagName(tagname)
// 2.queryselector , queryselectorall
// =========================================================================================

// 2.)Dom get and set methods

// Dom get methods
// 1.innerText
// 2.InnerHtml
// 3.getAttribute
// 4.getAttributeNode
// 5.Attributes

// Dom set methods
// 1.innerText
// 2.InnerHtml
// 3.setAttribute
// 4.removeAttribute
// 5.Attributes

// =========================================================================================

// 3.Dom css Styling methods

// 1.style
// 2.ClassName
// 3.classList ={
//             add()
//             remove()
//             toggle()
// }

let a = document.getElementById("h1").innerText
console.log(a);

let b = document.getElementsByClassName("p")
    b[0].innerHTML = "<h5> this content change by js file </h5>"

// styling methods

// style

document.body.style.backgroundColor = "pink"

let c = document.getElementsByClassName("divp")
c[0].style.color = "blue"
c[0].style.backgroundColor = "yellow"
c[0].style.padding = "5px 3px 6px 10px"

//  className

let d = document.querySelector(".div2pp").classList="div2css"




