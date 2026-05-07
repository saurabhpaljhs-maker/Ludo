
function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').innerText = '🎲 ' + dice;
}
