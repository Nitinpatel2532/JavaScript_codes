// 1.) What are Events?

// In Javascript Events are actions and occurances that happned in browser or user interaction with
// webpage.Example including (clicking a button,pressing a key,moving the mouse,or loading a page).

// Usage::
// Events are used to make web page interactive by performing specific action when an event occour.

// clicking a button submit a form
// Hovering on image show additional info.
// pressing a key can trigger a function

//2.) How to handle events...

// we can handle events by Eventlistner or HTML attributes

// 1. Using event listner

document.querySelector('#btn').addEventListener("click", () => {
    document.body.style.backgroundColor = "lime";
})

// using HTML attributes

function event_fun() {
    document.querySelector("#h1").innerHTML = "clicked by js"
    
}

//3.) common Events methods.......

//1. addEventListner()
//2. removeEventListner()
//3. preventDefault()
//4. stopPropagation()

// 1.addEventListner() : Add Event on element
document.querySelector('#btn').addEventListener("click", () => {
    document.body.style.backgroundColor = "lime";
})

//2. removeEventListner() : remove previously added event in element.

document.querySelector('#btn').removeEventListener("click", () => {
    document.write("removed event");
})

//3. preventDefault() : Prevents the default behaviour of an event (eg. stopping a form submission)
Element.preventDefault();

// stopPropagation(): stops the event from bubbling up or propagating to parent element.


// TYPES::

// 1. Mouse Events :

//  click , dblclick , mousehover , mouseout

// 2.Keyboard Events :

// keydown , keyup , keypress

// 3. Form events :

// submit , change , focus , blur

// 3. window / documents Events:

// load , resize , scroll

// 4. Touch Events ::

// touchstart , touchmove , touchend


