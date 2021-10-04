import * as funcs from './1-9';

for (let key in funcs) {
  let func = funcs[key];

  describe('String Rotation', () => {
    [
      ['waterbottle', 'erbottlewat'],
      ['www', 'www'],
      ['waterbottle1', 'erbottle1wat'],
    ].forEach((context) => {
      it(`returns true for string rotation`, function () {
        expect(func(context[0], context[1])).toBeTruthy();
      });
    });

    [
      ['waterbottle1', 'erbottlewat'],
      ['waterbottle', 'erbottlewat1'],
      ['waterbottle1', 'erbottlewat2'],
    ].forEach((context) => {
      it(`returns false for string rotation`, function () {
        expect(func(context[0], context[1])).toBeFalsy();
      });
    });
  });
}
