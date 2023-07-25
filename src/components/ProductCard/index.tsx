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
  };

  const { quantity, increment, decrement } = useProductQuantity();
  
  const addCart = () => {
    props.product.quantity = quantity;
    shoppingCartContext.addProduct(props.product);
  };

  return (
    // product card whit product photo, title, price, quantity, add cart button
    <div className="flex flex-col justify-between items-center border border-black/10 bg-white rounded-md shadow-md p-2 w-64 sm:w-72 h-80 sm:h-96">

      <figure className="flex justify-center items-center w-32 h-32 mt-2" onClick={() => {handleProductDetail()}}>
        <img src={props.product.image} alt={props.product.title} className="w-full h-full object-contain" />
      </figure>

      <div className="flex flex-col px-3 gap-3">
        <h1 className="text-base sm:text-lg font-semibold">{props.product.title}</h1>
        <p className="text-lg sm:text-xl font-medium">${props.product.price}</p>
      </div>

      <div className="flex gap-3 mb-2">
        <div className="flex items-center">
          <input type="button" value={'-'} className=" border border-black/10 px-3 py-1 rounded-s-md cursor-pointer font-semibold" onClick={decrement}></input>
          <input type="text" min={1} value={quantity} pattern="[0-9]" inputMode="numeric" className="m-0 py-1 text-center w-7 border-y border-black/10 focus:outline-none" onChange={() => {}}></input>
          <input type="button" value={'+'} className=" border border-black/10 px-3 py-1 rounded-e-md cursor-pointer font-semibold" onClick={increment}></input>
        </div>
        <button className="bg-primary-500 text-sm sm:text-md font-semibold text-white px-2 sm:px-4 py-1 sm:py-3 rounded-md" onClick={() => addCart()}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard