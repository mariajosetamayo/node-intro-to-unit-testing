const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for fizzBuzzer function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz if number is divisible by 15, buzz by 5 and fizz by 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num:15, expected: 'fizz-buzz'},
      {num:30, expected: 'fizz-buzz'},
      {num:45, expected: 'fizz-buzz'},
      {num:20, expected: 'buzz'},
      {num:35, expected: 'buzz'},
      {num:50, expected: 'buzz'},
      {num:3, expected: 'fizz'},
      {num:9, expected: 'fizz'},
      {num:12, expected: 'fizz'}
    ];
    // for each set of inputs (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0], input[1])
      }).should.throw(Error);
    });
  });
});

