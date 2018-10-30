// Using anonymous functions bring less bloat to code

// replace global variables with arguments (a,b) inside function

// set your funciton to a variable called result

var theBiggest = function(a,b) {
  var result;
  a>b ? result = ["a",a] : result = ["b",b];
  return result;
}

// browser looks for anon function theBiggest and runs it with (a/b) input

console.log(theBiggest(7/9,13/25))
