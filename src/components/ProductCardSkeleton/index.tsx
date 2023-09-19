
const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between border border-black/10 bg-white rounded-md shadow-md p-2 sm:w-72 w-80 h-96">
      <div className="animate-pulse flex justify-center items-center">
        <div className="w-44 h-44 mt-2 bg-gray-300 rounded-md"></div>
      </div>

      <div className="flex flex-col px-3 gap-3">
        <div className="text-base sm:text-lg font-semibold bg-gray-300 h-6 w-2/3 rounded-md"></div>
        <div className="text-lg sm:text-xl font-semibold text-gray-700 bg-gray-300 h-6 w-1/2 rounded-md"></div>
      </div>

      <div className="flex gap-3 sm:mb-2">
        <div className="hidden sm:flex items-center">
          <div className="border border-black/10 px-3 py-1 rounded-s-md cursor-not-allowed bg-gray-300"></div>
          <div className="border-y border-black/10 h-7 bg-gray-300 w-7"></div>
          <div className="border border-black/10 px-3 py-1 rounded-e-md cursor-not-allowed bg-gray-300"></div>
        </div>
        <div className="w-full bg-primary-500 text-lg sm:text-base font-bold text-white sm:px-2 py-3 sm:py-3 rounded-md cursor-not-allowed"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
