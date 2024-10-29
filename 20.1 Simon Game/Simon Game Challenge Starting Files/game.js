
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

//step2------------
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

//step5------------
    playSound(userChosenColor);
}

//step4------------

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
//5
    playSound(userChosenColor);
})

//step5------------
function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//step6------------
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout($(function(){
        $("#" + currentColor).removeClass("pressed");                 
    }),100);
}