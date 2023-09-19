import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import useProductQuantity from "../../hooks/useProductQuantity";
import { Product } from "../../models/Product";
import { formatPrice } from "../../utils/formatcurrencyUtils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { quantity, increment, decrement } = useProductQuantity();

  const addCart = () => {
    const updatedProduct = { ...product, quantity };
    shoppingCartContext.addProduct(updatedProduct);
  };

  return (
    <div className="flex flex-col justify-between border border-black/10 bg-white rounded-md shadow-md p-2 sm:w-72 w-80 h-96">
      <Link to={`/producto/${product.slug}`} >
        <div className="flex justify-center items-center">
          <figure className="w-44 h-44 mt-2">
            <img src={product.images[0].src} alt={product.images[0].alt} className="w-full h-full object-contain" />
          </figure>
        </div>

        <div className="flex flex-col px-3 gap-3">
          <h1 className="text-base sm:text-lg font-semibold">{product.name}</h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-700">{formatPrice(parseInt(product.price))}</p>
        </div>
      </Link>

      <div className="flex gap-3 sm:mb-2">
        <div className="hidden sm:flex items-center">
          <button className="border border-black/10 px-3 py-1 rounded-s-md cursor-pointer font-semibold" onClick={decrement}>-</button>
          <input type="text" min={1} value={quantity} className="m-0 py-1 text-center w-7 border-y border-black/10 focus:outline-none" onChange={() => { }} />
          <button className="border border-black/10 px-3 py-1 rounded-e-md cursor-pointer font-semibold" onClick={increment}>+</button>
        </div>
        <button className="w-full bg-primary-500 text-lg sm:text-base font-bold text-white sm:px-2 py-3 sm:py-3 rounded-md" onClick={addCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
