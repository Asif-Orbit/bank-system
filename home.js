// function to take value from input 
function inputValueToNumber(id){
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

// function to take inner text
function innerTextToNumber(id){
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}

const pin = 1122;

// js for add money btn 
document.getElementById("add-money-btn").
addEventListener("click", function(e){
    e.preventDefault()
    const addAmount = inputValueToNumber("add-amount");
    const availableBalance =innerTextToNumber("available-balance");
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = inputValueToNumber("pin-number")

    if(accountNumber.length <11 || addAmount <= 0 || pin !== pinNumber){
        alert("Invalid credentials");
        return;
    }
    const newBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText = newBalance;
})