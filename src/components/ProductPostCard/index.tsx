import { Product } from "../../models/Product";

interface ProductCardProps {
  product: Product;
}

  // format price to COP currency without decimals
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

const ProductPostCard = ({ product }: ProductCardProps) => {
  return (
    // product post card
    <div className="flex flex-col p-4 sm:p-6 justify-between max-w-sm h-full bg-primary-500 rounded-lg">
      <figure className="flex justify-center items-center mb-6 sm:mb-10 py-5 px-6 w-full h-auto bg-white rounded-lg">
        <img src={product.images[0].src} alt={product.images[0].alt} className="w-full h-full object-contain rounded-xl" />
      </figure>

      <div className="flex items-end gap-3">
        <p className="flex flex-col justify-center items-start">
          <span className="text-sm md:text-lg font-medium mb-2 sm:mb-4 mr-4">{product.name}</span>
        </p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-xs md:text-sm font-normal mb-2 sm:mb-4">{product.categories[0].name}</p>
        <p className="bg-primary-200 rounded-lg py-2 sm:py-3 px-3 sm:px-4">
          <span className="text-sm md:text-lg font-medium text-primary-600">{formatPrice(parseInt(product.price))}</span>
        </p>

      </div>
    </div>
  )
}

export default ProductPostCard