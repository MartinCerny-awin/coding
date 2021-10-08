import * as helpers from './helpers';
import * as funcs from './2-3';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch2-q3 Delete middle node: ' + key, function () {
    it('returns input if falsy', function () {
      expect(func(null)).toBe(null);
      expect(func(undefined)).toBe(undefined);
    });

    [
      {
        list: [5, 8],
        node: 0,
        expected: [8],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 8,
        expected: [5, 8, 3, 2, 7, 1, 4, 9, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 4,
        expected: [5, 8, 3, 2, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 1,
        expected: [5, 3, 2, 7, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 2,
        expected: [5, 8, 2, 7, 1, 4, 9, 15, 30],
      },
    ].forEach((context) => {
      it(`removing node ${context.node} from list ${context.list}`, function () {
        let list = helpers.arrayToLinkedList(context.list),
          node = list;
        for (let i = 0; i < context.node; ++i) {
          node = node.next;
        }

        func(node);
        expect(helpers.linkedListToArray(list)).toEqual(context.expected);
      });
    });
  });
}
