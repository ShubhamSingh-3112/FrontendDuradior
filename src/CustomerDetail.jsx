import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./customer.css";
import Header from './Header';
import { useCart } from "./AddToCartContext";

export default function CustomerDetail() {
  const { cartItems } = useCart();

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  pin: "",
  address: "",
  city: "",
  state: "",
});
const navigate=useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
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
          <div className="contact">
            <h2>CONTACT DETAILS</h2>
            <input type="text"  onChange={handleChange} name="name" value={formData.name} placeholder="Name*" />
            <input type="tel"  onChange={handleChange} name="phone" value={formData.phone} placeholder="Mobile No*" />
          </div>

          <div className="address">
            <h2>ADDRESS</h2>
            <input type="number" onChange={handleChange} name="pin" value={formData.pin} placeholder="Pin Code*"  />
            <input type="text" name="address" value={formData.address} placeholder="Address*" onChange={handleChange} />
            <input type="text" name="city" value={formData.city} placeholder="City/District*" onChange={handleChange}  />
            <input type="text" name="state" value={formData.state} placeholder="State*" onChange={handleChange}/>
          </div>
                 <button className="save-btn" onClick={() => navigate("/confirm", { state: formData })}>
  Continue
        </button>
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
    </>
  );
}
