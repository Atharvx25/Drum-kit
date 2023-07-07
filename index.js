var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {   //to access all buttons 

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { 

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);   //to add shadow to button function 

  });  // to listen to mouse clicks

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key); //to listen to keyboard keys 

  buttonAnimation(event.key);    //to add shadow to button function 

});


function makeSound(key) {    //we can also use if and else statement

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key); //final case 

  }
}


function buttonAnimation(currentKey) {  //to add key animation 

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");   //key animation when pressed 

  setTimeout(function() {
    activeButton.classList.remove("pressed");    //duration of key animation
  }, 100);

}
