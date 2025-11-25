const { greet } = require('./index');

describe('greet', () => {
  it('should greet by name', () => {
    const greeting = greet('World');
    expect(greeting).toBe('Hello, World!');
  });
});