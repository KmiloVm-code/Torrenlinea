import ProductPostCard from "../ProductPostCard"

const MostSelledProducts = () => {
  return (
    <div className="grid justify-center">
      <div className="mb-8">
        <p className="flex justify-center items-end gap-3">
          <span className="text-3xl font-bold">#Productos más vendidos</span>
          <span className="text-3xl font-medium">|</span>
          <span className="text-xl font-medium">Aquí en torrenlinea.com</span>
        </p>
      </div>

      <div className="grid grid-cols-3 max-w-screen-xl gap-10 mb-5">
        <ProductPostCard />
        <ProductPostCard />
        <ProductPostCard />
      </div>
    </div>
  )
}

export default MostSelledProducts