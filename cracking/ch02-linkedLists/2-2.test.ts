import * as helpers from './helpers';
import * as funcs from './2-2';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch2-q2 Implement an algorithm to find the kth to last element of singly linked list: ' + key, function () {
    it('returns input if falsy', function () {
      expect(func(null)).toBe(null);
      expect(func(undefined)).toBe(undefined);
    });

    [
      {
        list: [5],
        kthElement: 0,
      },
      {
        list: [8, 5, 1],
        kthElement: 0,
      },
      {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        kthElement: 2,
      },
      {
        list: [5, 5, 5, 5, 5],
        kthElement: 4,
      },
      {
        list: [2, 4, 5, 4, 5, 4, 6, 7, 6, 8],
        kthElement: 4,
      },
      {
        list: [8, 6, 8, 6],
        kthElement: 3,
      },
      {
        list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
        kthElement: 10,
      },
    ].forEach((context) => {
      it(`can get ${context.kthElement}th element in list ${context.list}`, function () {
        let list = helpers.arrayToLinkedList(context.list);
        const expected = context.list[context.list.length - 1 - context.kthElement];

        expect(func(list, context.kthElement)).toEqual(expected);
      });
    });
  });
}
