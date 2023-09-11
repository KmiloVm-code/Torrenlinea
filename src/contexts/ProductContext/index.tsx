import { createContext, useState, useEffect, ReactNode } from "react";
import { useFetchProducts } from "../../api/useFetchProducts";
import { Product } from "../../models/Product";
import { useLocation } from "react-router-dom";
import { useFetchCategories } from "../../api/useFetchCategories";

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  selectedCategory: number;
  setSelectedCategory: (category: number) => void;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  isLoading: false,
  error: null,
  selectedCategory: 0,
  setSelectedCategory: () => {},
});

export const ProductProvider = ({ children } : ProductProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { pathname } = useLocation();
  const lastSegment = pathname.split('/').pop();
  const { categories } = useFetchCategories();

  useEffect(() => {
    const category = categories.find(category => category.slug === lastSegment);
    setSelectedCategory(category?.id || 0);
  }, [categories, lastSegment]);

  const url = `${import.meta.env.VITE_API_URL}products${selectedCategory ? `?category=${selectedCategory}` : ''}`;
  const { products, isLoading, error } = useFetchProducts(url);

  const value: ProductContextType = {
    products,
    isLoading,
    error,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

