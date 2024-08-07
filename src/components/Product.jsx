import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();
  return (
    <div className="card ">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px", color: "black" }}>
          {title}
        </p>
        <h3 style={{ textAlign: "right", marginRight: "10px", color: "black" }}>
          {price} $
        </h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Ürün Detayına Git
        </button>
      </div>
    </div>
  );
}

export default Product;
