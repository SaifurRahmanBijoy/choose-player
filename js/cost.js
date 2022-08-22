//to calculate the total expenses for the per person expenses after clicking the total button
//also checks if 5 player is selected or not
//if not then return false
document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerInput = document.getElementById("per-player-input");
  const perPlayerInputvalueString = perPlayerInput.value;
  playerCount = document.getElementById("name-list").childElementCount;
  if (isNaN(perPlayerInputvalueString) || perPlayerInputvalueString == "") {
    alert("please enter amount correctly!");
    return;
  }
  const perPlayerInputvalue = parseInt(perPlayerInputvalueString);
  const playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText =
    perPlayerInputvalue *
    document.getElementById("name-list").childElementCount;
});

//to calculate overall total expenses
//(per player expenses * player count)+ manager expenses + coach expenses
//also checks if 5 player is selected or not
//if not then return false
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerExpensesValue = document.getElementById("manager-expenses");
    const managerExpensesString = managerExpensesValue.value;
    if (isNaN(managerExpensesString) || managerExpensesString == "") {
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
      coachExpenses + managerExpenses + (perPlayerInputvalue * document.getElementById("name-list").childElementCount);
  });
