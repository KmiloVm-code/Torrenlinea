import { XMarkIcon } from "@heroicons/react/24/outline"

const ProductDetail = () => {
  return (
    // Product detail modal with product name, price, description, and product image, product quantity and with a button to add to cart and a button to close the modal
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">

      <div className="grid grid-cols-2 gap-7 p-8 bg-white max-w-screen-lg rounded-lg">

        <div className="flex flex-col justify-center items-center">
          <figure className="flex justify-center items-center w-96 h-96 bg-white rounded-full">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._AC_SL1500_.jpg" alt="product" className="w-full h-full object-contain" />
          </figure>
        </div>

        <div className="flex flex-col gap-3">

          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">AirPods 3 Pro</h1>
            <XMarkIcon className="h-8 w-8 text-black/80 cursor-pointer" onClick={() => {}} />
          </div>

          <p className="text-2xl font-medium mb-5">$1,000,000</p>
          <p className="text-lg font-normal mb-5">USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system</p>
          <p className="text-lg font-medium mb-5">¡Adquierelos hoy mismo!</p>

          <div className="flex items-center">
            <input type="button" value={'-'} className=" border border-black/10 px-3 py-1 rounded-s-md cursor-pointer font-semibold"></input>
            <input type="text" min={1} defaultValue={1} pattern="[0-9]" inputMode="numeric" className="m-0 py-1 text-center w-7 border-y border-black/10 focus:outline-none"></input>
            <input type="button" value={'+'} className=" border border-black/10 px-3 py-1 rounded-e-md cursor-pointer font-semibold"></input>
            <button className="px-5 py-3 bg-primary-500 text-white rounded-lg ml-5">Agregar al carrito</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail