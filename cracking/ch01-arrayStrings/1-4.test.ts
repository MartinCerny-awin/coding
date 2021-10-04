import * as funcs from './1-4';

for (let key in funcs) {
  let func = funcs[key];

  describe('Palindrome permutation - same forward and backward', () => {
    ['aa', 'ccaatt', '123321', 'aab', 'cocoococ', '  11  ', 'toca cat', '  1'].forEach((arg) => {
      it(`returns true`, () => {
        expect(func(arg)).toBeTruthy();
      });
    });

    ['test', '  21 '].forEach((arg) => {
      it(`returns false`, () => {
        expect(func(arg)).toBeFalsy();
      });
    });
  });
}
