
// basic loop to determine rounds needed to find target number in a range
// establish the range
const MIN = 0;
const MAX = 36;
// This is the number to find
var testNumber = 15;
// set initial value for iteration to 1
var i = 1;

// while loop using randomValue - passing in value of MAX to establish range
// Math.random() returns a random number
// Math.floor(Math.random() returns a number between a range
// *(MAX-MIN) + MIN is a clean way of making sure zero doesn't pop up
while (MAX) {
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;
// break the loop once the random number is found
    if (randomValue == testNumber) {
        break;
    }
//current i is used for output
    console.log("Round " + i + ": " + randomValue);
    i++;
}
// same i used as total number of rounds
console.log("The script went " + i + " rounds before finding " + testNumber + ".");
