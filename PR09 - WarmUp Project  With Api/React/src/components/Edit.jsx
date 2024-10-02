import React, { useContext } from "react";
import ProductHandler from "../utils/ProductRemoveCard";
import { ProductContext } from "../Context/Context";
import ProductCard from "../utils/ProductCard";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [Products , setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    function EditProduct(product){
        navigate(`./${product.id}`);
    }

  return (
    <div className="p-5 w-auto flex gap-3 flex-wrap justify-start">
      {Products.map((product) => <ProductCard product={product} key={product.id} clickHandler={EditProduct} editButton={true}/>)}
    </div>
  );
}

export default Edit;
