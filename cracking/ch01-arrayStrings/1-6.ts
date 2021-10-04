/**
 * my solution
 */
export function compressString(str1: string) {
  let compressedString = '';

  let counter = 1;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i + 1]) {
      counter++;
    } else {
      compressedString += str1[i] + counter;
      counter = 1;
    }
  }

  return compressedString.length >= str1.length ? str1 : compressedString;
}
