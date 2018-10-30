//invoked functions use immediate calls with arguments introduced early

// define all variabled used by unvoked function ahead of time
var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction)

// returning console.log(theBiggest) returns function ITSELF  -- useful!

console.log(theBiggest);
