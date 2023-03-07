import React from "react";
import classes from "../Styles/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const Navigate = useNavigate();
  const ShopPage = () => {
    Navigate("/shop");
  };
  return (
    <div className={classes.Banner}>
      <div className={classes.box_banner}>
        <div className={classes.text_banner}>
          <p>new inspiration 2020</p>
        </div>
        <div className={classes.text_sale}>
          <p>{"20%"} off on new season </p>
        </div>
        <button className={classes.button} onClick={ShopPage}>
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
