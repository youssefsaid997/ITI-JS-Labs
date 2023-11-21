var inputText;
var convertedNumber;

do {
	inputText = prompt('Please enter circle radius');
	convertedNumber = parseFloat(inputText);

	if (isNaN(inputText)) {
		alert('please enter a number');
	}
} while ((!inputText && typeof inputText !== null) || isNaN(inputText));

function calculateCircleArea(radius) {
	return Math.PI * radius * radius;
}

alert('Your circle area is' + calculateCircleArea(convertedNumber));
