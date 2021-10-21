export function arrayToLinkedList(arr: Array<any>): LinkedListNode {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

export function linkedListToArray(linkedList: LinkedListNode) {
  const arr = new Array();
  let node = linkedList;

  while (node !== null) {
    arr.push(node.value);
    node = node.next;
  }

  return arr;
}

export type LinkedListNode = {
  value: any;
  next: LinkedListNode;
};

export function createNode(value: any, next: LinkedListNode): LinkedListNode {
  return {
    value,
    next: next || null,
  };
}
