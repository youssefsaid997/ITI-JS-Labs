// write a script that accepts a string from user through prompt and count the number of
// ‘e’ characters in it.

var inputText;
var lettersNumber;

do {
	inputText = prompt('Please Enter your text');
} while (!inputText && typeof inputText !== null);

function countNumberOfLetter(inputText, letterPassed) {
	var loweredCased = inputText.toLowerCase();
	var lowerCasedLetter = letterPassed.toLowerCase();
	var numberOfLetters = 0;

	for (var i = 0; i < loweredCased.length; i++) {
		if (loweredCased[i] === letterPassed) {
			numberOfLetters++;
		}
	}

	return numberOfLetters;
}

lettersNumber = countNumberOfLetter(inputText, 'e');
alert("'e' letter number in text is:" + lettersNumber);
