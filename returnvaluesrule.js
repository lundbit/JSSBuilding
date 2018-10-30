function findBiggestFraction(a,b) {
   // set up new variable called result //
    var result;
    // readjust Ternary to use new variable to replace console.log//
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    // return iteration as variable 'result'back to program //
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

//set variable to display via console.log and then display using //
//console.log with calculation results.//
var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is biggest!");
