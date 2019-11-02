// https://app.codility.com/demo/results/trainingRW8RX8-WGM/

function solution(A) {
    let sum = 0;
    const length = A.length;
    const last = (length + 1);
    const sumMax = (last * (length / 2)) + last;
    for (let i = 0; i < A.length; i++) {
        sum += A[i]
    }
    const result = sumMax - sum;
    
    return result
}
