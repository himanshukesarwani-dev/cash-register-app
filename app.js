const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message")

function validateBillAndCashAmount() {

}

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
     
        console.log("bill amount is greater than zero");
    } 
    
    else {
       showMessage("Bill Amount be greater than zero. Invalid bill amount");
    }

});


function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}