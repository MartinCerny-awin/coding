import * as funcs from './1-6';

for (let key in funcs) {
  let func = funcs[key];

  describe('String compression', () => {
    [
      ['aa', 'aa'],
      ['aaaA', 'aaaA'],
      ['aaaAA', 'a3A2'],
      ['aaaBB', 'a3B2'],
      ['aaaBBccccc', 'a3B2c5'],
    ].forEach((arg) => {
      it(`returns shorter string`, () => {
        expect(func(arg[0])).toBe(arg[1]);
      });
    });
  });
}
