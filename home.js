// function to take value from input 
function inputValueToNumber(id) {
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

// function to take inner text
function innerTextToNumber(id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}
// function to toggle 
function toggleButton(id) {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block"

}
// function to color toggle 
function colorToggleButton(id) {
    const allButtons = document.getElementsByClassName("all-btn");
    const allButtonsTitles = document.getElementsByClassName("all-btn-title");
    for (const btn of allButtons) {
        btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]", "text-[#0874f2]");
        btn.classList.add("border-gray-300");

    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874F2]", "bg-[#0874f20d]", "text-[#0874f2]");
}
// constant pin number 
const pin = 1122;
const transactionData = [];


//  toggleButton feature
document.getElementById("money-btn").addEventListener("click", function () {
    toggleButton("add-money-parent");
    colorToggleButton("money-btn");
})
document.getElementById("cash-out-btn").addEventListener("click", function () {
    toggleButton("cash-out-parent");
    colorToggleButton("cash-out-btn");
})
document.getElementById("transfer-btn").addEventListener("click", function () {
    toggleButton("transfer-money-parent");
    colorToggleButton("transfer-btn");
})
document.getElementById("get-bonus-btn").addEventListener("click", function () {
    toggleButton("get-bonus-parent");
    colorToggleButton("get-bonus-btn");
})
document.getElementById("pay-bill-btn").addEventListener("click", function () {
    toggleButton("pay-bill-parent");
    colorToggleButton("pay-bill-btn");
})
document.getElementById("transaction-btn").addEventListener("click", function () {
    toggleButton("transaction-parent");
    colorToggleButton("transaction-btn");
})
document.getElementById("view-all").addEventListener("click", function () {
    toggleButton("latest-payment-parent");
})

// js for add money btn 
document.getElementById("add-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const addAmount = inputValueToNumber("add-amount");
        const availableBalance = innerTextToNumber("available-balance");
        const accountNumber = document.getElementById("account-number").value;
        const pinNumber = inputValueToNumber("pin-number")

        if (accountNumber.length < 11 || addAmount <= 0 || pin !== pinNumber) {
            alert("Invalid credentials");
            return;
        }
        const newBalance = availableBalance + addAmount;
        document.getElementById("available-balance").innerText = newBalance;
        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    })
// js for withdraw money btn 
document.getElementById("withdraw-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const cashOutAmount = inputValueToNumber("withdraw-amount");
        const availableBalance = innerTextToNumber("available-balance");
        const agentNumber = document.getElementById("agent-number").value;
        const pinNumber = inputValueToNumber("withdraw-pin-number")

        if (agentNumber.length < 11 || cashOutAmount <= 0 || pin !== pinNumber) {
            alert("Invalid credentials");
            return;
        }
        const newBalance = availableBalance - cashOutAmount;
        document.getElementById("available-balance").innerText = newBalance;
        const data = {
            name: "Withdraw Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    })
// js for transfer money btn 
document.getElementById("transfer-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const transferAmount = inputValueToNumber("transfer-amount");
        const availableBalance = innerTextToNumber("available-balance");
        const transferAccountNumber = document.getElementById("transfer-account-number").value;
        const transferPinNumber = inputValueToNumber("transfer-pin-number")
        const empty = "";

        if (transferAccountNumber.length < 11 || transferAmount <= 0 || pin !== transferPinNumber) {
            alert("Invalid credentials");
            return;
        }
        const newBalance = availableBalance - transferAmount;
        document.getElementById("available-balance").innerText = newBalance;
        const data = {
            name: "Transfer Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    })
// js for get bonus money btn 
document.getElementById("get-bonus-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const getBonusAmount = inputValueToNumber("get-bonus-amount");
        const availableBalance = innerTextToNumber("available-balance");

        if (getBonusAmount <= 0) {
            alert("Invalid credentials");
            return;
        }
        const newBalance = availableBalance + getBonusAmount;
        document.getElementById("available-balance").innerText = newBalance;
        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    })
// js for pay bill btn 
document.getElementById("pay-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const payBillAmount = inputValueToNumber("pay-bill-amount");
        const availableBalance = innerTextToNumber("available-balance");
        const payBillAccountNumber = document.getElementById("biller-account-number").value;
        const payBillPinNumber = inputValueToNumber("pay-bill-pin-number")

        if (payBillAccountNumber.length < 11 || payBillAmount <= 0 || pin !== payBillPinNumber) {
            alert("Invalid credentials");
            return;
        }
        const newBalance = availableBalance - payBillAmount;
        document.getElementById("available-balance").innerText = newBalance;
        const data = {
            name: "Pay Bill",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data)
    })
//  js for transaction part 


document.getElementById("transaction-btn").addEventListener("click", function () {
    const transactionHistory = document.getElementById("transaction-history");
    transactionHistory.innerText = "";
    for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="flex justify-between items-center h-[70px] bg-white rounded-xl pr-4 pl-4 mt-3">
            <div class="flex  items-center">
                <img src="./assets/wallet1.png" alt="" class="rounded-full  p-[10px] bg-[#f4f5f7] mr-3">
                <div>
                    <h2 class="text-[#080808b3] font-semibold">${data.name}</h2>
                    <p class="text-[12px] text-[#080808b3]">${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `
        transactionHistory.appendChild(div);
    }

})
// js for view all part 
document.getElementById("view-all").addEventListener("click", function () {
    const latestPayment = document.getElementById("latest-payment");
    latestPayment.innerText = "";
    for (const data of transactionData) {
        const div2 = document.createElement("div");
        div2.innerHTML = `
            <div class="flex justify-between items-center h-[70px] bg-white rounded-xl pr-4 pl-4 mt-3">
            <div class="flex  items-center">
                <img src="./assets/wallet1.png" alt="" class="rounded-full  p-[10px] bg-[#f4f5f7] mr-3">
                <div>
                    <h2 class="text-[#080808b3] font-semibold">${data.name}</h2>
                    <p class="text-[12px] text-[#080808b3]">${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
            `
        latestPayment.appendChild(div2);
    }
})