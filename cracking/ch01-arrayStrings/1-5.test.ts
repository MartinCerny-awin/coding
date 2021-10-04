import * as funcs from './1-5';

for (let key in funcs) {
  let func = funcs[key];

  describe('One away', () => {
    [
      ['pale', 'ple'],
      ['pale', 'pales'],
      ['pale', 'bale'],
    ].forEach((arg) => {
      it(`returns true`, () => {
        expect(func(arg[0], arg[1])).toBeTruthy();
      });
    });

    [
      ['pale', 'bake'],
      ['pa', 'pale'],
      ['pale', 'pa'],
    ].forEach((arg) => {
      it(`returns false`, () => {
        expect(func(arg[0], arg[1])).toBeFalsy();
      });
    });
  });
}
