//function to check if 5 player is selected
//if not then add the name to the list
//if yes then show a alert message
let count = 0;
function playerNameInclude(playerId) {
  if (document.getElementById("name-list").childElementCount >= 5) {
    alert("Wow!You've selected 5 Players!");
    return false;
  }
  const playerNameText = document.getElementById(playerId);
  const playerName = playerNameText.innerText;
  const nameList = document.getElementById("name-list");
  const li = document.createElement("li");
  count++;
  li.innerText = count + ". " + playerName;
  nameList.appendChild(li);
}

// function for button disbling
function btndisable(btnId) { 
  selectButton = document.getElementById(btnId);
  selectButton.disabled = true;
  selectButton.style.backgroundColor = "gray";
}

document.getElementById("btn-messi").addEventListener("click", function () {
  playerNameInclude("name-messi");
  btndisable("btn-messi");
});
document.getElementById("btn-neymar").addEventListener("click", function () {
  playerNameInclude("name-neymar");
  btndisable("btn-neymar");
});
document.getElementById("btn-ronaldo").addEventListener("click", function () {
  playerNameInclude("name-ronaldo");
  btndisable("btn-ronaldo");
});
document.getElementById("btn-mbappe").addEventListener("click", function () {
  playerNameInclude("name-mbappe");
  btndisable("btn-mbappe");
});
document.getElementById("btn-aguero").addEventListener("click", function () {
  playerNameInclude("name-aguero");
  btndisable("btn-aguero");
});
document.getElementById("btn-ramos").addEventListener("click", function () {
  playerNameInclude("name-ramos");
  btndisable("btn-ramos");
});
