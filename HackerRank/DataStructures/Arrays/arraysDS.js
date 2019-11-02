// https://www.hackerrank.com/challenges/arrays-ds/problem

// Complete the reverseArray function below.
function reverseArray(a) {
    for (let i = a.length; i > a.length / 2; i--) {
        const lower = a[a.length - i];
        a[a.length - i] = a[i - 1];
        a[i - 1] = lower;
    }  
  
    return b
  }