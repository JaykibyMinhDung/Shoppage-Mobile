import React from "react";

import HeaderPage from "../Layout/Navbar/Header";
import Banner from "../Layout/Navbar/Header/Banner";
import BrowseCategories from "../Layout/Navbar/BrowseCategories";
import Footer from "../Layout/Footer/Footer";
import TrendingProduct from "../Layout/Navbar/Trendding_item/TrendingProduct";
import Salebox from "../Layout/Navbar/AdvantageStore/SaleBox";
import Livechat from "./LiveChat";
import Messenger from "./Livechat/IconChat";
// import store from "../Layout/Navbar/Trendding_item/store";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderPage />
      <Banner />
      <BrowseCategories />
      <TrendingProduct />
      <Salebox />
      <Messenger />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
