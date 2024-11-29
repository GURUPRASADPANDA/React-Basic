import Product from "./Product.jsx";

function ProductTab(){
let styles = {
    display:"flex",
    flexWrap:"wrap",
}
    return (
    <div style={styles}>
       <Product title="Pen" idx={0}/>
       <Product title="Pencil" idx={1}/>
       <Product title="Sharpner" idx={2}/>
       <Product title="Eraser" idx={3}/>
    </div>
  );
}
export default ProductTab;