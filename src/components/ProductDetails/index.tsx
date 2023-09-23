import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { formatPrice } from "../../utils/formatcurrencyUtils";

interface ProductDetailsProps {
  name: string | undefined;
  price: string | undefined;
  short_description: string | undefined;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  addCart: () => void;
}

const ProductDetails = ({
  name,
  price,
  short_description,
  quantity,
  increment,
  decrement,
  addCart,
}: ProductDetailsProps) => {
  return (
    <div className="flex flex-col md:w-1/2 md:ml-6 mt-4 md:mt-0 gap-6 md:gap-8 p-10 tracking-tighter">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-3xl font-bold text-primary-500">
        {formatPrice(parseInt(price ?? "0"))}
      </p>
      <div
        className="text-gray-800 font-normal sm:text-lg"
        dangerouslySetInnerHTML={{ __html: short_description ?? "" }}
      />

      <div className="flex items-center mt-4 md:mt-6 border-b-2 border-gray-200 pb-4 md:pb-6">
        <span className="mr-3 text-gray-600">Color:</span>
        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
      </div>

      <div className="md:flex md:items-center mt-6">
        <div className="flex justify-between w-full md:w-auto border rounded-md border-black/10">
          <button
            className="font-bold px-4 py-2 text-gray-600 hover:text-primary-600 focus:outline-none"
            onClick={decrement}
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <input
            type="text"
            min={1}
            value={quantity}
            pattern="[0-9]"
            inputMode="numeric"
            className="m-0 px-4 py-2 text-center w-12 focus:outline-none"
            onChange={() => { }}
          />
          <button
            className="font-bold px-4 py-2 text-gray-600 hover:text-primary-600 focus:outline-none"
            onClick={increment}
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <button
          className="px-6 py-3 bg-primary-500 text-white rounded-lg md:ml-4 mt-4 md:mt-0 w-full hover:bg-primary-600 transition duration-300 ease-in-out"
          onClick={() => addCart()}
        >
          <p className="flex justify-center items-center">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="ml-2">Agregar al carrito</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
