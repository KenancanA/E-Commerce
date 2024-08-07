import { useEffect, useState } from "react";
import "./css/App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
      <Drawer
        onClose={() => dispatch(setDrawer())}
        anchor="right"
        open={drawer}
      >
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <div
                  className="flex-row"
                  style={{
                    padding: "20px",
                  }}
                >
                  <img src={product.image} width={50} height={50} />
                  <p style={{ width: "350px", marginRight: "5px" }}>
                    {product.title}({product.count})
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      marginRight: "5px",
                      width: "60px",
                    }}
                  >
                    {product.price} $
                  </p>
                  <button
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "antiquewhite",
                      border: "none",
                      width: "60px",
                    }}
                  >
                    Sepetten Çıkar
                  </button>
                </div>
              </div>
            );
          })}
        <div>
          <p
            style={{
              textAlign: "right",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Toplam Sepet Tutarı: {totalAmount} $
          </p>
        </div>
      </Drawer>
    </PageContainer>
  );
}

export default App;
