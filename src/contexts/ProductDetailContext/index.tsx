import { createContext, useState } from "react";
import { Product } from "../../models/Product";

interface ProductDetailContextType {
  prductDetailShow: any;
  setProductDetailShow: any;
}

export const ProductDetailContext = createContext<ProductDetailContextType>({
  prductDetailShow: {},
  setProductDetailShow: () => { },
});

export const ProductDetailProvider = ({ children }: any) => {

  const [prductDetailShow, setProductDetailShow] = useState<Product[]>({} as Product[]);


  console.log(prductDetailShow);

  const value = {
    prductDetailShow,
    setProductDetailShow,
  };


  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}