"use strict"; 

/*
It would be interesting to implement this with a series of callbacks for shits and giggles.
*/
function greeting() {
  var name = window.prompt('what is your name?', 'your name here');
  var message = name.toUpperCase() + ", " + "What a ridiculous name!"
  console.log(message);
  document.getElementById("greeter").innerHTML = message;
};

greeting();