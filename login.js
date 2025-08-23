// function to input value 
function inputValueToNumber(id){
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

const number = 12345678910;
const pin = 1122;
// login button 
document.getElementById("login-btn")
.addEventListener("click", function(){
    const mobileNumber = inputValueToNumber("mobile-number");
    const pinNumber = inputValueToNumber("pin-number");
    if(number === mobileNumber && pin === pinNumber){
        window.location.href="home.html"
    }
    else{
        alert("Invalid Credentials")
    }
})