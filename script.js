var rand = [
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
];

function winner() {
  var header = document.querySelector("h1");
  var res = "";
  if (rand[0] > rand[1]) {
    res = "Player 1 wins!";
  } else if (rand[0] == rand[1]) {
    res = "It's a draw!";
  } else {
    res = "Player 2 wins!";
  }
  header.innerText = res;
}

for (var i = 1; i <= 2; i++) {
  var dice = "images/dice" + rand[i - 1] + ".png";
  var img = document.getElementById("img" + i);
  img.setAttribute("src", dice);
}

winner();
