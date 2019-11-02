// https://app.codility.com/demo/results/trainingQEBXK8-KW9/

function solution(X, Y, D) {
    const Z = Math.abs(Y - X);
    
    return Math.ceil(Z / D);
}