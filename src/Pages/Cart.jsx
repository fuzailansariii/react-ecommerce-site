import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-quicksand font-bold mb-6">Cart</h2>
      {cart.length > 0 ? (
        <ul className="w-full">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 object-contain rounded-md mr-4"
                />
                <div>
                  <span className="font-semibold">{item.name}</span> -{" "}
                  <span className="font-rubik">
                    ${item.price} x {item.quantity}{" "}
                  </span>
                </div>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg font-quicksand font-bold h-80 flex justify-center items-center">
          Cart is empty
        </p>
      )}
      {cart.length > 0 && (
        <>
          <p className="font-bold font-quicksand">
            Total Amount: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            className="mt-6 px-6 py-3 text-base font-semibold text-white bg-green-900 rounded-md hover:bg-green-600 focus:outline-none focus:bg-yellow-600"
            onClick={handleClick}
          >
            Place Order
          </button>
          <button
            className="mt-6 px-6 py-3 text-base font-semibold text-black rounded-md hover:bg-red-600 hover:text-white focus:outline-none focus:bg-yellow-600"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
