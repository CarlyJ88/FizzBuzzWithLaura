var fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', function() {
  it('can pass a number', function() {
    expect(fizzBuzz(1)).toEqual(1);
  })

  // it('When passed a number that is a multiple of 3, the program returns the message "Fizz"', function() {

  // })

  // it('When passed a number that is a multiple of 5, the program returns the message "Buzz"', function() {

  // })

  // it('When passed a number that is a multiple of both 3 and 5, the program ignores the previous 2 rules and returns the message "FizzBuzz"', function() {

  // })

  // it('In all other cases, the program simply returns the given number.', function() {

  // })
})
