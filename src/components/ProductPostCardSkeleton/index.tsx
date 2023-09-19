// Purpose: Provide a skeleton component for the ProductPostCard component whit good transition effect and animation.
const ProductPostCardSkeleton = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 justify-between w-96 h-96 bg-primary-500 rounded-lg animate-pulse">
      <figure className="flex justify-center items-center mb-6 sm:mb-10 py-5 px-6 w-full h-auto bg-white rounded-lg">
        <div className="w-full h-full bg-gray-300 rounded-xl" />
      </figure>

      <div className="flex items-end gap-3">
        <div className="w-3/4 h-4 bg-gray-300 rounded-lg" />
      </div>

      <div className="flex justify-between items-end">
        <div className="w-1/4 h-4 bg-gray-300 rounded-lg" />
        <div className="w-1/4 h-4 bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default ProductPostCardSkeleton;

