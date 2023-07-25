import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";


const Cart = () => {

  const shoppingCartContext = useContext(ShoppingCartContext);

  const  products  = shoppingCartContext.products;

  return (
    <div className="container mx-auto h-full mt-7 mb-16">
      <h2 className="text-2xl text-center font-semibold">Carrito de Compras</h2>
      <div className="flex items-center gap-5 mt-5">
        <table className="table w-3/4 border-separate border-spacing-10">
          <thead className="table-header-group">
            <tr className="table-row">
              <th className="table-cell text-center">Imagen</th>
              <th className="table-cell text-center">Nombre</th>
              <th className="table-cell text-center">Precio</th>
              <th className="table-cell text-center">Cantidad</th>
              <th className="table-cell text-center">Subtotal</th>
              <th className="table-cell text-center">{/* Delete */}</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {products.map(product => (
              <tr className="table-row " key={product.id}>
                <td className="table-cell">
                  <figure className="flex justify-center w-12 h-12">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                  </figure>
                </td>
                <td className="table-cell text-center text-base font-medium">{product.title}</td>
                <td className="table-cell text-center text-sm font-medium text-gray-700">${product.price}</td>
                <td className="table-cell text-center text-base font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-primary-100 px-3 py-1 rounded-md" onClick={() => shoppingCartContext.updateQuantity(product.id, product.quantity - 1)}>-</button>
                    <span className="text-sm font-normal">{product.quantity}</span>
                    <button className="bg-primary-100 px-3 py-1 rounded-md" onClick={() => shoppingCartContext.updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                </td>
                <td className="table-cell text-center font-medium">${product.price * product.quantity}</td>
                <td className="table-cell text-center font-medium">
                  <XMarkIcon className="h-6 w-6 text-danger cursor-pointer" onClick={() => shoppingCartContext.deleteProduct(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3 className="text-xl font-semibold">Resumen</h3>
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-gray-600">Subtotal: $100</p>
            <p className="text-gray-600">Envío: $10</p>
            <p className="text-gray-600">Total: $110</p>
            <button className="bg-blue-500 px-3 py-1 rounded-md mt-4">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart