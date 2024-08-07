import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../css/ProductDetails.css";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          height: "550px",
        }}
      >
        <img style={{ margin: "20px" }} src={image} width={400} height={500} />
      </div>
      <div style={{ marginLeft: "25px", fontFamily: "arial" }}>
        <h1>{title}</h1>
        <p style={{ fontSize: "20px" }}>{description}</p>
        <h1 style={{ fontWeight: "bold" }}>{price} $</h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCirclePlus
            onClick={increment}
            className="icons"
            style={{ marginRight: "5px" }}
          />
          <span style={{ fontSize: "30px" }}>{count}</span>
          <CiCircleMinus
            onClick={decrement}
            className="icons"
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <button onClick={addBasket} className="button">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
