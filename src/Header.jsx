import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
   const navigate = useNavigate();

  return (
    <>
      <div className="nav">
        <nav className="nav-link">
          <a onClick={() => navigate('/')} >HOME</a>
          {/* <a href="#">SHOP</a> */}
        </nav>

        <a className="logo" onClick={() => navigate('/')}></a>


        <div className="icons">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        
          <Link to="/cart">
            <FaShoppingCart className="icon-style" style={{ right: "35px" }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
