export function palindromePermutation(str1: string) {
  const chars = new Set();

  for (let char of str1) {
    if (char === ' ') continue;

    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  }

  if (chars.size > 1) {
    return false;
  }

  return true;
}
