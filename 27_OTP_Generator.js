// OTP generator..........

document.querySelector("#otpbtn").addEventListener("click", () => {
    const otp = Math.floor(100000 + Math.random() * 90000)
    document.querySelector("#otpbox").textContent = otp;
})