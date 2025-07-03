import { Link } from "react-router-dom"
import "./Product.css"
function Product({image,title,itemId}){
    return(
        
            <Link to={`/product/${itemId}`} className="card-link">
        <div className="card">
<img src={image} alt={title}/>
<h2>{title}</h2>

        </div>
        </Link>
     
       
    );
}
export default Product