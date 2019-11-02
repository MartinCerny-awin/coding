// https://app.codility.com/demo/results/trainingYCRFVZ-PND/

function solution(A, K) {
    const array = [];
    
    for(i = 0; i < A.length; i++) {
        const key = ((A.length - K % A.length) + i) % A.length;
        array.push(A[key])
    };
    
    return array;
}