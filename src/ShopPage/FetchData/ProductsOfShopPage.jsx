import React, { useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ProductsList from "./ProductList";
import Classes from "../Styled/ProductsList.module.css";
import Mycontext from "../StoreShop/StoreContext";
import { useContext } from "react";

const ProductsOfShopPage = (props) => {
  const CartCTX = useContext(Mycontext);
  const [TrendingItem, setTrendingItem] = useState([]);
  // Truy cập dữ liệu từ database
  const DataTrendingProduct = useCallback(async () => {
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
    setTrendingItem(DataProductTrendding);
    // console.log(DataProductTrendding);
  });
  // Lọc dữ liệu từ kho lưu trữ để lấy các sản phẩm theo categories
  const TrendingFilter = TrendingItem.filter(
    (e) => e.category === CartCTX.Product
  );
  // Lấy độ dài của hàm và in ra dưới chân trang
  const Thu = () => {
    if (TrendingFilter.length === 0 && CartCTX.Product === "ALL") {
      return -1;
    } else {
      return TrendingFilter.length;
    }
  };
  // props.allstorage(Thu());
  // console.log(TrendingFilter.length);
  useEffect(() => {
    DataTrendingProduct();
    // setTest(CartCTX.Product);
  }, []);
  return (
    <React.Fragment>
      {/* In dữ liệu nguồn ra thành các sản phẩm top trending */}
      <div className={Classes.Product}>
        {/* Tạo điều kiện để hiện thị theo category */}
        {/* props.Dataproducts */}
        {CartCTX.Product === "ALL"
          ? TrendingItem.map((e) => (
              <ProductsList
                src={e.img1}
                name={e.name}
                price={e.price}
                id={e.id}
              />
            ))
          : TrendingFilter.map((e) => (
              <ProductsList
                src={e.img1}
                name={e.name}
                price={e.price}
                id={e.id}
              />
            ))}
      </div>
    </React.Fragment>
  );
};

export default ProductsOfShopPage;
