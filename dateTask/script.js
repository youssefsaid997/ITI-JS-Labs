// Show prompt that ask user to enter his birth date and tell user to enter the
// date in the following format (DD – MM – YYYY) ex. 22–01–1999, and
// then create function that take user input as a parameter and ensure that the

// string is entered in this format (that user entered string is 10 characters and
// contains (-) after the second character and after fifth character).[Don't use RegExp, use string functions].

// b. If user input wasn't correct, show alert saying "Wong Date
// // Format".
// ******************up is done*******************

// a. If the user input was correct: make the function create new date
// object, and initialize it with Day, Month, year values (using date
// constructor: Date(y,m,d)) and then show alert to the user with the
// date in date string format.
//

// 5- Make a function that takes date string as a parameter, and returns the Day
// name (Saturday, Sunday,…) of the given date.

var inputValue;

do {
	inputValue = prompt(
		'Please enter your birthdate as the following format (DD – MM – YYYY)'
	);
	if (inputValue === null || inputValue.length === 0) {
		alert('Please enter a date!');
	} else if (!isValideInputString(inputValue)) {
		alert('Wrong Date Format');
	} else {
		console.log(createFormatedDate(inputValue));
		alert(createFormatedDate(inputValue).toDateString());
	}
} while (
	inputValue === null ||
	!inputValue.length ||
	!isValideInputString(inputValue)
);

function isValideInputString(inputString) {
	if (inputString === null) {
		return false;
	}
	if (countCharachtersEqualTo(inputString, '-') !== 2) {
		return false;
	}
	if (inputString.length != 10) {
		return false;
	}
	return areNumbers(inputString.split('-'));
}

function areNumbers(arryOfNumbers) {
	for (var i = 0; i < arryOfNumbers.length; i++) {
		if (isNaN(arryOfNumbers[i])) {
			return false;
		}
	}
	return true;
}

function createFormatedDate(inputValue) {
	var splitedString = inputValue.split('-');
	var day = splitedString[0];
	var month = Number(splitedString[1]) - 1;
	var year = splitedString[2];

	return new Date(year, month, day);
}

function countCharachtersEqualTo(inputString, comparedCharacter) {
	var count = 0;
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === comparedCharacter) {
			count++;
		}
	}
	return count;
}
console.log(countCharachtersEqualTo('11-11-1111', '-'));
console.log(isValideInputString(inputValue));

// function hasCharachtersEqualTo(inputString, comparedCharacter) {
// 	return (
// 		Boolean(inputString.indexOf(comparedCharacter)) +
// 		Boolean(inputString.lastIndexOf(comparedCharacter))
// 	);
// }
