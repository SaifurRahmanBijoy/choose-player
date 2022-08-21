document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerInput = document.getElementById("per-player-input");
  const perPlayerInputvalueString = perPlayerInput.value;
  const perPlayerInputvalue = parseFloat(perPlayerInputvalueString);
  const playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = perPlayerInputvalue * 5;
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerExpensesValue = document.getElementById("manager-expenses");
    const managerExpensesString = managerExpensesValue.value;
    const managerExpenses = parseFloat(managerExpensesString);

    const coachExpensesValue = document.getElementById("coach-expenses");
    const coachExpensesString = coachExpensesValue.value;
    const coachExpenses = parseFloat(coachExpensesString);

    const perPlayerInput = document.getElementById("per-player-input");
    const perPlayerInputvalueString = perPlayerInput.value;
    const perPlayerInputvalue = parseFloat(perPlayerInputvalueString);

    const totalValue = document.getElementById("total");
    totalValue.innerText = coachExpenses + managerExpenses + (perPlayerInputvalue*5);
  });
