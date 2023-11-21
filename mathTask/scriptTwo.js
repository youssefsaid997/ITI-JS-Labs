var inputText;
var convertedNumber;

do {
	inputText = prompt('Please enter number to get its square root');
	convertedNumber = parseFloat(inputText);

	if (isNaN(inputText)) {
		alert('please enter a number');
	}
} while ((!inputText && typeof inputText !== null) || !isFinite(inputText));

function calculatedSquareRoot(number) {
	return Math.sqrt(number);
}

alert('Number square root is :' + calculatedSquareRoot(convertedNumber));
