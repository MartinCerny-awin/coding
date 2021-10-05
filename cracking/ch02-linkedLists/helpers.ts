export function arrayToLinkedList(arr: Array<any>) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

export function linkedListToArray(linkedList: Node) {
  const arr = new Array();
  let node = linkedList;

  while (node !== null) {
    arr.push(node.value);
    node = node.next;
  }

  return arr;
}

type Node = {
  value: any;
  next: Node;
};

export function createNode(value: any, next: Node): Node {
  return {
    value,
    next: next || null,
  };
}
