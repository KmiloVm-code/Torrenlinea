import ProductPostCard from "../ProductPostCard"

const MostSelledProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8">
        <p className="flex flex-col sm:flex-row items-center sm:items-end gap-3">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">#Productos más vendidos</span>
          <span className="max-sm:hidden text-3xl font-medium">|</span>
          <span className="text-lg md:text-xl font-medium">Aquí en torrenlinea.com</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 max-w-screen-xl gap-6 mb-12">
        <ProductPostCard />
        <ProductPostCard />
        <ProductPostCard />
      </div>
    </div>
  )
}

export default MostSelledProducts