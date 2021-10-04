import * as funcs from './1-2';

for (let key in funcs) {
  let func = funcs[key];

  describe('Given two strings, write a method to decide if one is a permutation of the other.', () => {
    it('is permutation', () => {
      ['abcdefghi', 'jklpoiuqwerzxcvmnsadf', '1234567890', 'AaBbCcDdeFg1234567890(*&^%$#@!)'].forEach((arg) => {
        expect(func(arg, arg)).toBeTruthy();
      });
    });

    it('is not permutation', () => {
      [
        ['abcadef', 'abcade'],
        ['aaaaaaaaaa', 'aaaaaaaaa'],
        ['abcdefghijklmnopqrstuvwxyza', 'abcdefghijklmnopqrstuvwxyzb'],
        ['1234567890asdklf1', '1234567890asdklf2'],
        ['!@#$%^&*()(*#($&#(*$&#*($&#()))))]', '!@#$%^&*()(*#($&#(*$&#*($&#())))))'],
      ].forEach((arg) => {
        expect(func(arg[0], arg[1])).toBeFalsy();
      });
    });
  });
}
