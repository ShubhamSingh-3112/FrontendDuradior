import "./Confirm.css";
import "./customer.css"
import { useCart } from "./AddToCartContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Confirm() {
  const location = useLocation();
  const { cartItems } = useCart();

  const [modeOfPay, setModeOfPay] = useState("");
  const [loading, setLoading] = useState(false);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const data = location.state;
  if (!data) {
    return (<p>No address found. Please go back and enter your details</p>);
  }

  // Prepare items array for backend
  const items = cartItems.map(item => ({
    productID: item.itemId,
    quantity: item.quantity || 1
  }));

  // Handle order submission
  const handleOrder = async () => {
    setLoading(true);
    const payload = {
      userName: data.name,
      phNum: data.phone,
      items,
      amount: cartTotal,
      address: `${data.address}, ${data.city}, ${data.state} - ${data.pin}`,
      modeOfPay
    };
    try {
    if(modeOfPay==="COD"){
    const result3=  await axios.post("https://backend-duradior.vercel.app/api/user/order/cod",payload);
      if(result3.status===200){
        alert("ORDER PLACED SUCCESSFULLY");
      } 
      else{
        alert("ORDER PLACEMENT FAILED");
      }
    }
    else{
      const result=await axios.post("https://backend-duradior.vercel.app/api/user/order/create",payload);
      console.log("Razorpay Key:", import.meta.env.VITE_RAZORPAY_KEY);
      if(result.status===200){
        const order = result.data;
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          amount: order.amount,
          currency: order.currency,
         
          
          order_id: order.id,
          handler: async function (response) {
          const {razorpay_payment_id, razorpay_order_id, razorpay_signature} =response;
          const payload = {
            razorpay_order_id: razorpay_order_id,
            razorpay_payment_id: razorpay_payment_id,
            razorpay_signature: razorpay_signature
          }
          const result1 = await axios.post("https://backend-duradior.vercel.app/api/user/order/validate",payload);
            if(result1.status===200){
             alert("ORDER PLACED SUCCESSFULLY");
            }
          else{
            alert("ORDER PLACEMENT FAILED");
          }
          },
          prefill: {
            name: data.name,
            
            contact: data.phone
          },
          theme: { color: "#3399cc" }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      }
      else{
        alert("ORDER PLACEMENT FAILED");
      }
    }
    } catch (err) {
      console.error(" Error submitting order:", err);
      alert("Failed to submit order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="process">
        <span >Cart</span>
        <span className="dash-line"></span>
        <span>Address</span>
        <span className="dash-line"></span>
        <span>Payment</span>
      </div>
      <div className="container">
        <div className="left">
          <div className="saved-address-card">
            <h2>Shipping Address</h2>
            <h3>{data.name}</h3>
            <p>Phone: {data.phone}</p>
            <p>{data.address}, {data.city}</p>
            <p>{data.state} - {data.pin}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="right">
          <h2>Price Details</h2>
          <div className="price-details-list">
            {cartItems.map((item, index) => (
              <div className="price-item" key={index}>
                <div className="item-left">
                  <span className="item-title">{item.title}</span>
                  <span className="item-qty">Qty: {item.quantity || 1}</span>
                </div>
                <div className="item-total">
                  ₹{item.price * (item.quantity || 1)}
                </div>
              </div>
            ))}
            <hr className="divider-line" />
            <div className="price-item total-amount">
              <span>Total Amount</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <label>
          <input
            name="mop"
            type="radio"
            value="COD"
            checked={modeOfPay === "COD"}
            onChange={() => setModeOfPay("COD")}
          />
          COD
        </label>
        <label>
          <input
            name="mop"
            type="radio"
            value="UPI"
            checked={modeOfPay === "UPI"}
            onChange={() => setModeOfPay("UPI")}
          />
          UPI
        </label>
        <label>
          <input
            name="mop"
            type="radio"
            value="Card"
            checked={modeOfPay === "Card"}
            onChange={() => setModeOfPay("Card")}
          />
          Card
        </label>
        <button onClick={handleOrder} disabled={loading}>
          {loading ? "Processing..." : "Proceed to buy"}
        </button>
      </div>
    </>
  );
}
