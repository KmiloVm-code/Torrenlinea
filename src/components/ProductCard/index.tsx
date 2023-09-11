import { useContext } from "react";
import { ProductDetailContext } from "../../contexts/ProductDetailContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import useProductQuantity from "../../hooks/useProductQuantity";

const ProductCard = (props: any) => {

  const shoppingCartContext = useContext(ShoppingCartContext);
  const productDetailContext = useContext(ProductDetailContext);

  const handleProductDetail = () => {
    productDetailContext.openModal();
    productDetailContext.setProductDetailShow(props.product);
    console.log(props.product);
  };

  const { quantity, increment, decrement } = useProductQuantity();

  const addCart = () => {
    props.product.quantity = quantity;
    shoppingCartContext.addProduct(props.product);
  };

  return (
    // product card whit product photo, title, price, quantity, add cart button
    <div className="flex flex-col justify-between border border-black/10 bg-white rounded-md shadow-md p-2 sm:w-72 w-80 h-96">

      <div className="flex justify-center items-center">
        <figure className="w-44 h-44 mt-2" onClick={() => { handleProductDetail() }}>
          <img src={props.product.images[0].src} alt={props.product.images[0].alt} className="w-full h-full object-contain" />
        </figure>
      </div>

      <div className="flex flex-col px-3 gap-3">
        <h1 className="text-base sm:text-lg font-semibold">{props.product.name}</h1>
        <p className="text-lg sm:text-xl font-semibold text-gray-700">${props.product.price}</p>
      </div>

      <div className="flex gap-3 sm:mb-2">
        <div className="hidden sm:flex items-center">
          <input type="button" value={'-'} className=" border border-black/10 px-3 py-1 rounded-s-md cursor-pointer font-semibold" onClick={decrement}></input>
          <input type="text" min={1} value={quantity} pattern="[0-9]" inputMode="numeric" className="m-0 py-1 text-center w-7 border-y border-black/10 focus:outline-none" onChange={() => { }}></input>
          <input type="button" value={'+'} className=" border border-black/10 px-3 py-1 rounded-e-md cursor-pointer font-semibold" onClick={increment}></input>
        </div>
        <button className="w-full bg-primary-500 text-lg sm:text-base font-bold text-white sm:px-2 py-3 sm:py-3 rounded-md" onClick={() => addCart()}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard