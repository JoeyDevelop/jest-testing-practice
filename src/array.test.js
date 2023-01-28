import analyzeArray from "./array";

test('Return average, max, min, and length from array', () => {
  expect(analyzeArray([10, 20, 30, 5]))
  .toStrictEqual({
    average: 16.25,
    min: 5,
    max: 30,
    length: 4,
  });
});

test('Return average, max, min, and length from array', () => {
  expect(analyzeArray([1, 2, 3, 4]))
  .toStrictEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('Return average, max, min, and length from array', () => {
  expect(analyzeArray([11, -3, 26, 11, 5, 10]))
  .toStrictEqual({
    average: 10,
    min: -3,
    max: 26,
    length: 6,
  });
});

test('Return average, max, min, and length from array', () => {
  expect(analyzeArray([-5, -5, -5, -5, -5]))
  .toStrictEqual({
    average: -5,
    min: -5,
    max: -5,
    length: 5,
  });
});