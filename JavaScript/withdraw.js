document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = " ";

   if(isNaN(newWithdrawAmount)){
    alert("Please provide a valid amount");
    return;
   }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);


    // get total balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Insufficient balance");
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})