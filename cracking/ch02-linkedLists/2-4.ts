import { LinkedListNode } from './helpers';

export function partition(list: LinkedListNode, value: number) {
  let node = list;

  let higherTail: LinkedListNode | null = null;
  let higherHead: LinkedListNode | null = null;
  let smallerTail: LinkedListNode | null = null;
  let smallerHead: LinkedListNode | null = null;
  while (node) {
    let next = node.next;
    if (node.value > value) {
      if (higherHead) {
        // We need to set as it is done by reference to head.
        higherTail = higherTail.next = node;
      } else {
        higherHead = higherTail = node;
      }
    } else {
      if (smallerHead) {
        smallerTail = smallerTail.next = node;
      } else {
        smallerHead = smallerTail = node;
      }
    }

    node = next;
  }

  if (smallerTail) {
    smallerTail.next = higherHead;
  }

  return smallerHead || higherHead;
}
