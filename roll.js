function rollDice(){

    var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var imageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player1 Wins..!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🏆 Player2 Wins..!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}

}

document.querySelector("button").addEventListener("click", rollDice);

