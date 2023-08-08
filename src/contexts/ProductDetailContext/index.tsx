import { createContext, useState } from "react";
import { Product } from "../../models/Product";

interface ProductDetailContextType {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  prductDetailShow: any;
  setProductDetailShow: any;
}

export const ProductDetailContext = createContext<ProductDetailContextType>({
  isOpen: false,
  closeModal: () => { },
  openModal: () => { },
  prductDetailShow: {},
  setProductDetailShow: () => { },
});

export const ProductDetailProvider = ({ children }: any) => {

  const [prductDetailShow, setProductDetailShow] = useState<Product[]>({} as Product[]);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setProductDetailShow({} as Product[]);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const value = {
    isOpen,
    closeModal,
    openModal,
    prductDetailShow,
    setProductDetailShow,
  };


  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}