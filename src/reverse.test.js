import reverseString from "./reverse";

test('Reverse given string', () => {
  expect(reverseString('abcd'))
  .toStrictEqual('dcba');
});

test('Reverse given string', () => {
  expect(reverseString('Hello!'))
  .toStrictEqual('!olleH');
});

test('Reverse given string', () => {
  expect(reverseString('I want a jr dev job'))
  .toStrictEqual('boj ved rj a tnaw I');
});

test('Reverse given string', () => {
  expect(reverseString('racecar'))
  .toStrictEqual('racecar');
});