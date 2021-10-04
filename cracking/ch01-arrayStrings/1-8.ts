/**
 * My first solution.
 */
export function zeroMatrix(matrix: Array<Array<number>>) {
  const rows = matrix.length;

  const returnMatrix = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrix.length; row++) {
    const currentRow = matrix[row];
    const columns = currentRow.length;
    for (let column = 0; column < columns; column++) {
      if (currentRow[column] === 0) {
        for (let i = 0; i < rows || i < columns; i++) {
          if (i < rows) {
            returnMatrix[i][column] = 0;
          }
          if (i < columns) {
            returnMatrix[row][i] = 0;
          }
        }
      }
    }
  }
  return returnMatrix;
}

/**
 * My solution with hinnts.
 */
export function zeroMatrix1(matrix: Array<Array<number>>) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }

  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length);
  let cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < cols.length; y++) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < cols.length; y++) {
      if (rows[x] || cols[y]) {
        matrix[x][y] = 0;
      }
    }
  }

  return matrix;
}
