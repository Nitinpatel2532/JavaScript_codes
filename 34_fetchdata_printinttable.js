// Fetching data from json and print inside the table of html..........

async function fetch_data() {
    let fetching = await fetch("https://jsonplaceholder.typicode.com/posts");
    let final = await fetching.json();

    // console.log(final)

    let final_data = final.map((data) => `
    <tr>
    <td> ${data.userId} </td>
       <td>${data.id}  </td>
          <td>${data.title}</td>


    </tr>
    
    `).join("")


    document.querySelector("#Displaydata").innerHTML=final_data

    
}
fetch_data()