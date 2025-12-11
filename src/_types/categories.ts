export type Category = {
  categoryId: number;
  parentId: number | null;
  name: string;
  slug: string;
  isLeaf: boolean;
  level: number;
};
