export function encodeSpace(str1: string) {
  let encodedString = '';
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (char === ' ') {
      encodedString += '%20';
      continue;
    }

    encodedString += char;
  }

  return encodedString;
}

/**
 * In the book they are doing some bullshit about adding spaces and traversing from the back???
 * All tests passing, so don't understand.
 */
