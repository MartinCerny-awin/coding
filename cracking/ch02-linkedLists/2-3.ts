export function removeMiddleNode(node: any) {
  if (!node || !node.next) {
    return node;
  }

  node.value = node.next.value;
  node.next = node.next.next;
}
