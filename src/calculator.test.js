import calculator from "./calculator";

// Calculator.add tests
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2))
  .toBe(3);
});

test('adds 10000 + 103 to equal 10103', () => {
  expect(calculator.add(10000, 103))
  .toBe(10103);
});

test('adds 45 + 36 to equal 81', () => {
  expect(calculator.add(45, 36))
  .toBe(81);
});

test('adds -11 + 13 to equal 2', () => {
  expect(calculator.add(-11, 13))
  .toBe(2);
});



// Calculator.subtract tests
test('subtracts -11 - 13 to equal -24', () => {
  expect(calculator.subtract(-11, 13))
  .toBe(-24);
});

test('subtracts -11 - -13 to equal 2', () => {
  expect(calculator.subtract(-11, -13))
  .toBe(2);
});

test('subtracts 40 - 21 equal 19', () => {
  expect(calculator.subtract(40, 21))
  .toBe(19);
});

test('subtracts 64 - 32 to equal 3', () => {
  expect(calculator.subtract(64, 32))
  .toBe(32);
});



// Calculator.divide tests
test('divides 64 / 32 to equal 2', () => {
  expect(calculator.divide(64, 32))
  .toBe(2);
});

test('divides 24 / 4 to equal 6', () => {
  expect(calculator.divide(24, 4))
  .toBe(6);
});

test('divides 60 / 10 to equal 6', () => {
  expect(calculator.divide(60, 10))
  .toBe(6);
});

test('divides 3 / 2 to equal 1.5', () => {
  expect(calculator.divide(3, 2))
  .toBe(1.5);
});



// Calculator.multiply tests
test('multiplies 4 * 4 to equal 16', () => {
  expect(calculator.multiply(4, 4))
  .toBe(16);
});

test('multiplies 2 * 4 to equal 8', () => {
  expect(calculator.multiply(2, 4))
  .toBe(8);
});

test('multiplies 600000 * 1 to equal 600000', () => {
  expect(calculator.multiply(600000, 1))
  .toBe(600000);
});

test('multiplies 11 * 9 to equal 99', () => {
  expect(calculator.multiply(11, 9))
  .toBe(99);
});