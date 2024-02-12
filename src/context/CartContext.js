import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const uniqueItem = new Set(cart.map((item) => item.id));
    setCartItemCount(uniqueItem.size);
  }, [cart]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updateCart = [...cart];
      updateCart[existingItemIndex].quantity += 1;
      setCart(updateCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const clearCart = () => {
    setCart([]);
  };

  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = (userData) => {
    const orderData = { items: cart, totalPrice: getTotalPrice() };
    console.log("User Input Details:", userData);
    console.log("Ordered Data:", orderData);
    clearCart();
    navigate("/success");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        placeOrder,
        getTotalPrice,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
