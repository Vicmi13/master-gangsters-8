const sum = require('./sum');

test('1 + 2 to be equal to 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})

test('0 - 5 to be equal to -5', () => {
  const result = sum(0, -5);
  expect(result).toBe(-5);
})

test('[] + NaN to be equal to NaN', () => {
  const result = sum([], NaN);
  expect(result).toBe("NaN");
})