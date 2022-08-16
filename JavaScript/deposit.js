document.getElementById('btn-diposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    depositField.value = "";

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;


})