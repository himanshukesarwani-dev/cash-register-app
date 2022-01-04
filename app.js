const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const NotesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes")

function validateBillAndCashAmount() {

}

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {


        if (billAmount.value > cashGiven.value) {
            showMessage("Pay more as your bill amount is greater than the cash you gave.")
        } else if (billAmount.value == cashGiven.value) {
            showMessage("Bill amount is exactly equal to cash given. Hence no change needed to be returned")
        } else {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }

    } else {
        showMessage("Bill Amount be greater than zero. Invalid bill amount");
    }

});


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(rtnAmt) {
    for (let i = 0; i < NotesAvailable.length; i++) {
        const totalNotes = Math.trunc(rtnAmt / NotesAvailable[i]);
        rtnAmt %= NotesAvailable[i];
        noOfNotes[i].innerHTML = totalNotes;
    }
}