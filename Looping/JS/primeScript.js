

// going to test for the prime numbers that precede 100 - numbers only divisible by itself
// must consider Sieve of Sundaram later!  
// Post 8   at   https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100


const CEILING = 100;

// set up a function sending in 'testValue' and return 'isPrime'

// tests if there is no remainder if you divide the number by the increment. 
//Not prime if:  1) no remainder, or 2) less than 2. Otherwise, the number is prime.

function primeTest(testValue) {
    // this variable establishes prime as true as default
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        // check to see if there is a remainder
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}
// loop for each increment or iteration, passes along only values with boolean true
for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    console.log(i + " is a prime number.");
}
