import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/Modal.module.css";

// Nội dung hiển thị bên trong modal (Popup)
const ProductsDetail = (props) => {
  const navigate = useNavigate();

  const NavigateDetail = () => {
    navigate(`/detail/${props.id}`, { replace: true });
  };
  // Chuyển đổi số thành tiền mặt
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className={classes.layout_modal}>
      <div className={classes.detail}>
        <img src={props.src} alt="anh loi" width={10 + "%"} height={90 + "%"} />
        <div>
          <h3>{props.name}</h3>
          <p>{VND.format(props.price)}</p>
          <p>{props.description}</p>
          <button onClick={NavigateDetail}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            <p>View Detail</p>
          </button>
        </div>
      </div>
      <div className={classes.exit} onClick={props.onClose}>
        x
      </div>
    </div>
  );
};

export default ProductsDetail;
