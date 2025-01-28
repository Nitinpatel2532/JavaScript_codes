// Fetch data from array of object and print into an table at html page or browser....

let User_data = [
    {
        Name: "Bob",
        Email: "Bob@123gmail.com",
        Designation: "HR",
        City:"Pune"
    },
    {
        Name: "Adam",
        Email: "Adam@123gmail.com",
        Designation: "Manager",
        City:"Mumbai"
    },
    {
        Name: "Casey",
        Email: "Casey@123gmail.com",
        Designation: "Clerk",
        City:"Delhi"
    },
    {
        Name: "Hook",
        Email: "Hook@123gmail.com",
        Designation: "Trainee",
        City:"Lucknow"
    }
]

let data=User_data.map((obj) => `
<tr>
<td>${obj.Name}</td>
<td>${obj.Email}</td>
<td>${obj.Designation}</td>
<td>${obj.City}</td>


</tr>

`    
).join("")

document.querySelector("#fetchdata").innerHTML = data;