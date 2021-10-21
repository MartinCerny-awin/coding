import * as helpers from './helpers';
import * as funcs from './2-4';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch2-q4 Partition list: ' + key, function () {
    // it('returns input if falsy', function () {
    //   expect(func(null)).toBe(null);
    //   expect(func(undefined)).toBe(undefined);
    // });

    [
      {
        list: [5, 8],
        value: 3,
        expected: [5, 8],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 31,
        expected: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 4,
        expected: [3, 2, 1, 4, 5, 8, 7, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 1,
        expected: [1, 5, 8, 3, 2, 7, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 5,
        expected: [5, 3, 2, 1, 4, 8, 7, 9, 15, 30],
      },
    ].forEach((context) => {
      it(`partitioning list ${context.list} around ${context.value}`, function () {
        let list = helpers.arrayToLinkedList(context.list);

        const partitionedList = func(list, context.value);

        expect(helpers.linkedListToArray(partitionedList)).toEqual(context.expected);
      });
    });
  });
}
