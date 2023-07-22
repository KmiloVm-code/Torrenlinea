import { createContext, useState } from "react";

export const ProductDetailContext = createContext({} as any);

export const ProductDetailProvider = ({ children }: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [prductDetailShow, setProductDetailShow] = useState({});

  return (
    <ProductDetailContext.Provider
      value={
        {
          isOpen,
          closeModal,
          openModal,
          prductDetailShow,
          setProductDetailShow
        }
      }>

      {children}

    </ProductDetailContext.Provider>
  );
}