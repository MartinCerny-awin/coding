import * as funcs from './1-1';

for (let key in funcs) {
  let func = funcs[key];

  describe('implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?', () => {
    it('unique characters', () => {
      ['abcdefghi', 'jklpoiuqwerzxcvmnsadf', '1234567890', 'AaBbCcDdeFg1234567890(*&^%$#@!)'].forEach((arg) => {
        expect(func(arg)).toBeTruthy();
      });
    });

    it('not unique characters', () => {
      [
        'abcadef',
        'aaaaaaaaaa',
        'abcdefghijklmnopqrstuvwxyza',
        '1234567890asdklf1',
        '!@#$%^&*()(*#($&#(*$&#*($&#()))))',
      ].forEach((arg) => {
        expect(func(arg)).toBeFalsy();
      });
    });
  });
}
