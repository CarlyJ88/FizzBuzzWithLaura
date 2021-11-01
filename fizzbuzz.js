function fizzBuzz(number) {
  if (number === 15) {
    return "FizzBuzz";
  }
  else if (number === 3) {
    return "Fizz";
  } 
  else if (number === 5) {
    return "Buzz";
  } 
 return number
}

module.exports = fizzBuzz;
