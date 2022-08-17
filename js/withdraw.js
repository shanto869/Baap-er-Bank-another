// add event handler of the withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step-1: get the value of withdraw field by using function
  const newWithdrawAmout = getInputFieldValueById("withdraw-field");

  // validation-1 for check valid amount
  if (isNaN(newWithdrawAmout)) {
    alert("Please Provide a valid Amount");
    return;
  }

  // step-2: get the value of previous total withdraw by using function
  const previousTotalWithdraw = getTextElementValueById("total-withdraw");

  // step-3: calculate the current total withdraw
  const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmout;

  // step-5: get previous balance by using the function
  const previousTotalBalance = getTextElementValueById("total-balance");

  // validation-2 for check valid amount
  if (newWithdrawAmout > previousTotalBalance) {
    alert("Baap er Bank a ato TK nai");
    return;
  }

  // step-4: set the current total withdraw by using function
  setTextElementValueById("total-withdraw", currentTotalWithdraw);

  // step-6: calculate the current total balance
  const currentTotalBalance = previousTotalBalance - newWithdrawAmout;

  // step-7: set the current total balance by using function
  setTextElementValueById("total-balance", currentTotalBalance);
});
