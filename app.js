const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message")

function validateBillAndCashAmount() {

}

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        console.log("bill amount is greater than zero")
    } else {
        message.style.display = "block"
        message.innerText = "The bill amount should be greater than zero";
    }

});