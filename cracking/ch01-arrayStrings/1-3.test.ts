import * as funcs from './1-3';

for (let key in funcs) {
  let func = funcs[key];

  describe('Replace all spaces in a string with %20', () => {
    [
      'nospaces',
      ' ',
      '   ',
      ' firstSpace',
      'lastSpace ',
      '  surroundedBySpaces  ',
      'middle  spaces',
      ' l o t s   o f   s p a c e ',
      'http://www.google.com/',
      'http://www.google.com/search?q=something really really funny',
    ].forEach((arg) => {
      it(`returns unique string`, () => {
        let expected = arg.replace(/ /g, '%20');
        expect(func(arg)).toBe(expected);
      });
    });
  });
}
