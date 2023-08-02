import { createContext, useState } from "react";
import useProductQuantity from "../../hooks/useProductQuantity";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

interface ShoppingCartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  countShoppingCartItems: () => number;
  totalPrice: () => number;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
  updateQuantity: () => {},
  countShoppingCartItems: () => 0,
  totalPrice: () => 0
});

export const ShoppingCartProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    // Agrega un producto al carrito
    setProducts((prevProducts) => [...prevProducts, product]);
    console.log(products);
  };

  const deleteProduct = (id: number) => {
    // Elimina un producto del carrito
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const updateQuantity = (id: number, quantity: number) => {
    // Actualiza la cantidad de un producto en el carrito, validar que no sea menor a 1
    if (quantity < 1 || quantity > 10) {
      return;
    }
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const countShoppingCartItems = () => {
    // Cuenta la cantidad de productos en el carrito
    return products.reduce((acc, product) => acc + product.quantity, 0);
  };

  const totalPrice = () => {
    // Calcula el precio total del carrito
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const value = {
    products,
    addProduct,
    deleteProduct,
    updateQuantity,
    countShoppingCartItems,
    totalPrice
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}