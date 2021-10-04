/**
 * Book solution.
 */
export function rotateMatrix(matrix: Array<Array<number>>) {
  const length = matrix.length;

  for (let layer = 0; layer < length / 2; layer++) {
    const first = layer;
    const last = length - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix;
}
