import React from "react";
import { useParams, useLocation } from "react-router-dom";
import classes from "../Styled/ProductList.module.css";

const BannerShop = () => {
  const location = useLocation();
  // console.log(location.pathname.toUpperCase());
  // Lấy path name in hoa
  const path = location.pathname.toUpperCase();
  return (
    <div className={classes.Banner}>
      <h2>SHOP</h2>
      {/* Bỏ dấu gạch chéo ở path */}
      <p>{path.substring(1, 5)}</p>
    </div>
  );
};

export default BannerShop;
