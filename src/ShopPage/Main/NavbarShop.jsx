import React from "react";
// import { NavLink } from "react-router-dom";
import classes from "../Styled/ProductList.module.css";
import Mycontext from "../StoreShop/StoreContext";
import { useContext } from "react";
import { useState } from "react";

const NavbarShop = (props) => {
  // Hàm chứa các biến dùng cho chức năng chuyển categories
  const [textActiveAll, setTextActiveALL] = useState(false);
  const [textActive, setTextActive] = useState(true);
  // Chứa dứ liệu về sản phẩm mình muốn lọc ở categories
  const CartCTX = useContext(Mycontext);
  const filter = (event) => {
    CartCTX.Product = event.target.innerText.toLowerCase();
    props.Maybe(CartCTX.Product);
    // console.log(CartCTX.Product);
    // console.log(event.target.innerText);
  };

  const All = (event) => {
    CartCTX.Product = event.target.innerText;
    props.Maybe(CartCTX.Product);
    setTextActiveALL(true);
    setTextActive(false);
  };
  const Apple = (event) => {
    setTextActiveALL(false);
    setTextActive(true);
  };
  const color = textActiveAll ? classes.active : classes.Link;
  const color2 = textActive ? classes.active : classes.Link;
  /*
    Tạo 1 component liên quan đến cấu hình chung sau đó component cha sẽ thực hiện chức năng lọc, lưu kết quả lọc vào một biến, rồi truyền biến đó xuống component định dạng cấu hình con, từ đó in ra kết quả ra màn hình
    Khi ấn vào sẽ thực hiện chức năng lọc ở component cha
  */
  return (
    <div className={classes.align_categories}>
      <h1>categories</h1>
      <li onClick={Apple} className={color2}>
        APPLE
      </li>
      <li onClick={All} className={color}>
        ALL
      </li>

      <p>iphone & mac</p>
      <ul>
        <li value="iphone" onClick={filter}>
          Iphone
        </li>

        <li value="ipad" onClick={filter}>
          Ipad
        </li>

        <li value="macbook" onClick={filter}>
          Macbook
        </li>
      </ul>
      <p>wireless</p>
      <ul>
        <li value="airpod" onClick={filter}>
          Airpod
        </li>

        <li value="watch" onClick={filter}>
          Watch
        </li>
      </ul>
      <p>other</p>
      <ul>
        <li value="mouse" onClick={filter}>
          Mouse
        </li>

        <li value="keybroad" onClick={filter}>
          Keybroad
        </li>

        <li value="other" onClick={filter}>
          Other
        </li>
      </ul>
    </div>
  );
};

export default NavbarShop;
