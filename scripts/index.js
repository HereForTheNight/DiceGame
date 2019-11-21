refreshMe = function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector("div.dice img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector("div.dice img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  winner = function(number1, number2) {
    if (number1 > number2) {
      return "Player 1";
    }
    if (number2 > number1) {
      return "Player 2";
    }
      return "Draw";
  };
  document.querySelector("div.container h1").innerHTML = winner(randomNumber1, randomNumber2);

};
refreshMe();
