import { useCart } from "./AddToCartContext.jsx";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  console.log(cartItems);
  const navigate = useNavigate();

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    // Find the item in cartItems to get its itemId
    const item = cartItems.find(item => item.itemId === itemId);
    if (!item) return;

    try {
      // Call backend to check stock
      const res = await axios.get("https://backend-duradior.vercel.app/api/user/Cart/add", {
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

  
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  useEffect(() => {
    const saveCartToDB = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const phone = user.PhoneNum;
      console.log(phone)
      if (!phone) {
      console.error("User phone not available, cannot save cart.");
      return;
      }
      const Items = cartItems.map(item => ({
        productID: item.itemId,
        quantity: item.quantity || 1
      }));
      

      try {
        const res = await axios.post("https://backend-duradior.vercel.app/api/user/Cart/save", {
          userPh: phone,
          Items
        });
        console.log("Cart saved:", res.data);
      } catch (error) {
        console.error("Failed to save cart", error);
      }
    };

    if (cartItems.length > 0) {
      saveCartToDB();
    }
  }, [cartItems]);

  return (
    <>
      <div className="process">
        <span>Cart</span>
        <span className="dash-line"></span>
        <span>Address</span>
        <span className="dash-line"></span>
        <span>Payment</span>
      </div>
      <div className="cart-container">
        <h2 className="cart-heading">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.itemName} />
                <div className="cart-item-details">

                  <div className="items-column1">
                    <h4>{item.itemName}</h4>
                  <div className="price-info">
                    <span className="item-price">Price/Item: ₹{item.cost}  </span>
                  </div>
                  </div>
                  

                    <div className="quantity-controls">
                      
                      
                      <div>
                      <button
                        className="qty-changer"
                        onClick={() => handleQuantityChange(item.itemId, (item.quantity || 1) - 1)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        className="qty-changer"
                        onClick={() => handleQuantityChange(item.itemId, (item.quantity || 1) + 1)}
                      >
                        +
                      </button>
                      </div>
                      
                       <button class="remove-button" onClick={() => removeFromCart(item.itemId) }>Remove</button>
                    </div>
                  
                    <div class="item-column3">
                        
                        <span className="total-price">Total = ₹{(item.price) * (item.quantity || 1)}</span>
                    </div>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <h3>Cart Total: ₹{cartTotal}</h3>
              <div className="buy-btn">
                <button 
                  style={{
                    backgroundColor: cartItems.length === 0 ? "gray" : "#0F0130", 
                    height: "50px", 
                    width: "150px", 
                    borderRadius: "25px", 
                    color:"white",
                    transition: "opacity 0.3s ease",
                    opacity: 1,
                    cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
                    ":hover": { opacity: cartItems.length === 0 ? 1 : 0.5}
                  }} 
                  onClick={() => navigate("/customer-details")}
                  disabled={cartItems.length === 0}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      
    </>
  );
}

export default CartPage;
