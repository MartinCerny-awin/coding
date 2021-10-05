// O(N^2) TIME --- O(1) SPACE
export function removeDuplicates(linkedList: any) {
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
