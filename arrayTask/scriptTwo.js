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
		console.log(numbersArray);
	}
} while (
	(typeof inputText !== null && !inputText) ||
	!isFinite(inputText) ||
	numbersArray.length < 5
);

function sortAscendingly(array) {
	// var ascendinArray = Array.from(array);

	array.sort(function (a, b) {
		return a - b;
	});

	return array;
}

function sortDescendingly(array) {
	// var decendingArray = Array.from(array);

	array.sort(function (a, b) {
		return b - a;
	});
	return array;
}

document.write(
	"<h3 style='color:red'>You have entered these values" +
		numbersArray.join(' ,') +
		'</h3>'
);
document.write(
	"<h3 style='color:red'>sorting values in ascending order" +
		sortAscendingly(numbersArray).join(' ,') +
		'</h3>'
);
document.write(
	"<h3 style='color:red'>sorting values in descending order" +
		sortDescendingly(numbersArray).join(' ,') +
		'</h3>'
);
