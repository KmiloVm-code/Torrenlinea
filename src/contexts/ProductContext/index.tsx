import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Product } from "../../models/Product";
import { useLocation } from "react-router-dom";
import useFetchProducts from "../../api/useFetchProducts";
import { CategoryContext } from "../Categorycontext";

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

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { pathname } = useLocation();
  const lastSegment = pathname.split('/').pop();
  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    const category = categories.find((category) => category.slug === lastSegment);
    setSelectedCategory(category?.id || 0);
  }, [categories, lastSegment]);

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await useFetchProducts(selectedCategory === 0 ? "" : `category=${selectedCategory}`);
        setProducts(fetchedProducts);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const value: ProductContextType = {
    products,
    isLoading,
    error,
    selectedCategory,
    setSelectedCategory,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};