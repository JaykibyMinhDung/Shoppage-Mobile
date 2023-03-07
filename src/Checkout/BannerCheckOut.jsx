import React from "react";
import { useLocation } from "react-router-dom";
import classes from "../ShopPage/Styled/ProductList.module.css";

const BannerCheckout = () => {
  const location = useLocation();
  // const param = useParams();
  // console.log(location.pathname.toUpperCase());
  const path = location.pathname.toUpperCase();
  return (
    <div className={classes.Banner}>
      <h2>SHOP</h2>
      <p>HOME / CART {path}</p>
    </div>
  );
};

export default BannerCheckout;
