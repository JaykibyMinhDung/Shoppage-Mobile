import React from "react";
import Classes from "../StyleShopPage/ShopPage.module.css";

const ImageDetail = (props) => {
  return (
    <React.Fragment>
      <div className={Classes.imageDetailPage}>
        <img src={props.img1} alt="anh loi" />
        <img src={props.img2} alt="anh loi" />
        <img src={props.img3} alt="anh loi" />
        <img src={props.src} alt="Ảnh lỗi" />
      </div>
      <img src={props.src} alt="Ảnh lỗi" />
    </React.Fragment>
  );
};

export default ImageDetail;
