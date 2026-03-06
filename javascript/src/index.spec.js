const { greet } = require('./index');
const { sentencer } = require('./index');

describe('greet', () => {
  it('should greet by name', () => {
    const greeting = greet('World');
    expect(greeting).toBe('Hello, World!');
  });
});

describe('sentencer', () => {
  it.each([['5 plus 5', 10], ['6 plus 7', 13], ['6 sum 8', 14], ['6  plus     8', 14]])('Testing sums of different inputs %s = %s', (x, y) =>{
    const sum = sentencer(x);
    expect(sum).toBe(y);
  });

  it.each([['5 minus 5', 0], ['16 subtract 8', 8], ['6 subtract 8', -2], ['6  minus     10', -4]])('Testing subtractions of different inputs %s = %s', (x, y) =>{
    const sum = sentencer(x);
    expect(sum).toBe(y);
  });

  it.each([['5 divide by 5', 1], ['16 divide by 8', 2], ['6 divide by 8', 0.75], ['6  divide by     10', 0.60]])('Testing subtractions of different inputs %s = %s', (x, y) =>{
    const sum = sentencer(x);
    expect(sum).toBe(y);
  });

  it('should tell you do it again dummy, when the expression could not be parsed', () => {
    const sum = sentencer('5 5 plus');
    expect(sum).toBe('Do it again dummy');
  });

});