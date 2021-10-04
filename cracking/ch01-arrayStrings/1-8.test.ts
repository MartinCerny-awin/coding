import * as funcs from './1-8';

for (let key in funcs) {
  let func = funcs[key];

  describe('Zero matrix', () => {
    it('returns matrix unchanged with 1,1 matrix', function () {
      let matrix = [[0]];
      expect(func(matrix)).toEqual(matrix);
    });

    [
      [
        [
          [0, 2],
          [3, 4],
          [5, 6],
        ],
        [
          [0, 0],
          [0, 4],
          [0, 6],
        ],
      ],
      [
        [
          [1, 0, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [0, 0, 0],
          [4, 0, 6],
          [7, 0, 9],
        ],
      ],
      [
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 0, 12],
          [13, 14, 15, 0],
        ],
        [
          [1, 2, 0, 0],
          [5, 6, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      ],
    ].forEach((context) => {
      it(`sets row and column to 0 for each element with 0`, function () {
        expect(func(context[0])).toEqual(context[1]);
      });
    });
  });
}
