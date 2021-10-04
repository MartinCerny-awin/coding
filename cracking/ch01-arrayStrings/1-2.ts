export function isPermutation1(str1: string, str2: string) {
  if (str1.length === 0 && str1.length !== str2.length) {
    return false;
  }

  let copyStr2 = str2;

  for (let i = 0; i < str1.length; i++) {
    const charIndex = copyStr2.indexOf(str1[i]);

    if (charIndex === -1) {
      return false;
    }

    const char = copyStr2.charAt(charIndex);

    copyStr2 = copyStr2.replace(char, '');
  }

  return copyStr2.length === 0;
}

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param str1 First string, passed in as a character array
 * @param str2 Second string, passed in as a character array
 * @return True if first and second strings are permutations otherwise false
 */
export function isPermutation2(str1: string, str2: string): boolean {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }

  let chars = new Map();

  for (let i = 0; i < str1.length; ++i) {
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1); // increment or set to 1
  }

  for (let i = 0; i < str2.length; ++i) {
    let count = chars.get(str2[i]);
    if (!count) {
      return false;
    }
    if (count === 1) {
      chars.delete(str2[i]);
    } else {
      chars.set(str2[i], count - 1);
    }
  }

  return chars.size === 0;
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param str1 First string, passed in as a character array
 * @param str2 Second string, passed in as a character array
 * @return True if first and second strings are permutations otherwise false
 */
export function isPermutation3(str1: string, str2: string): boolean {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  // sort string using
  str1.split('').sort().join('');
  str2.split('').sort().join('');

  return str1 === str2;
}
