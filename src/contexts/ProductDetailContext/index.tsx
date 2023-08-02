import { createContext, useState } from "react";

export const ProductDetailContext = createContext({} as any);

export const ProductDetailProvider = ({ children }: any) => {

  const [prductDetailShow, setProductDetailShow] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setProductDetailShow({});
  };

  const openModal = () => {
    setIsOpen(true);
  };


  return (
    <ProductDetailContext.Provider
      value={
        {
          isOpen,
          closeModal,
          openModal,
          prductDetailShow,
          setProductDetailShow,
        }
      }>

      {children}

    </ProductDetailContext.Provider>
  );
}