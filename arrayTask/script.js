var inputText;
var convertedNumber;
var numbersArray = [];

do {
	inputText = prompt('Please enter a number');
	convertedNumber = parseFloat(inputText);
	if (isNaN(inputText)) {
		alert('please enter a number');
	} else {
		numbersArray.push(convertedNumber);
	}
} while (
	(inputText !== null && !inputText) ||
	!isFinite(inputText) ||
	numbersArray.length < 3
);

console.log(numbersArray);

function addingArrayElement(array) {
	var sumOfNumbers = 0;
	for (var i = 0; i < array.length; i++) {
		sumOfNumbers += array[i];
	}

	return sumOfNumbers;
}

function multiplyingArrayElements(array) {
	var result = 1;
	for (var i = 0; i < array.length; i++) {
		result *= array[i];
	}
	return result;
}

function dividingArrayElements(array) {
	var result = array[0];
	for (var i = 0; i < array.length - 1; i++) {
		result /= array[i + 1];
	}

	return result;
}

document.write(
	'<h3 style="color:red">sum of ' +
		numbersArray.length +
		' values is ' +
		numbersArray.join('+') +
		' = ' +
		addingArrayElement(numbersArray) +
		'</h3>'
);
document.write(
	'<h3 style="color:red">Multpication of ' +
		numbersArray.length +
		' values is ' +
		numbersArray.join('*') +
		' = ' +
		multiplyingArrayElements(numbersArray) +
		'</h3>'
);
document.write(
	'<h3 style="color:red">dividing of ' +
		numbersArray.length +
		' values is ' +
		numbersArray.join('/') +
		' = ' +
		dividingArrayElements(numbersArray) +
		'</h3>'
);
