import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Messenger from "../HomePage/Livechat/IconChat";
import HeaderPage from "../Layout/Navbar/Header";
import BannerShop from "../ShopPage/HeaderShopPage/BannerShop";
import Bill from "./Bill";
import CartTable from "./CartTable";
import NavigateCart from "./NavigateCart";
import Classes from "./Style.module.css";

const CartPage = () => {
  const dispatch = useDispatch();
  // Reset lại mỗi lần thay đổi, tránh gây giảm hiệu suất
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("CartUser"));
    if (Data) {
      dispatch({ type: "UPDATE_CART", payload: "" });
    }
  }, []);
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const selector = useSelector((state) => state.cart.items);
  const Nameuser = localStorage.getItem("user");
  const FindTKUser = Data ? Data.find((e) => e.nameTK === Nameuser) : "";
  // console.log(selector);
  return (
    <div>
      <HeaderPage />
      <BannerShop />
      <Messenger />
      <h3 className={Classes.TitleCart}>Shopping Cart</h3>
      <div className={Classes.bodycart}>
        <div className={Classes.table}>
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            {selector ? (
              selector.map((e) => (
                <CartTable
                  nameproducts={e.nameproducts}
                  price={e.price}
                  amount={e.amount}
                  img={e.image}
                  removeRecycle={true}
                />
              ))
            ) : (
              <CartTable
                nameproducts={""}
                price={0}
                amount={0}
                img={"Errol"}
                removeRecycle={false}
              />
            )}
          </table>
        </div>
        <Bill />
      </div>
      <NavigateCart />
    </div>
  );
};

export default CartPage;
