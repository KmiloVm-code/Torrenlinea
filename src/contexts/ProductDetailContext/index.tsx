import { createContext, useReducer } from "react";
import { Product } from "../../models/Product";
import useFetchProducts from "../../api/useFetchProducts";
import { Link, NavLink } from "react-router-dom";

interface ProductDetailContextType {
  productDetail: Product | null;
  loadDetails: (slug: string) => void;
}

export const ProductDetailContext = createContext<ProductDetailContextType>({
  productDetail: null,
  loadDetails: () => {},
});

interface ProductDetailProviderProps {
  children: React.ReactNode;
}

const initialState: Product | null = null;

const productDetailReducer = (state: Product | null, action: any) => {
  switch (action.type) {
    case "SET_PRODUCT_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

export const ProductDetailProvider = ({ children }: ProductDetailProviderProps) => {
  const [productDetail, dispatch] = useReducer(
    productDetailReducer,
    initialState
  );

  const loadDetails = async (slug: string) => {
    if (productDetail?.slug === slug) {
      return; // Los detalles ya están cargados, no es necesario cargar nuevamente
    }

    try {
      // Si los detalles no están cargados, realiza la solicitud
      const products = await useFetchProducts(`slug=${slug}`);
      const product = products.find((product: { slug: string }) => product.slug === slug);
      if (!product) {
        // Si no se encuentra el producto, redirige a la página de error 404
        window.location.href = "/404";
      }
      dispatch({ type: "SET_PRODUCT_DETAIL", payload: product });
    } catch (error) {
      console.error("Error al cargar los detalles del producto:", error);
      throw new Error("Error al cargar los detalles del producto");
    }
  };

  const value = {
    productDetail,
    loadDetails,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
};