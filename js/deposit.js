// add event handler for the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step-1: get the value of deposit field by using function
  const newDepositAmount = getInputFieldValueById("deposit-field");

  // validation for check valid amount
  if (isNaN(newDepositAmount)) {
    alert("Please Provide a valid Amount");
    return;
  }

  // step-2: get the value of previous total deposit by using function
  const previousTotalDeposit = getTextElementValueById("total-deposit");

  // step-3: calculate the new total deposit
  const totalNewDeposit = previousTotalDeposit + newDepositAmount;

  // step-4: set the current total deposit value
  setTextElementValueById("total-deposit", totalNewDeposit);

  // step-5: get previous balance by using the function
  const previousTotalBalance = getTextElementValueById("total-balance");

  // step-6: calculate the current total balance
  const newTotalBalance = previousTotalBalance + newDepositAmount;

  // step-7: set the current total balance by using function
  setTextElementValueById("total-balance", newTotalBalance);
});
