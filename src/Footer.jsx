import { Link } from "react-router-dom";


import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src="/duradior_icon.png" alt="Off Duty India" className="footer-logo" />
      </div>

      <div className="footer-section links-section">
        <h4>LINKS</h4>
         <ul>
           <li><Link to="/terms">Terms and Conditions</Link></li>
           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
           <li><Link to="/return-policy">Return Policy</Link></li>
         </ul>

      </div>

      <div className="footer-section menu-section">
  <h4>FOOTER MENU</h4>
  <ul>
    <li><Link to="/contact">Contact us</Link></li>
    <li><Link to="/shipping-policy">Shipping Policy</Link></li>
    <li><Link to="/return-request">Return Request</Link></li>
    <li><Link to="/return-exchange-policy">Return and Exchange Policy</Link></li>
    <li><Link to="/terms-of-service">Terms of Service</Link></li>
  </ul>
</div>


      <div className="footer-powered">
        Powered by OFF-DUTY-STORE
      </div>
    </footer>
  );
}
