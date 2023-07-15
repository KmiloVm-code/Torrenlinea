
const ProductPostCard = () => {
  return (
    // product post card
    <div className="flex flex-col p-5 justify-center max-w-sm h-full bg-primary-500 rounded-lg">
      <figure className="flex justify-center items-center mb-10 py-5 px-6 w-full h-80 bg-white rounded-lg">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="product" className="w-full h-full object-contain rounded-xl" />
      </figure>

      <div className="flex items-end gap-3">
        <p className="flex flex-col justify-center items-start">
          <span className="text-md font-medium mb-4 mr-4">Parlante Nia Ref: An-810 Bluetooth-Fm-Usb-Micro Sd</span>
          <span className="text-sm font-normal mb-4">Audio</span>
        </p>

        <p className="bg-primary-200 rounded-lg py-3 px-5">
          <span className="text-lg font-medium text-primary-600">$145.000</span>
        </p>

      </div>
    </div>
  )
}

export default ProductPostCard