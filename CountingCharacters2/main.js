"use strict"; 

// nest the existing functions into an immediately invoked function expression.

(function getInput() {
  var something = window.prompt('Type Some something to find out how long it is');
  console.log(something);
  if (something.length == 0) {
  	window.alert('You must enter something!');
    getInput();
  }
  else {
  var message = '"' + something + '"' + ' is ' + something.length + ' ' + 'units long.';
  function displayOutput() {
    document.getElementById("output").value = message;
  }
  displayOutput();
}
})();
 
