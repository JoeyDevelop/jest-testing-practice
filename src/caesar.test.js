import caesarCipher from "./caesar";

test('Change aabb -> bbcc', () => {
  expect(caesarCipher('aabb', 1))
  .toStrictEqual('bbcc');
});

test('Change abcde -> bcdef', () => {
  expect(caesarCipher('abcde', 1))
  .toStrictEqual('bcdef');
});

test('Change hey -> yeh', () => {
  expect(caesarCipher('hey', 2))
  .toStrictEqual('jga');
});

test('Change My gf got a fat booty -> ', () => {
  expect(caesarCipher('My gf got a fat booty!', 1))
  .toStrictEqual('Nz hg hpu b gbu cppuz!');
});