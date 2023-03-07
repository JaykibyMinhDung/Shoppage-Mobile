import React from "react";
import { Link } from "react-router-dom";
import Classes from "../StyleShopPage/ShopPage.module.css";

const RealateProduct = (props) => {
  // Biến dùng để chuyển đổi số bình thường thành tiền mặt ( ví dụ: 10000000 => 10.000.000)
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className={Classes.relatedProducts}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.img} alt="Ảnh lỗi" width={200 + "vw"} />
      </Link>
      <p>{props.name}</p>
      <p className={Classes.price}>{VND.format(props.price)}</p>
    </div>
  );
};

export default RealateProduct;
