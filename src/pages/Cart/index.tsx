import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";


const Cart = () => {

  const shoppingCartContext = useContext(ShoppingCartContext);

  const products = shoppingCartContext.products;

  return (
    <div className="flex flex-col p-10 h-full mt-7 mb-16">
      <h2 className="text-2xl text-center font-semibold">Carrito de Compras</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 items-start">
        <table className="table md:col-span-2 border-separate border-spacing-9 w-full">
          <thead className="table-header-group">
            <tr className="table-row">
              <th className="table-cell text-center">Product</th>
              <th className="table-cell text-center"></th>
              <th className="table-cell text-center">Precio</th>
              <th className="table-cell text-center">Cantidad</th>
              <th className="table-cell text-center">Subtotal</th>
              <th className="table-cell text-center">{/* Delete */}</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {products.map(product => (
              <tr className="table-row" key={product.id}>
                <td className="table-cell">
                  <figure className="flex justify-center w-12 h-12">
                    <img src={product.images[0].src} alt={product.name} className="w-full h-full object-contain" />
                  </figure>
                </td>
                <td className="table-cell text-base font-medium">{product.name}</td>
                <td className="table-cell text-center text-sm font-medium text-gray-700">${product.price}</td>
                <td className="table-cell text-center text-base font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-primary-100 px-3 py-1 rounded-md" onClick={() => shoppingCartContext.updateQuantity(product.id, product.quantity - 1)}>-</button>
                    <span className="text-sm font-normal">{product.quantity}</span>
                    <button className="bg-primary-100 px-3 py-1 rounded-md" onClick={() => shoppingCartContext.updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                </td>
                <td className="table-cell text-center font-medium">${parseInt(product.price) * product.quantity}</td>
                <td className="table-cell text-center font-medium">
                  <XMarkIcon className="h-6 w-6 text-danger cursor-pointer" onClick={() => shoppingCartContext.deleteProduct(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col justify-start p-6 md:p-10 md:col-span-2 lg:col-span-1 rounded-lg bg-gray-100">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">Resumen del Carrito</h3>

          <div className="border-y border-y-gray-400 py-7 mb-4">

            <div className="flex justify-between mb-6">
              <p className="text-lg font-normal">Subtotal</p>
              <p className="text-lg font-medium">${shoppingCartContext.totalPrice()}</p>
            </div>

            <div className="flex justify-between mb-6">
              <p className="text-lg font-normal">Envío</p>
              <p className="text-lg font-medium">Gratis</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${shoppingCartContext.totalPrice()}</span>
            </p>
            <button className="bg-primary-500 text-lg font-medium text-white rounded-lg py-3 hover:bg-primary-600">
              Proceder al pago
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart