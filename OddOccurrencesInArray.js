/*
    Odd Occurences in Array Solution
    Run Time O(N)

    Results: 
        https://app.codility.com/demo/results/trainingEXT95X-A3W/
        https://app.codility.com/demo/results/trainingX3JWXH-G27/
*/
function solution(A) {
    let j = 0;
    for (let i = 0; i < A.length; i++) {
        j ^= A[i];
    }
    return j;
}
