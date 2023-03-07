import React from "react";

import classes from "./Styled/ProductList.module.css";
import HeaderPage from "../Layout/Navbar/Header";
import BannerShop from "./HeaderShopPage/BannerShop";
import NavbarShop from "./Main/NavbarShop";
import BackgroundShopPage from "./Main/BackgroundShopPage";
import Mycontext from "./StoreShop/StoreContext";
// import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Messenger from "../HomePage/Livechat/IconChat";

/*
  Khi nhấn All sẽ hiển thị toàn bộ sản phẩm và chức năng active khi đang ở All
  Khi click vào từng list bên canh sẽ được chuyển sang các sản phẩm tương ứng
*/
const ShopPage = () => {
  // Dùng để re-render lại trang mỗi khi người dùng chọn một sản phẩm ở categories
  const [convert, setConvert] = useState("ALL");
  const test = {
    Product: convert,
    FilterProducts: () => {},
  };
  return (
    <Mycontext.Provider value={test}>
      <React.Fragment>
        <HeaderPage />
        <BannerShop />
        <Messenger />
        <div className={classes.PopupCategories}>
          <NavbarShop Maybe={setConvert} />
          <BackgroundShopPage Product={convert} />
        </div>
      </React.Fragment>
    </Mycontext.Provider>
  );
};

export default ShopPage;
