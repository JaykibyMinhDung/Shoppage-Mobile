import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../Modal_DetailProducts/Popup";

import ProductsDetail from "../Modal_DetailProducts/ProductsDetail";
import classes from "../Styles/TrendingProduct.module.css";
import ProductsInf from "./Product_inf";

const TrendingProduct = () => {
  const [TrendingItem, setTrendingItem] = useState([]);
  const [Viruss, setViruss] = useState();
  const dispatch = useDispatch();
  const ModalHandler = useSelector((state) => state.isPopup.popup);

  const showPopup = () => {
    dispatch({ type: "SHOW_POPUP" });
  };
  const hidePopup = () => {
    dispatch({ type: "HIDE_POPUP" });
  };
  //  Bắt đầu truy cập vào API bằng hàm async, lưu dữ liệu API bằng useState
  const DataTrendingProduct = async () => {
    const Response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const Data = await Response.json();
    // Định dạng lại dữ liệu từ API cho dễ sử dụng và gọi tên
    const DataProductTrendding = Data.map((e) => {
      return {
        category: e.category,
        img1: e.img1,
        img2: e.img2,
        img3: e.img3,
        img4: e.img4,
        longdesc: e.long_desc,
        name: e.name,
        price: e.price,
        shortdesc: e.short_desc,
        id: e._id.$oid,
      };
    });

    // Kiểm tra dữ liệu bên trong
    console.log(DataProductTrendding);
    setTrendingItem(DataProductTrendding);
  };
  // Tìm kiếm dữ liệu từ API khi click vào sản phẩm
  const ProductFind = (e) => {
    return e.name === Viruss;
  };
  const ProductPrintModal = TrendingItem.find(ProductFind);
  // Khởi tạo lại web khi có sự thay đổi từ API
  useEffect(() => {
    DataTrendingProduct();
  }, []);
  return (
    <React.Fragment>
      <div className={classes.title}>
        <p>made the hard way</p>
        <h2>top trending product</h2>
      </div>
      {/* In dữ liệu nguồn ra thành các sản phẩm top trending */}
      <div className={classes.img_item}>
        {TrendingItem.map((e) => (
          <ProductsInf
            src={e.img1}
            name={e.name}
            price={e.price}
            id={e.id}
            onShow={showPopup}
            onName={setViruss}
          />
        ))}
      </div>
      {/* Bên dưới là dữ liệu truyền xuống modal để khi click người dùng có thể xem qua sản phẩm bằng popup */}
      {ModalHandler && ProductPrintModal && (
        <Popup>
          <ProductsDetail
            id={ProductPrintModal.id}
            src={ProductPrintModal.img1}
            name={ProductPrintModal.name}
            price={ProductPrintModal.price}
            description={ProductPrintModal.shortdesc}
            onClose={hidePopup}
          />
        </Popup>
      )}
    </React.Fragment>
  );
};

export default TrendingProduct;
