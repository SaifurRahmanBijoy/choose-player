
function playerNameInclude(playerId) {
    
  const playerNameText = document.getElementById(playerId);
  const playerName = playerNameText.innerText;
  const nameList = document.getElementById("name-list");
  const li = document.createElement("li");
  li.innerText = playerName;
  nameList.appendChild(li);
}



document.getElementById("btn-messi").addEventListener("click", function () {
  playerNameInclude("name-messi");
});
document.getElementById("btn-neymar").addEventListener("click", function () {
  playerNameInclude("name-neymar");
});
document.getElementById("btn-ronaldo").addEventListener("click", function () {
  playerNameInclude("name-ronaldo");
});
document.getElementById("btn-mbappe").addEventListener("click", function () {
  playerNameInclude("name-mbappe");
});
document.getElementById("btn-aguero").addEventListener("click", function () {
  playerNameInclude("name-aguero");
});
document.getElementById("btn-ramos").addEventListener("click", function () {
  playerNameInclude("name-ramos");
});
