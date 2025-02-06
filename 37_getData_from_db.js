// steps to create your own database using json............

// 1. first install a json-server package globally
// npm intall -g json-server

// 2. create database and insert the data in key value pair where key is always in double quotes
//  db.json

// 3. open a cmd window and run command  to start a server.........
//  json-server --watch database_name

// 4. copy the endpoints(url) or paste on chrome to read data
// 5. paste the endpoints in fetch() method to perform some operations...

// 6. fetch data in js using fetch() method

// when we fetch the data it always add a unique id for each data........

// ==================================================================================
// fetch data / get data from our own json database

async function fetch_database() {
    let data = await fetch("http://localhost:3000/Employees")
    let final_data = await data.json()
    
    // console.log(final_data)

    // print data inside the table
    let display_data = final_data.map((e) => `
    <tr>
<td>${e.id}  </td>
<td>${e.name}  </td>
<td>${e.age}  </td>
<td>${e.email}  </td>
<td>${e.city}  </td>

    </tr>

    
    
    `).join()
    document.querySelector("#database_data").innerHTML = display_data;
    
}
fetch_database();