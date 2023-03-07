import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Styles/Categories.module.css";
import product_1Image from "../../ResourceAssignment03/product_1.png";
import product_2Image from "../../ResourceAssignment03/product_2.png";
import product_3Image from "../../ResourceAssignment03/product_3.png";
import product_4Image from "../../ResourceAssignment03/product_4.png";
import product_5Image from "../../ResourceAssignment03/product_5.png";

const BrowseCategories = () => {
  const Navigate = useNavigate();
  const ShopPage = () => {
    Navigate("/shop");
  };
  return (
    <React.Fragment>
      <div className={classes.title}>
        <p>carefuly create collections</p>
        <h2 style={{ marginTop: "-1vw" }}>browse our categories</h2>
      </div>
      <div className={classes.img_1}>
        <img src={product_1Image} alt="Anh loi" onClick={ShopPage} />
        {/* onClick={} */}
        <img src={product_2Image} alt="Anh loi" onClick={ShopPage} />
      </div>
      <div className={classes.img_2}>
        <img src={product_3Image} alt="Anh loi" onClick={ShopPage} />
        {/* onClick={} */}
        <img src={product_4Image} alt="Anh loi" onClick={ShopPage} />
        <img src={product_5Image} alt="Anh loi" onClick={ShopPage} />
      </div>
    </React.Fragment>
  );
};

export default BrowseCategories;
