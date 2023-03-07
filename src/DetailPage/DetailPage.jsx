import { Route, Routes, Outlet, Link, useParams } from "react-router-dom";
import Product from "./Product_ID/Product1";
import React, { useEffect, useState } from "react";
import HeaderPage from "../Layout/Navbar/Header";

// Tạo logic khi ấn vào ảnh sản phẩm ở ShopPage

const DetailPage = () => {
  const [TredingItem, setTrendingItem] = useState([]);
  // Lấy dữ liệu về id từ URL
  const params = useParams();
  const { productId } = params;
  const DataProduct = async () => {
    const Response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const Data = await Response.json();
    setTrendingItem(Data);
  };
  const findDepcriptionproduct = TredingItem.find(
    (e) => e._id.$oid === productId
  );
  // console.log(findDepcriptionproduct);
  useEffect(() => {
    DataProduct();
  }, []);
  return (
    <div>
      <HeaderPage />
      {findDepcriptionproduct && (
        <Product
          src={findDepcriptionproduct.img1}
          img1={findDepcriptionproduct.img2}
          img2={findDepcriptionproduct.img3}
          img3={findDepcriptionproduct.img4}
          name={findDepcriptionproduct.name}
          price={findDepcriptionproduct.price}
          des={findDepcriptionproduct.long_desc}
          min={findDepcriptionproduct.short_desc}
          category={findDepcriptionproduct.category}
          data={TredingItem}
          id={findDepcriptionproduct.id}
        />
      )}
    </div>
  );
};

export default DetailPage;
