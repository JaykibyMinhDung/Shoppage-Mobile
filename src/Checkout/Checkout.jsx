import Style from "./Checkout.module.css";
import HeaderPage from "../Layout/Navbar/Header";
// import BannerShop from "../ShopPage/HeaderShopPage/BannerShop";
import BannerCheckout from "./BannerCheckOut";
import BoxCheckOut from "./BoxCheckout";
import FormCheckOut from "./FormCheckOut";
import Messenger from "../HomePage/Livechat/IconChat";

const Checkout = () => {
  return (
    <div>
      <HeaderPage />
      <BannerCheckout />
      <Messenger />
      <div className={Style.maincheckout}>
        <FormCheckOut />
        <BoxCheckOut />
      </div>
    </div>
  );
};

export default Checkout;
