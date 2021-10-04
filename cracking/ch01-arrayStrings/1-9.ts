/**
 * My first solution unfinished.
 */
// export function stringRotation(str1: string, str2: string) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let char = new Set();
//   for (let i = 0; i < str1.length; i++) {
//     char.add(str1[i]);
//   }

//   for (let j = 0; j < str2.length; j++) {
//     char.delete(str2[j]);
//   }

//   if (char.size > 1) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//       }
//     }
//   }

//   return true;
// }

/**
 * https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/master/src/chapter1/ch1-q9.js
 */
export function stringRotation(str1: string, str2: string) {
  if (!str1 || !str2) {
    throw new Error('invalid input');
  }

  if (str1.length !== str2.length) {
    return false;
  }

  return isSubstring(str1 + str1, str2);
}

// Implementation of isSubstring function which is defined in question
// can only be called once
function isSubstring(str: string, substr: string) {
  return str.includes(substr);
}
