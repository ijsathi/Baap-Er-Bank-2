function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear previus input text
    depositInput.value = '';
    return depositAmount;
    
}
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previusTotal = parseFloat(totalText);
    
    totalElement.innerText = previusTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    return previusBalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previusBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previusBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previusBalanceTotal - depositAmount;
    }
}

// deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    

    // get current diposit 

    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previusDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previusDepositTotal + depositAmount;
     */
    
    
    // update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previusBalanceTotal + depositAmount; */

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
    }
    
    /* // clear previus input text
    depositInput.value = ''; */
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    

    // get current withdraw

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount;
    withdrawTotal.innerText = previusWithdrawTotal + withdrawAmount; */

    

    // update balance after withdraw

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previusBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance){
        console.log('error');
    }
   

})
