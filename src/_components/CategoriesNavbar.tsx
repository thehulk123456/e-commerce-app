"use client";

import { Categories, Category } from "@/_const/categories";
import DropdownIcon from "@/_icons/DropdownIcon";
import { flatMapObjectArray, getItemsPerParent } from "@/_utils/helper-object";
import { useMemo, useState } from "react";

const flattenCategories = flatMapObjectArray(Categories);

interface CategoriesNavbarProps {
  additionalClassName?: string;
}

export default function CategoriesNavbar({
  additionalClassName,
}: CategoriesNavbarProps) {
  const [parentId, setParentId] = useState<number | null>(null);

  const [history, setHistory] = useState<(number | null)[]>([]);

  const categories = useMemo(
    () => getItemsPerParent(parentId, flattenCategories),
    [parentId]
  );

  const handleCategoryClick = (category: Category) => {
    if (category.isLeaf) {
      //navigate to page
      console.log("navigate to page");
    } else {
      setHistory((prev) => [...prev, parentId]);
      setParentId(category.id);
    }

    console.log("category", category);
  };

  const handleBackButtonClick = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;

      const newHistory = [...prev];
      const previousParent = newHistory.pop()!;

      setParentId(previousParent);
      return newHistory;
    });
  };

  return (
    <div className={additionalClassName || ""}>
      {parentId ? (
        <div className="mb-2 cursor-pointer" onClick={handleBackButtonClick}>
          Back
        </div>
      ) : null}

      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center cursor-pointer mb-4"
          onClick={() => handleCategoryClick(category)}>
          <div>{category.label}</div>

          {!category.isLeaf ? <DropdownIcon /> : null}
        </div>
      ))}
    </div>
  );
}
