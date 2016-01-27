"use strict"

/*****
assume 8 pieces per pizza.

prompt the user for the number of people attending, and how many pieces of pizza each person
should get.  Then display to the user the number of pizzas they should order.

****/
const pieSlices = 8;

function getPeople () {
	var peopleString = document.getElementById("people").value;
	var people = parseFloat(peopleString);
	console.log(people);
	return people;
}

function getSlices () {
	var slicesString = document.getElementById("slices").value;
	var slices = parseFloat(slicesString);
	console.log(slices);
	return slices;
}

function calculatePies () {
	// people * slices = needed slices
	var neededSlices = (getPeople() * getSlices());
	var necessaryPies = Math.ceil(neededSlices / pieSlices);
	console.log(necessaryPies);
	return necessaryPies;
}

function displayOrderInfo () {
	document.getElementById("answer").innerHTML = ('order ' + calculatePies() + ' pies for the party');
}