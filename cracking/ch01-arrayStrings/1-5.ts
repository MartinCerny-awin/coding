/**
 * my solution
 * O(N+M)
 */
export function oneAway1(str1: string, str2: string) {
  const lengthDiff = str1.length - str2.length;
  if (lengthDiff > 1 || lengthDiff < -1) {
    return false;
  }

  const chars = new Set();

  for (let char of str1) {
    chars.add(char);
  }

  let isDiff = false;
  for (let char of str2) {
    if (chars.has(char)) {
      chars.delete(char);
    } else {
      if (isDiff) return false;
      isDiff = true;
    }
  }

  return true;
}

export function oneAway2(str1: string, str2: string) {
  const lengthDiff = str1.length - str2.length;
  let longer: string, shorter: string;
  if (lengthDiff === 1 || lengthDiff === 0) {
    longer = str1;
    shorter = str2;
  } else if (lengthDiff === -1) {
    longer = str2;
    shorter = str1;
  } else {
    return false;
  }

  let oneDiff = false;

  for (let l = 0, s = 0; l < longer.length; l++) {
    if (longer[l] !== shorter[s]) {
      if (oneDiff) return false;
      oneDiff = true;
      if (lengthDiff === 0) s++;
      continue;
    }

    s++;
  }

  return true;
}

/**
 * small improvements over 2
 *
 * - better difference calculation using Math.abs
 * - no need to have longer, shorter, the diff is done in the for directly
 */
export function oneAway3(str1: string, str2: string) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let oneDiff = false;
  for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (oneDiff) {
        return false;
      }

      if (str1.length > str2.length) {
        j--; // decrease j, char from str2 is going to be use again
      }

      if (str1.length < str2.length) {
        i--; // decrease i, char from str1 is going to be use again
      }

      oneDiff = true;
    }
  }

  return true;
}
