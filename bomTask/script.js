/*
3. Create an animation on the page that makes an orange marble move to the next location
in the line every second. Allow the user to stop the animation by placing the cursor on any
marble.
The animation will restart again once the user removes the cursor from that marble. Add
your own interesting feature to the script that tinkers with the speed or location of images
*/
var marbles = Array.from(document.getElementsByTagName('img'));
var intervalKey;
var activeMarble = document.createElement('img');
activeMarble.src = './images/marble2.jpg';
var activeImageIndex = 0;
intervalKey = setInterval(continueFn, 1000);

marbles.forEach(function (image) {
	image.addEventListener('mouseenter', stopInterval);
	image.addEventListener('mouseleave', startInterval);
});

function stopInterval() {
	clearInterval(intervalKey);
}
function startInterval() {
	intervalKey = setInterval(continueFn, 1000);
}

function continueFn() {
	var normalImageIndex = activeImageIndex - 1;
	do {
		if (activeImageIndex === 0) {
			normalImageIndex = 1;
		}
		if (activeImageIndex > 3) {
			activeImageIndex = 0;
			normalImageIndex + 1;
		}
		marbles[activeImageIndex].src = './images/marble2.jpg';
		activeImageIndex++;
		marbles[normalImageIndex].src = './images/marble1.jpg';
	} while (!intervalKey);
}

function createActiveMarble(marbles, activeMarble) {}
