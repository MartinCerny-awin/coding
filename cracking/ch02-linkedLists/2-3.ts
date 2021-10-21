import { LinkedListNode } from './helpers';

export function removeMiddleNode(node: LinkedListNode) {
  if (!node || !node.next) {
    return node;
  }

  node.value = node.next.value;
  node.next = node.next.next;
}
