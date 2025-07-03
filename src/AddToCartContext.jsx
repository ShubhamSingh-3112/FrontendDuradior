/* import { createContext, useContext, useState } from "react";

const CartCon = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => 
      
      [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(
      (prev) => prev.filter((item) => item.id !== id)
    );
  };

  return (
    <CartCon.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartCon.Provider>
  );
}

export function useCart() {
  return useContext(CartCon);
}




const updateQuantity = (id, newQuantity) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};
 */
import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartCon = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (item) => {
    console.log("addToCart called", item);
    const itemId = item.itemId;
    const existingItem = cartItems.find(cartItem => cartItem.itemId === itemId);
    const quantityToCheck = existingItem ? (existingItem.quantity || 1) + 1 : 1;
    console.log(itemId)
    try {
          const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/Cart/add`, {
          params: {
          itemid: itemId,
          quantity: quantityToCheck
        }
      });
      console.log(res.status,res.data)
      if (res.status === 200) {
        if (existingItem) {
          setCartItems(prev =>
            prev.map(cartItem =>
              cartItem.itemId === itemId
                ? { ...cartItem, quantity: quantityToCheck }
                : cartItem
            )
          );
        } else {
          setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
        }
      } else {
        alert("Item not available in required quantity");
      }
    } catch (err) {
      console.log(err);
      alert("Error checking stock before adding to cart");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.itemId !== itemId));
  };

    const updateQuantity = (itemId, newQuantity) => {
      if (newQuantity < 1) return;
    
     setCartItems(prev =>
      prev.map(item =>
        item.itemId === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    // Find the item in cartItems to get its itemId
    const item = cartItems.find(item => item.itemId === itemId);
    if (!item) return;

    try {
      // Call backend to check stock
      const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/Cart/add`, {
        params: {
          itemid: itemId,
          quantity: newQuantity
        }
      });

      if (res.status === 200) {
        // If allowed, update quantity in cart
        updateQuantity(itemId, newQuantity);
      } else {
        alert("Not enough stock available!");
      }
    } catch (err) {
      alert("Error checking stock before updating quantity.");
    }
  };

  return (
    <CartCon.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        handleQuantityChange
      }}
    >
      {children}
    </CartCon.Provider>
  );
}

export function useCart() {
  return useContext(CartCon);
}