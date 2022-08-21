document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerInput = document.getElementById("per-player-input");
  const perPlayerInputvalueString = perPlayerInput.value;
  if (document.getElementById("name-list").childElementCount < 4) {
    alert("You've not selected 5 Players!");
    return;
  } else if (
    isNaN(perPlayerInputvalueString) ||
    perPlayerInputvalueString == ""
  ) {
    alert("please enter amount correctly!");
    return;
  }
  const perPlayerInputvalue = parseInt(perPlayerInputvalueString);
  const playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = perPlayerInputvalue * 5;
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerExpensesValue = document.getElementById("manager-expenses");
    const managerExpensesString = managerExpensesValue.value;
    if (document.getElementById("name-list").childElementCount < 4) {
      alert("You've not selected 5 Players!");
      return;
    } else if (isNaN(managerExpensesString) || managerExpensesString == "") {
      alert("please enter amount correctly!");
    }
    const managerExpenses = parseFloat(managerExpensesString);

    const coachExpensesValue = document.getElementById("coach-expenses");
    const coachExpensesString = coachExpensesValue.value;
    if (isNaN(coachExpensesString) || coachExpensesString == "") {
      alert("please enter amount correctly!");
    }
    const coachExpenses = parseFloat(coachExpensesString);

    const perPlayerInput = document.getElementById("per-player-input");
    const perPlayerInputvalueString = perPlayerInput.value;
    const perPlayerInputvalue = parseFloat(perPlayerInputvalueString);

    const totalValue = document.getElementById("total");
    totalValue.innerText =
      coachExpenses + managerExpenses + perPlayerInputvalue * 5;
  });
