// fetch data from html form and print in a table and stored in a json database...

// first first data from form

document.querySelector("#insert_data").addEventListener("submit", () => {

    // json store data in form of object that why we have to store this multiple data of user in a object.....

    let user_data = {

        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        email: document.querySelector("#email").value,
        city: document.querySelector("#city").value
        
    }
   
    // insert data into json database..........

    fetch("http://localhost:3000/Employees", {
        method: "POST",
        Headers: {                              //headers -> tell the user what type of data we are sending and trying to insert into json
            'content-type': 'application/json'
        },
        body: JSON.stringify(user_data)      // body will we pass as a key
    }
    
    ).then(res=>alert("Data inserted successfully........."))
  
}
)


// delete data..............

function delete_data(id) {
    fetch(`http://localhost:3000/Employees/${id}`, {
        method: "DELETE",
        
    })
    
}