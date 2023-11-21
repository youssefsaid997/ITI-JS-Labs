// function passArgs(x, y) {
// 	console.log(arguments.length);
// 	if (arguments.length > 2) {
// 		throw new Error('More than 2 args are not allowed');
// 	}
// }

// passArgs(2, 4, 5);

//Write your own function that can add n values ensure that all passing parameters are numerical values only

function addValues() {
	var sumOfNumbers = 0;
	console.log(arguments);
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number') {
			throw new Error('You must add number type only');
		} else {
			sumOfNumbers += arguments[i];
		}
	}

	console.log(sumOfNumbers);
	return sumOfNumbers;
}

addValues(55, 3, 2);

function reverseInputParameters() {
	var outArray = [];
	for (var i = 0; i < arguments.length; i++) {
		outArray.push(arguments[i]);
	}

	return outArray.reverse();
}

console.log(reverseInputParameters(5, 2, 11, -11));
