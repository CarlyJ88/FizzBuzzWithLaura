var fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', function() {
  it('can pass a number', function() {
    expect(fizzBuzz(1)).toEqual(1);
  })

  it('When passed a number that is a multiple of 3, the program returns the message "Fizz"', function() {
    expect(fizzBuzz(3)).toEqual("Fizz")
  })
  it('When passed another number that is a multiple of 3, the program returns the message "Fizz"', function() {
    expect(fizzBuzz(9)).toEqual("Fizz")
  })

  it('When passed a number that is a multiple of 5, the program returns the message "Buzz"', function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  })


  it('When passed another number that is a multiple of 5, the program returns the message "Buzz"', function() {
    expect(fizzBuzz(20)).toEqual("Buzz");
  })


  it('When passed a number that is a multiple of both 3 and 5, the program ignores the previous 2 rules and returns the message "FizzBuzz"', function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  })

  // it('In all other cases, the program simply returns the given number.', function() {

  // })
})
