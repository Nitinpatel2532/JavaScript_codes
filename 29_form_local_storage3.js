// Take data from form field and store it  in browser local storage...........
// ask user to store data or not........
const store_data = () => {
    let data = {
        name: document.querySelector("#name1").value,
        email: document.querySelector("#email1").email1,
        contact: document.querySelector("#contact1").value,
        password:document.querySelector("#password1").value
    }
    let bool = confirm("Do you want to save this data in browser storage.....")
    if (bool == true) {
        localStorage.setItem("Person_data",JSON.stringify(data))
    }
    // localStorage.setItem("Person_data",JSON.stringify(data))
}