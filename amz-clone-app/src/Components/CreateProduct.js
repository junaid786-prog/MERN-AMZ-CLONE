import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../Redux/Actions/productAction";
import "../Css/componentscss/createproduct.css";
import Alert from "@mui/material/Alert";
function CreateProduct() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [id, setId] = useState("");
  const product = {
    name,
    description,
    price,
    stock,
    category: "Laptop",
  };

  const { error } = useSelector((state) => state.create_product);
  const submitProduct = () => {
    dispatch(createProduct(product));
  };
  return (
    <div className="create_product_page">
      {error && <Alert severity="error">{error}</Alert>}
      <h4>Create New Product</h4>
      <div className="product_info">
        <p>Enter Product Name</p>
        <input type={Text} onChange={(e) => setName(e.target.value)} />
        <p>Enter Product Id</p>
        <input type={Text} onChange={(e) => setId(e.target.value)} />
        <p>Enter Product Price</p>
        <input type={Number} onChange={(e) => setPrice(e.target.value)} />
        <p>Enter Product Stock</p>
        <input type={Number} onChange={(e) => setStock(e.target.value)} />
        <p>Enter Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="signup_button">
        <button className="register_btn" onClick={submitProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default CreateProduct;
