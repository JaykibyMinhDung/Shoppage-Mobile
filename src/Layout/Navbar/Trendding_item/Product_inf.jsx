import React from "react";
import classes from "../Styles/TrendingProduct.module.css";
// import { Link } from "react-router-dom";

// Component để định dạng danh sách các sản phẩm TOP TRENDDING
const ProductsInf = (props) => {
  // Biến dùng để chuyển đổi số bình thường thành tiền mặt ( ví dụ: 10000000 => 10.000.000)
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  // Hàm dùng để lấy tên từ click hình ảnh
  const SelectNameProduct = () => {
    // chuyển tên lên component cha từ đó sẽ tìm dữ liệu theo hàm find()
    props.onName(props.name);

    props.onShow(); // Khi click sẽ kích hoạt hàm và hiện popup (Chuyển trạng thái thành true)
  };
  return (
    <div>
      <img src={props.src} alt={props.name} onClick={SelectNameProduct} />
      <p id={classes.name1}>{props.name}</p>
      <p className={classes.price}>{VND.format(props.price)}</p>
    </div>
  );
};

export default ProductsInf;
