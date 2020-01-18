var arr = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
// var arr = "crash";

function hello() {
  var audio = new Audio("sounds/" + arr + ".mp3");
  audio.play();
}
for (var i = 0; i <= 6; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var x = this.innerHTML;
    makesound(x);
  });


}


document.addEventListener("keypress",function(e){
var e = e.key;
makesound(e);
});


function makesound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j":
      var crash = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
    break;
    case "k":
      var kick = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kick.play();
    break;
    case "l":
      var snare = new Audio("C:/Users/srika/OneDrive/Desktop/WEB DEVELOPMENT/Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
    break;
    default:console.log(e);

  }
}
