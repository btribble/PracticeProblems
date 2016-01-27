"use strict"

// function to get input from the user.  Needs to validate that the input was a number. 
function simpleCalculator(){
	var input1 = document.getElementById("num1").value; //remember, these are strings!!
	var input2 = document.getElementById("num2").value;; //remember, these are strings!!
	const x = parseFloat(input1);
	const y = parseFloat(input2);
	console.log(x,y);
	if(isNaN(x) || x < 1 || isNaN(y) || y < 1){
		window.alert('Please only use real numbers you insolent ass!')
	}
	else {
		document.getElementById("output").value = (x + ' + ' + y + ' = ' + addInput() + "\n" + x + ' - ' + y + ' = ' + subtractInput() + "\n" + x + ' * ' + y + ' = ' + multiplyInput() + "\n" + x + ' / ' + y + ' = ' + divideInput());
	}
	function addInput(){
	    const sum = x + y;
	    console.log(sum);
	    return sum;
    };
    function subtractInput(){
		const difference = x - y;
		console.log(difference);
		return difference;
	};
	function multiplyInput(){
		const product = x * y;
		console.log(product);
		return product;
	};
	function divideInput(){
		const quotient = x / y;
		console.log(quotient);
		return quotient;
	};
	
	
};












