// 1.) What is an API?
// 2.) what is fetch method and its usage , HTTP request , REturn type
// 3.) what is promises? , how to handle it , stages , usage
// 4.) Async and Await?
// 5.)  Difference Between Synchronous And Asynchronous Programming.
// 6.) Is javascript synchrnous or asynchronous?
// 7.) How javascript used asynchronous programming.....



// API (Application programming interface) is a way for different software or services to
// communicate.

// Api allow us to interact with external serviecs (like fetching data from server) or
// browser fetures (eg. DOM,Geolocation).

// 2.)What does API contain?

// 1.) Endpoints -> URl to access specific resources.
// 2.) methods -> define what actions you can perform (GET,POST,DELETE,PUT).
// 3.) Request ->
// 4.) Response ->

// 3.) How is an API used.

// API are used to-
// 1. Fetch data from server.
// 2. Send data to a server.
// 3. Perform CRUD operations.


// =====================================================================================================

// 4.) What is fetch method?

// Fetch method is used to make HTTP request to a server(eg.. to get or send data). and handle
// response from server.It is part of fetch API and work asynchrnously meaning it doesnt
// block the main thread while waiting for the response.

// 2.) what does it do -

// 1. fetch is used to communicate with APi or server such as fetching data,form submission,downloading.

//3. What does it return -

// It return a promises that resolve to a response object.the response object contains the
// server reponse like, data , staus, error.and the response object provide method to process
// the response data (like .json() , .text() , .blob() etc..)

// 4.) why use it.

// it is a simpler and modern compares to older methods like XMLHttprequest.
// it allow handling both success and failures scenories cleanly using .then() and .catch()
// or  async / await

// syntax::

//   fetch(url,options) ->take 2 argument

// url : the API endpoint or server URL.
// options : customise the request,eg specify HTTP requests (get,post) etc.


// HTTP request ::
// the fetch method can handle different type of HTTP request like(GET,POST,PUT,DELETE)
// these methods are used to interact with server or APIs for for various operations like
// retriving,creating,updating and deleting resurces..

// Request in fetch ::

//1. GET Request : used to fetch / retrieve data from server (default method in fetch)
//2. POST Request : Used to send data to server (eg. creating a resource)
//3. PUT Request : Used to update or replace a resource on the server.
//4. PATCH Request : To partially update an existing resource.
//5. DELETE : To remove resources..

// =====================================================================================================

// 1.) what is promises?

// Promises in javascript is a object that is returned by fetch method() and that is resolved
// to response object.response object contain server response like(data,status,error) by providing
// response method (.json, .text() etc..)

// Promise in js is an object that is used to handle asynchronous operations..it represent a
// value that may be available now,in futher or never. promises help manage tasks like
// API calls,timers,or file handling without blocking the main thread.......

// 2.) Return type of promises:

// A promise object ,which can resolve to a value or reject with an error.

// 3.) Stages of promises ::

// 1. pending : the initial state (neither fulfilled nor rejected)
// 2. fulfilled : The operation was succesfull,and promise resolved with a value.
// 3. rejected : The operation failed and the promise was rejected with an error.

// 4.) promises can be handled using three approaches ::

// 1. .then() -> used to handle resolved data
// 2. .catch() -> used to handle rejected data (error).
// 3. .finally() -> execute a block of code regardless promises outcome (resolves or rejected).

// 5.) What is async and await ::

// async : Used to define an asynchronous fuction.It ensures the function always return a promise.
// await : pause the executuion of an asychronous function until the promise is resolved or rejected.

// used : provide a cleaner and more readable way to handle promises by working with aynchronous
// code as if it were synchronous..




// 5.) static methods ::

// 1. promise.all()
// 2. promise.race()
// 3. promise.any()
// 4. promise.allsettled()

// 6.use::

// 1.

// =====================================================================================================

//   Difference Between Synchronous And Asynchronous Programming.

// 1. Synchronous ::

// 1. In Synchronous programming tasks are executed one after another like in sequence mannner.
// 2. The task must be finishes before starting the next one.
// 3. it blocks the execution of code,meaning the programs waits for a task to complete
// before the forword..

// 2. Asynchronous ::

// 1. In asynchronous programming,tasks can start,run in background and can finish later while
// the program can continue other tasks..
// 2. It does not block the execution of code...
// 3. commonly used for tasks that time , like API calls,file reading or timers


// why asynchronous is important in js.

// javascipt is a single threaded. meaning it can perform one task at a time.
// asynchronous progemming ensures tasks like fetching data from server or waiting for user input
// dont block the rest of programs,keeping the application fast and responsive..

// How to handle asynchronous tasks..

// callbacks (old method, harder to manage)
// promises (modern , easier to use)
// async / await ( even more readable and clean)

 
//=====================================================================================================

//1. Is javascript synchronous or asynchronous

// javacript is a single threaded and by default it is synchronous means -
// 1. it execute the tasks one after another at a time,in same order in they apperard.
// 2. The next task will not begin untill the current one is finished.this is called Blocking
// execution...

//2. how js uses asynchronous programming..........

// Javascipt also supports asynchronous programming to perform tasks like fetching data,
// file handling,timer without blocking the main thread..
// using ->
// 1.web API (setTimeOut ,fetch)
// 2.promises
// 3.Async / Await

// how to implement

//1. callback(modern way)
//2. promises ->new way
//3. Async / Await -> simpler way







