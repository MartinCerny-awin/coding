// O(N^2) TIME --- O(1) SPACE
export function isUnique1(str: string) {
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    for (let j = i + 1; j < strLength; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

// O(N) TIME --- O(N) SPACE
export function isUnique2(str: string) {
  const letterSet = new Set();

  for (const letter of str) {
    if (letterSet.has(letter)) return false;
    letterSet.add(letter);
  }

  return true;
}

// O(N log N) TIME --- O(1) SPACE
export function isUnique3(str: string) {
  const orderedStr = str.split('').sort();

  for (let i = 0; i < str.length; i++) {
    if (orderedStr[i] === orderedStr[i + 1]) return false;
  }

  return true;
}

// O(N log N)
// TODO bitwise
