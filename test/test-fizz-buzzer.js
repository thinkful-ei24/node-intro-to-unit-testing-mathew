'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  //test the normal case
  it('should return fizz-buzz, fizz, and buzz appropriately', function() {
    const normalCase = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 30, expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 21, expected: 'fizz'},
      {a: 22, expected: 22},
      {a: 29, expected: 29},
    ];

    normalCase.forEach( (input) => {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      'a',
      '3',
      true
    ];

    badInputs.forEach( input => {
      expect( () => {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

});