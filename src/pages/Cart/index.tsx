import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import ProductShoppingCard from "../../components/ProductShoppingCard";
import { Product } from "../../models/Product";

const Cart = () => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const totalPrice = shoppingCartContext.totalPrice();

  return (
    <>
      <h2 className="text-2xl text-center font-semibold mt-7">Carrito de Compras</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 items-start">
        <div className="flex flex-col justify-start p-6 md:p-10 col-span-2 rounded-lg">
          <h3 className="text-xl lg:text-2xl font-semibold mb-6">Productos</h3>
          <div className="border-y border-y-gray-400 py-7 mb-4">
            {shoppingCartContext.products.map((product: Product) => {
              const subtotal = parseInt(product.price) * product.quantity;
              return (
                <ProductShoppingCard
                  key={product.id}
                  {...product}
                  subtotal={subtotal}
                  deleteProduct={shoppingCartContext.deleteProduct}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-start p-6 md:p-10 col-span-2 lg:col-span-1 rounded-lg bg-gray-100">
          <h3 className="text-xl lg:text-2xl font-semibold mb-6">Resumen del Carrito</h3>
          <div className="border-y border-y-gray-400 py-7 mb-4">
            <div className="flex justify-between mb-6">
              <p className="text-lg font-normal">Subtotal</p>
              <p className="text-lg font-medium">${totalPrice}</p>
            </div>
            <div className="flex justify-between mb-6">
              <p className="text-lg font-normal">Envío</p>
              <p className="text-lg font-medium">Gratis</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${totalPrice}</span>
            </p>
            <button className="bg-primary-500 text-lg font-medium text-white rounded-lg py-3 hover:bg-primary-600">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
