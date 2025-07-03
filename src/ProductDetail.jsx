import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import productData from "./ProductData.js";
import { useCart } from "./AddToCartContext.jsx";
import Header from "./Header.jsx";
import "./Header.css"



function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();


  const product = productData.find((item) => item.itemId === id);
  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, itemId: product.itemId });
    alert(`${product.title} has been added to your cart!`);
  };


  return (
    <>
 
    <main className="page-container">
       
      <article className="product-info">
        <img src={product.image} alt={product.title} className="product-image" />

        <div className="product-desc">
          <h2 className="product-title">{product.title}</h2>
          <h4>{product.description}</h4>
          <p style={{ fontSize: "20px", marginLeft: "10px" }}>
            <strong>Net Contents: {product.netContent}</strong>
          </p>
          <p className="price">₹{product.price}</p>

          <div className="description-section">
            <h3 className="description-title">Directions</h3>
            <ul>
              {product.direction.map((dir, index) => (
                <li key={index} className="description-text">
                  {dir}
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {/* <button className="buy-now"  onClick={() => navigate('/cart')} >Buy Now</button> */}
          </div>

          <div className="detail-lists">
            <div className="list-column">
              <h3 className="list-heading">Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="vertical-divider"></div>

            <div className="list-column">
              <h3 className="list-heading">Safety Information</h3>
              <ul>
                {product.safetyInfo.map((safety, index) => (
                  <li key={index}>{safety}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <h2>Ingredients</h2>
      <li style={{ marginLeft: "50px" }}>{product.ingredients}</li>

      <h2>Manufacturer Details</h2>
      <li style={{ marginLeft: "50px" }}>
        <p className="manufacturer-label">{product.manufacturer.name}</p>
      </li>
      <li style={{ marginLeft: "50px" }}>
        <p className="manufacturer-label">Address:</p>
        <address className="manufacturer-address">{product.manufacturer.address}</address>
      </li>
      <li style={{ marginLeft: "50px" }}>
        <p className="manufacturer-label">Phone Number: &nbsp;{product.manufacturer.phone}</p>
      </li>
      <li style={{ marginLeft: "50px" }}>
        <p className="manufacturer-label">Website:</p>
        <a href="websitename" className="manufacturer-website">abc.com</a>
      </li>
    </main>
    </>
  );
}

export default ProductDetail;
