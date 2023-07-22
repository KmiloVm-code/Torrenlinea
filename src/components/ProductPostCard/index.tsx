
const ProductPostCard = () => {
  return (
    // product post card
    <div className="flex flex-col p-4 sm:p-6 justify-center max-w-sm h-full bg-primary-500 rounded-lg">
      <figure className="flex justify-center items-center mb-6 sm:mb-10 py-5 px-6 w-full h-3/4 bg-white rounded-lg">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="product" className="w-full h-full object-contain rounded-xl" />
      </figure>

      <div className="flex items-end gap-3">
        <p className="flex flex-col justify-center items-start">
          <span className="text-sm md:text-lg font-medium mb-2 sm:mb-4 mr-4">Parlante Nia Ref: An-810 Bluetooth-Fm-Usb-Micro Sd</span>
        </p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-xs md:text-sm font-normal mb-2 sm:mb-4">Audio</p>
        <p className="bg-primary-200 rounded-lg py-2 sm:py-3 px-3 sm:px-4">
          <span className="text-sm md:text-lg font-medium text-primary-600">$145.000</span>
        </p>

      </div>
    </div>
  )
}

export default ProductPostCard