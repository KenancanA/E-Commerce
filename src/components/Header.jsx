import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon, FaSearchengin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (!theme) {
      root.style.backgroundColor = "#141414";
      root.style.color = "whitesmoke";
      search.style.backgroundColor = "whitesmoke";
    } else {
      root.style.backgroundColor = "antiquewhite";
      root.style.color = "#141414";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text" style={{ cursor: "pointer" }}>
          hepsiorada
        </p>
      </div>

      <div className="flex-row">
        <input
          id="search"
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara..."
        />
        <div>
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="primary"
          >
            <CiShoppingBasket
              style={{ marginBottom: "16px" }}
              className="icon"
            />{" "}
          </Badge>

          {theme ? (
            <CiLight
              className="icon"
              style={{ marginLeft: "20px", marginTop: "17px" }}
              onClick={changeTheme}
            />
          ) : (
            <FaMoon
              className="icon"
              style={{ marginLeft: "20px", marginTop: "17px" }}
              onClick={changeTheme}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
