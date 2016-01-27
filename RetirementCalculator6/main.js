"use strict"
function getCurrentAge(){
	var currentAgeString = document.getElementById("age").value;
	const currentAge = parseFloat(currentAgeString);
	return currentAge;
} 
// Get the age at which the user would like to retire
function getRetirementAge(){
	var retirementAgeString = document.getElementById("retirementAge").value; 
	const retirementAge = parseFloat(retirementAgeString);
	return retirementAge;
}
// Get the current date from system
function getCurrentYear(){
	var currentDate = new Date(); 
	const currentYear = currentDate.getFullYear(); 
	console.log(currentYear);
	return currentYear;
}
// return the year, and difference in which the user can retire.
function calculateRetirementYear(retirementAge, currentAge, currentYear){
	// retirementAge - currentAge = years to work 
	//const yearsToWork = (getRetirementAge() - getCurrentAge()); 
	const yearsToWork = (retirementAge - currentAge);
	//const retirementYear = (getCurrentYear() + yearsToWork);
	const retirementYear = (currentYear + yearsToWork);
	document.getElementById("output").innerHTML = "You have " + yearsToWork + " years to go, you can retire in " + retirementYear;
}

// let the user know they can already retire...if they are r-tards. 

