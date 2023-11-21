/*
1.String object
1.1 Write a script to determine whether the entered string is palindrome or not. Ask the
user whether to consider case of the entered string or not, handle both cases in your
script i.e. RADAR NOON MOOM are palindrome.
Note: raDaR is not a palindrome if user requested considering case of entered string.

1.2 write a script that accepts a string from user through prompt and count the number of
‘e’ characters in it.

1.3 Write a script that reads from the user his info; validates and displays it with a
welcoming message.
*/

// palindrome --

var inputText;
var isCaseSensitive;
do {
	inputText = prompt('Please enter your text');
} while (!inputText && typeof inputText !== null);

isCaseSensitive = confirm('Do you consider case sensitive?');

function toLowerCaseAllText(inputText) {
	return inputText.toLowerCase();
}

function isPalindrome(inputText) {
	var stringValue;
	if (isCaseSensitive) {
		stringValue = toLowerCaseAllText(inputText);
	} else {
		stringValue = inputText;
	}
	var stringToArray = stringValue.split('');
	stringToArray.reverse().join('');
	return stringValue === stringToArray;
}

if (isPalindrome(inputText)) {
	alert('your text is palidrome');
} else {
	alert('your text is not palidrome');
}
