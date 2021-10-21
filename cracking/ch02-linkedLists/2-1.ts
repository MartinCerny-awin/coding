import { LinkedListNode } from './helpers';

// O(N) TIME --- O(N) SPACE
export function removeDuplicates(linkedList: LinkedListNode) {
  if (!linkedList) return linkedList;

  let set = new Set();
  let node = linkedList;

  set.add(node.value);
  while (node.next) {
    if (set.has(node.next.value)) {
      node.next = node.next.next;
    } else {
      set.add(node.next.value);

      node = node.next;
    }
  }

  return linkedList;
}
