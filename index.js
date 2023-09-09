document.querySelectorAll("button")[0].addEventListener("click", function() {
  var A = this.innerHTML;
  makeSound(A);
  buttonAnimation(A);
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
  var A = this.innerHTML;
  makeSound(A);
  buttonAnimation(A);
});

document.addEventListener("keydown", function(event) {

    var Tep = event.key.toUpperCase();

    makeSound(Tep);
  
    buttonAnimation(Tep);
  
});

function makeSound(key){
    
    switch (key) {
        case "A" :
            var audio1 = new Audio('catMeow.mp3');
            audio1.play();
            break;
        case "B":
            var audio2 = new Audio('catMeow.mp3');
            audio2.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector(currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }