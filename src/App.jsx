import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import ProductDetail from "./ProductDetail.jsx";
import CartPage from "./CartPage.jsx";
import CustomerDetail from "./CustomerDetail.jsx";
import Confirm from "./Confirm.jsx";
import Footer from "./Footer.jsx";
import Terms from "./Terms.jsx";
import ReturnPolicy from "./ReturnPolicy.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Contact from "./Contact.jsx";
import ShippingPolicy from "./ShippingPolicy.jsx";
import ReturnRequest from "./ReturnRequest.jsx";
import ReturnExchangePolicy from "./ReturnExchangePolicy.jsx";
import TermsOfService from "./TermsOfService.jsx";



import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <h2 style={{ textAlign: "center", padding: "20px", fontSize: 30 }}>
                  Cleaning Agents
                </h2>
              </div>

              <div className="product-container">
                <Product image="/kitchen cleaner.png" title="kitchen Cleaner" itemId="kitchen-cleaner" />
                <Product image="/All Purpose Cleaner.png" title="All purpose cleaner" itemId="All purpose cleaner" />
                <Product image="/limescale.jpeg" title="Lime scale remover" itemId="Lime scale remover" />
                <Product image="/dishcleaner.jpeg" title="Dish cleaner" itemId="Dish cleaner" />
                <Product image="/liquidhandwash.jpeg" title="Liquid Hand wash" itemId="Liquid Hand wash" />
                <Product image="/allpurposeliqdetergent.jpeg" title="All purpose liquid detergent" itemId="All purpose liquid detergent" />
                <Product image="/toploadliqdetergent.jpeg" title="Top Load liquid Detergent" itemId="Top Load liquid Detergent" />
                <Product image="/frontload.jpeg" title="Front Load liquid Detergent" itemId="Front Load liquid Detergent" />
                <Product image="/floor.jpeg" title="Floor disinfectant" itemId="Floor disinfectant" />
                <Product image="/toiletcleaner.jpeg" title="Toilet cleaner" itemId="Toilet cleaner" />
                <Product image="/carwash.jpeg" title="Car dashboard and seat cleaner" itemId="Car dashboard and seat cleaner" />
                <Product image="/carwind.jpeg" title="Car windshield cleaner" itemId="Car windshield cleaner" />
                <Product image="/carwiper.jpeg" title="Car wiper fluid" itemId="Car wiper fluid" />
                <Product image="/handsanitizer.png" title="Hand sanitizer" itemId="Hand sanitizer" />
              </div>

              <div>
                <h2 style={{ textAlign: "center", padding: "20px", fontSize: 30 }}>
                  Backpacks
                </h2>
              </div>

              <div className="product-container">
                <Product image="/schoolbagpack.jpeg" title="Travel Backpack" itemId="Travel Backpack" />
                <Product image="/schoolbagpack.jpeg" title="School Backpack" itemId="School Backpack" />
              </div>

              <Footer /> {/* Footer included only on the homepage */}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/customer-details" element={<CustomerDetail />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-request" element={<ReturnRequest />} />
        <Route path="/return-exchange-policy" element={<ReturnExchangePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

      </Routes>
    </>
  );
}

export default App;
