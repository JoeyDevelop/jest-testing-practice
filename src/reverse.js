export default function reverseString(string) {
  const arr = string.split('');
  const reverseArr = arr.reverse();
  const newString = reverseArr.join('');
  return newString;
}