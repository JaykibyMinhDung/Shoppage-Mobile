import React from "react";
import classes from "../Styles/Sale_search.module.css";
import Search from "./Search";

const Salebox = (props) => {
  return (
    <React.Fragment>
      <div className={classes.background_box}>
        <div>
          <h4>free shipping</h4>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h4>24 x 7 service</h4>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h4>festival offer</h4>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <Search />
    </React.Fragment>
  );
};

export default Salebox;
