
const ProductCard = (props: any) => {
  console.log(props);
  
  return (
    // product card whit product photo, title, price, quantity, add cart button
    <div className="flex flex-col justify-between items-center border border-black/10 bg-white rounded-md shadow-md p-2 w-72 h-96">
      <figure className="flex justify-center items-center w-32 h-32 mt-2">
        <img src={props.product.image} alt={props.product.title} className="w-full h-full object-contain" />
      </figure>
      <div className="flex flex-col px-3 gap-4">
      <h1 className="text-lg font-semibold">{props.product.title}</h1>
      <p className="text-xl font-medium">${props.product.price}</p>
      </div>
      <div className="flex gap-3 mb-2">
      <div className="flex items-center">
        <input type="button" value={'-'} className=" border border-black/10 px-3 py-1 rounded-s-md cursor-pointer font-semibold"></input>
        <input type="text" min={1} defaultValue={1} pattern="[0-9]" inputMode="numeric" className="m-0 py-1 text-center w-7 border-y border-black/10 focus:outline-none"></input>
        <input type="button" value={'+'} className=" border border-black/10 px-3 py-1 rounded-e-md cursor-pointer font-semibold"></input>
      </div>
      <button className="bg-primary-500 text-md font-semibold text-white px-4 py-3 rounded-md">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard