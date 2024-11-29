import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}){
    let oldPrices=["12.34","34.55","46.54","98.00"];
    let newPrices=["56.32","95.75","44.65","90.89"];
    let decription = ["blue hex","green circle","black pop","white fourty"];
  
    return (
    <div className="Product">
        <h4>{title}</h4>
        <p>{decription[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;