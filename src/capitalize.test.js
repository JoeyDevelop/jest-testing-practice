import capitalize from './capitalize';

test('Capitalize first letter of string', () => {
  expect(capitalize('this is a capitalized sentence.'))
  .toStrictEqual('This is a capitalized sentence.');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('the dog jumped over the moon.'))
  .toStrictEqual('The dog jumped over the moon.');
});

test('Capitalize first letter of string & remove whitespace', () => {
  expect(capitalize('testing is both fun and rewarding!'))
  .toStrictEqual('Testing is both fun and rewarding!');
});

test('Capitalize first letter of string & remove whitespace', () => {
  expect(capitalize('aaaabbbddd'))
  .toStrictEqual('Aaaabbbddd');
});