import { createContext, useContext, useReducer, useMemo } from "react";
import { Product } from "../../models/Product";
import useFetchProducts from "../../api/useFetchProducts";
import { ProductContext } from "../ProductContext";

interface ProductDetailContextType {
  productDetail: Product | null;
  loadDetails: (slug: string) => void;
  isLoading: boolean;
  error: Error | null;
}

const initialState: ProductDetailContextType = {
  productDetail: null,
  loadDetails: () => {},
  isLoading: false,
  error: null,
};

const productDetailReducer = (
  state: ProductDetailContextType,
  action: { type: string; payload?: any }
): ProductDetailContextType => {
  switch (action.type) {
    case "SET_PRODUCT_DETAIL":
      return { ...state, productDetail: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetailContext = createContext<ProductDetailContextType>(initialState);

interface ProductDetailProviderProps {
  children: React.ReactNode;
}

export const ProductDetailProvider = ({ children }: ProductDetailProviderProps) => {
  const { products } = useContext(ProductContext);
  const [state, dispatch] = useReducer(productDetailReducer, initialState);

  // Función para cargar los detalles de un producto por su slug (URL), verificar primero si el producto ya está en el estado global de productos (products) y si no está, entonces hacer la petición a la API para obtenerlo
  const loadDetails = (slug: string) => {
    const product = products.find((product) => product.slug === slug);
    if (product) {
      dispatch({ type: "SET_PRODUCT_DETAIL", payload: product });
    } else {
      dispatch({ type: "SET_LOADING", payload: true });
      useFetchProducts(`slug=${slug}`)
        .then((products) => {
          dispatch({ type: "SET_PRODUCT_DETAIL", payload: products[0] });
          dispatch({ type: "SET_LOADING", payload: false });
        })
        .catch((error) => {
          dispatch({ type: "SET_ERROR", payload: error });
          dispatch({ type: "SET_LOADING", payload: false });
        });
    }
  };

  const value = useMemo(() => ({
    productDetail: state.productDetail,
    loadDetails,
    isLoading: state.isLoading,
    error: state.error,
  }), [state.productDetail, loadDetails, state.isLoading, state.error]);

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
};