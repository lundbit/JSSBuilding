// Lets reuse any values within function by setting up arguments //
function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;


// assign arguments to names of set variables if you like //
findBiggestFraction(firstFraction, secondFraction);

// lets rerun the function several times using set values//
findBiggestFraction(7/16, 13/25);
findBiggestFraction(1/2, 3/4);
