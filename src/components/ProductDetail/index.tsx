import { useContext } from "react"
import { ProductDetailContext } from "../../contexts/ProductDetailContext";
import { XMarkIcon } from "@heroicons/react/24/outline"

const ProductDetail = () => {

  const productDetailContext = useContext(ProductDetailContext);

  return (
    // Product detail modal with product name, price, description, and product image, product quantity and with a button to add to cart and a button to close the modal
    <div className={`${productDetailContext.isOpen ? 'fixed' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg w-full max-sm:h-full">

        <XMarkIcon className="absolute h-8 w-8 text-black/80 cursor-pointer m-2" onClick={() => productDetailContext.closeModal()} />

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="p-6 sm:p-10 m-auto">
            <figure className="flex justify-center items-center w-1/2 sm:w-3/4 mx-auto mb-8">
              <img src={productDetailContext.prductDetailShow.image} alt={productDetailContext.prductDetailShow.title} className="w-full h-full object-contain" />
            </figure>
          </div>

          <div className="bg-primary-100 p-6 sm:p-10 flex flex-col justify-between items-center sm:items-start">
            <div >
              <h1 className="text-2xl font-bold mb-2">{productDetailContext.prductDetailShow.title}</h1>
              <p className="text-lg font-bold text-gray-600 mb-4">${productDetailContext.prductDetailShow.price}</p>
              <p className="text-lg font-normal text-gray-700 mb-6">{productDetailContext.prductDetailShow.description}</p>
            </div>

            <div className="flex items-center mb-6">
              <button className="font-bold border border-black/10 px-4 py-2 rounded-s-md text-gray-600 hover:text-black/80 focus:outline-none">-</button>
              <input type="text" min={1} defaultValue={1} pattern="[0-9]" inputMode="numeric" className="m-0 px-4 py-2 text-center w-12 border-y border-black/10 focus:outline-none" />
              <button className="font-bold border border-black/10 px-4 py-2 rounded-e-md text-gray-600 hover:text-black/80 focus:outline-none">+</button>
              <button className="px-6 py-3 bg-primary-500 text-white rounded-lg ml-5">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductDetail