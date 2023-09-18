import { ReactNode, createContext, useEffect, useState } from "react";
import { Category } from "../../models/Product";
import useFetchCategories from "../../api/useFetchCategories";

interface CategoryContextType {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
}

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  isLoading: false,
  error: null,
});

export const CategoryProvider = ({ children } : CategoryProviderProps) => {
  const [categories, setCategories ] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    useFetchCategories()
      .then((categories) => {
        categories = categories.filter((category: { name: string; }) => category.name !== 'Uncategorized');
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  console.log(categories);

  const value: CategoryContextType = {
    categories,
    isLoading,
    error,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};