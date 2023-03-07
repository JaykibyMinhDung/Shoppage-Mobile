import React from "react";
import { Link } from "react-router-dom";
import Classes from "../Styled/ProductsList.module.css";

const ProductList = (props) => {
  // Biến dùng để chuyển đổi số bình thường thành tiền mặt ( ví dụ: 10000000 => 10.000.000)
  // console.log(Param2);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className={Classes.imgShopPage}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.src} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <p>{VND.format(props.price)}</p>
    </div>
  );
};

export default ProductList;
