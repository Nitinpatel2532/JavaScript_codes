//1.) what is form validation in js ?

// Form validation in js is a way to check if the dataa entered by user in a form (like.. name,email,contact)
// is correct or complete before sending it to the server.It helps ensures the data is in right format
// and avoids sending incorrect or empty information.

//2.)  Usage / importants :

// Improves user experience : correct the user mistakes
// reduce server load :
// Ensure data integrity :

//3.) Events :

// 1.onsubmit -> triggered when the form is submitted.
// 2.onblur -> triggered when the user leave a field
// 3.oninput -> triggered when the user type or change input in a field.
// 4.onchange -> triggered when the user change the value of a field.

// 4.) methods :

// 1. value -> helps to get the value of input field
// 2. trim -> removes the spaces from input by user.
// 3. test -> check the pattern using regular expression.

// ================================================================================================



function valid() {
    let name1 = document.querySelector("#name").value
    let contact1 = document.querySelector("#contact").value
    let password1 = document.querySelector("#password").value
    let password2 = document.querySelector("#repassword").value
    let email1 = document.querySelector("#email").value
    let age1 = document.querySelector("#age").value
    
    if (name1 == "" || contact1 == "" || email1 == "" || age1 == "" || password1 == "" || password1 == "") {
        alert("All fields are mandoratory...")
        // document.querySelector("#name").focus()
        
        return false;
    } else if (contact1.length > 10 || contact1.length < 10) {
        alert("Enter 10 digits mobile number...")
        document.querySelector("#contact").focus()
        return false;
    } else if (isNaN(contact1)) {
        alert("Only numbers are allowed..")
        document.querySelector("#contact").focus()
        return false;
    } else if (password1 != password2) {
        alert("password must be same..")
        document.querySelector("#password").focus()
        return false;
    } else if (age1 > 40 || age1 < 20) {
        alert("Age must be in between 20 - 40")
        document.querySelector("#age").focus()
        return false;
    } else if (email1.include("@")) {
        alert("Enter valid email Id..")
        return false;
    }
    else {
        true;
    }
    
}




