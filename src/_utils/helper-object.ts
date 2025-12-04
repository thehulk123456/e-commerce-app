export const flatMapObjectArray = <T extends { children?: T[] }>(
  arr: T[]
): T[] => {
  const result: T[] = [];

  const flatten = (node: T) => {
    result.push(node);

    if (!node.children || !node.children.length) {
      return;
    }

    for (const child of node.children) {
      flatten(child);
    }
  };

  for (const item of arr) {
    flatten(item);
  }

  return result;
};

export const getItemsPerParent = <T extends { parentId: number | null }>(
  parentId: number | null,
  items: T[]
) => {
  const result: T[] = [];

  for (const item of items) {
    if (item.parentId === parentId) {
      result.push(item);
    }
  }

  return result;
};
