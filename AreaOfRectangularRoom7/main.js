"use strict"

// Program to find the area of a rectangular room. 
// uses two dimensions, length, and width.
// use a button to invoke the function that will calculate the area.
// need to be able to give the answer in both ft and m squared.  Conversion rate
// will be held in a constant.  
const conversion = 3.2808;

function getLength() {
	var lengthString = document.getElementById("length").value;
	var length = parseFloat(lengthString);
	console.log(length);
	return length;
}

function getWidth(){
	var widthString = document.getElementById("width").value;
	var width = parseFloat(widthString);
	console.log(width);
	return width;
}

function calculateArea(){
	var area = (getLength() * getWidth());
	console.log(area);
	return area;
}

function convertAnswer(){
	var areaMeters = (calculateArea() / conversion);
	return areaMeters;
}

function displayArea(){
		document.getElementById("answer").value = ('The length of the room ' + getLength() + ' feet, and width of the room ' + getWidth() + ' feet.' + "\n" + 'Gives you an area of ' + calculateArea() + ' feet squared, which converts to ' + convertAnswer() + ' meters squared.');
}




