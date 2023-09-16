import { XMarkIcon } from "@heroicons/react/24/solid";
import { formatPrice } from "../../utils/formatcurrencyUtils";

const ProductShoppingCard = (props : any) => {
  const { name, price, quantity, subtotal, images, id, deleteProduct } = props;
  return (
    <>
      <div className="flex items-start justify-between gap-5 mb-10">
        <div className="flex w-full gap-3">
          <div className="flex justify-center items-center">
            <img src={images[0].src} alt={images[0].alt} className="w-20 h-20 object-contain" />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <p className="text-base font-medium">{name}</p>
            <p className="text-sm font-medium text-gray-700">{formatPrice(price)}</p>
            <p className="flex justify-between items-center w-full">
              <span>Cantidad {quantity}</span>
              <span>Total {formatPrice(subtotal)}</span>
            </p>
          </div>
        </div>
        <XMarkIcon className="h-10 w-10 text-danger cursor-pointer" onClick={() => deleteProduct(id)} />
      </div>
    </>
  );
};

export default ProductShoppingCard;

