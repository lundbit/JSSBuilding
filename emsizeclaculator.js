// Script calculates em based on base pixel size for different sizes

function emCalculator(pixels) {
	/* This initiates closure as the findEm is sitll using the var basePixel
	outside iteration loop */
	var basePixel = 16;

	function findEm(){
		return pixels/basePixel;
	}

	return findEm;
}

var smallSize = emCalculator(12);
var mediumSize = emCalculator(18);
var largeSize = emCalculator(24);
var xlargeSize = emCalculator(32);

console.log("Small size: ", smallSize() );
console.log("Medium size: ", mediumSize() );
console.log("Large size: ", largeSize() );
console.log("Extra Large size: ", xlargeSize() );
