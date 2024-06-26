
var randomNumber1 = Math.floor( Math.random()*6)+1;
var randomNumber2 = Math.floor( Math.random()*6)+1;

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}


var images = document.querySelectorAll("img");

randomImage1 = "./images/dice"+randomNumber1+".png";
randomImage2 = "./images/dice"+randomNumber2+".png";

images[0].setAttribute("src", randomImage1);
images[1].setAttribute("src", randomImage2);
