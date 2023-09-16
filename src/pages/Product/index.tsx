import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import useProductQuantity from "../../hooks/useProductQuantity";
import { ProductContext } from "../../contexts/ProductContext";
import { formatPrice } from "../../utils/formatcurrencyUtils";

const ProductPage = () => {

  const shoppingCartContext = useContext(ShoppingCartContext);

  const { products } = useContext(ProductContext);

  const currentPath = window.location.pathname;
  let slug = currentPath.split("/").slice(-1)[0];
  console.log(slug);

  const product = products?.find((product) => product.slug === slug);

  const { quantity, increment, decrement } = useProductQuantity();
  
  const addCart = () => {
    if (!product) return;
    product.quantity = quantity;
    shoppingCartContext.addProduct(product);
  };

  return (
    <section className="relative w-full p-12 md:py-24 lg:p-32 2xl:p-56">
      <div className="container flex flex-col md:flex-row items-start px-4 md:px-6">
        <div className="md:w-1/2">
          <img
            className="w-full h-auto rounded-lg"
            src={product?.images[0].src}
            alt={product?.images[0].alt}
          />
        </div>
        
        <div className="flex flex-col md:w-1/2 md:ml-6 mt-4 md:mt-0 gap-8 tracking-tighter">

          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <p className="text-2xl font-semibold text-gray-800" >{formatPrice(parseInt(product?.price ?? '0'))}</p>
          <div className="text-gray-800 font-normal sm:text-lg" dangerouslySetInnerHTML={{ __html: product?.short_description ?? '' }} />

          <div className="flex items-center mt-2 py-5 border-b-2 border-gray-200 pr-5 mb-8">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>

          <div className="md:flex md:items-center">
            <div className="flex justify-between w-full md:w-auto border rounded-md border-black/10">

            <button className="font-bold px-4 py-2 text-gray-600 hover:text-primary-600 focus:outline-none" onClick={decrement}>
              <MinusIcon className="h-4 w-4" />
            </button>

            <input type="text" min={1} value={quantity} pattern="[0-9]" inputMode="numeric" className="m-0 px-4 py-2 text-center w-12 focus:outline-none" onChange={() => {}} />
            
            <button className="font-bold px-4 py-2 text-gray-600 hover:text-primary-600 focus:outline-none" onClick={increment}>
              <PlusIcon className="h-4 w-4" />
            </button>
            
            </div>

            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg md:ml-5 mt-3 md:mt-0 w-full hover:bg-primary-600 transition duration-300 ease-in-out" onClick={() => addCart()} >
              <p className="flex justify-center items-center">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="ml-2">Agregar al carrito</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;