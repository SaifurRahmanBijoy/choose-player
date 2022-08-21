let count = 0;
function playerNameInclude(playerId) {
  const playerNameText = document.getElementById(playerId);
  const playerName = playerNameText.innerText;
  const nameList = document.getElementById("name-list");
  const li = document.createElement("li");
  count++;
  li.innerText = count + ". " + playerName;
  nameList.appendChild(li);
  if (document.getElementById("name-list").childElementCount >= 5) {
    alert("Wow!You've selected 5 Players!");
    return false;
  }
}

document.getElementById("btn-messi").addEventListener("click", function () {
  playerNameInclude("name-messi");
  selectButton = document.getElementById("btn-messi");
  selectButton.disabled = true;
});
document.getElementById("btn-neymar").addEventListener("click", function () {
  playerNameInclude("name-neymar");
  selectButton = document.getElementById("btn-neymar");
  selectButton.disabled = true;
});
document.getElementById("btn-ronaldo").addEventListener("click", function () {
  playerNameInclude("name-ronaldo");
  selectButton = document.getElementById("btn-ronaldo");
  selectButton.disabled = true;
});
document.getElementById("btn-mbappe").addEventListener("click", function () {
  playerNameInclude("name-mbappe");
  selectButton = document.getElementById("btn-mbappe");
  selectButton.disabled = true;
});
document.getElementById("btn-aguero").addEventListener("click", function () {
  playerNameInclude("name-aguero");
  selectButton = document.getElementById("btn-aguero");
  selectButton.disabled = true;
});
document.getElementById("btn-ramos").addEventListener("click", function () {
  playerNameInclude("name-ramos");
  selectButton = document.getElementById("btn-ramos");
  selectButton.disabled = true;
});
