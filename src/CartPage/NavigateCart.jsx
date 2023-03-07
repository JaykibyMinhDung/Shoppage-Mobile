import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Style from "./Style.module.css";

const NavigateCart = (props) => {
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const Nameuser = localStorage.getItem("user");

  const checkout = useNavigate();
  const Proceedtocheckout = () => {
    checkout("/checkout");
  };
  const CountinueShopping = () => {
    checkout("/shop");
  };
  return (
    <div className={Style.NaigateCart}>
      <button onClick={CountinueShopping}>
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
        <span> </span>
        Countinue Shopping
      </button>
      <button onClick={Proceedtocheckout}>
        Proceed to checkout
        <span> </span>
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default NavigateCart;
