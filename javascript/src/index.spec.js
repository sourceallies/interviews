it('should say hello world', () => {
  const greeting = require('./index').sayHello('world');
  expect(greeting).toBe('Hi world!');
});