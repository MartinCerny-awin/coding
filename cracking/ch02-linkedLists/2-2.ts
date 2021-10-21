import { LinkedListNode } from './helpers';

// My bad solution, better to first iterate over kth so we do not have to iterate twice
export function returnKthToLast(linkedList: LinkedListNode, kth: number) {
  if (!linkedList) return linkedList;

  let node = linkedList;

  let length = 1;

  while (node.next) {
    length++;

    node = node.next;
  }

  if (length === 1) {
    return node.value;
  }

  node = linkedList;

  let current = 1;
  while (node.next) {
    if (length - kth === current) {
      return node.value;
    }

    current++;
    node = node.next;
  }

  return node.value;
}

export function returnKthToLast1(linkedList: LinkedListNode, kth: number) {
  if (!linkedList) return linkedList;

  let node = linkedList;
  let last = linkedList;

  for (let i = 0; i < kth; i++) {
    last = last.next;

    if (!last) {
      throw new Error('list is not long enough');
    }
  }

  while (last.next) {
    last = last.next;
    node = node.next;
  }

  return node.value;
}
