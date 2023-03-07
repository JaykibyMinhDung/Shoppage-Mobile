import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../../LoaddingPage/LoaddingPage";
// import Mycontext from "../StoreShop/StoreContext";
import ProductsOfShopPage from "../FetchData/ProductsOfShopPage";
import classes from "../Styled/ProductList.module.css";
import SortProducts from "./SortProducts";

const BackgroundShopPage = (props) => {
  // Minh se lay results de lam dieu kien cho dieu kien. Dieu kien cua result la chia thanh 3 phan sau do cho vao logic thu 2
  const [result, setresults] = useState(0);
  const [total, setTotal] = useState(0);
  const [Database, setDatabase] = useState();
  const [SortDatabase, setSortDatabase] = useState("defaults");

  const filterChangeHandler = (selectedYear) => {
    setSortDatabase(selectedYear);
  };
  const [isLoading, setIsLoading] = useState(true);

  const DataTrendingProduct = async () => {
    const Response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const Data = await Response.json();
    setIsLoading(false);
    setTotal(Data.length);
  };
  // Nếu ở câu điều kiện 1 thì nó sẽ trả về giá trị lọc của categories, tức số phần tử của hàm filter,còn ở câu điều kiện 2 nó sẽ trả về tổng số dữ liệu thu database (dành cho all hoặc apple), cái cuối dùng dùng in ra phần tử = 0 do không có kểt quả lọc nào phù hợp
  const ConditionResult = () => {
    if (result < total && result > 0) {
      return result;
    }
    if (result === -1) {
      return total;
    } else {
      return result;
    }
  };

  useEffect(() => {
    DataTrendingProduct();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.centered}>
        <LoadingSpinner />
      </section>
    );
  }
  // console.log(SortDatabase);
  return (
    <div className={classes.width}>
      <div className={classes.interface}>
        <input type="search" placeholder="Enter search here!" />
        <SortProducts
          selected={SortDatabase}
          onChangeFilter={filterChangeHandler}
          dataSort={setDatabase}
        />
      </div>
      <ProductsOfShopPage allstorage={Database} />
      {ConditionResult() ? (
        <p></p>
      ) : (
        <div>
          <br />
          <h2>Not found {props.Product}s 💥</h2>
        </div>
      )}

      <Outlet />
      <div className={classes.Pagenumber}>
        <button>{"<<"}</button>
        {/* Dùng input và các tiền tố trong css, sau đó truy cập bằng input.target hoặc ref.current */}
        <span>{1}</span>
        <button>{">>"}</button>
      </div>
      <div>
        <p>
          Showing {ConditionResult()}- {total} of results
        </p>
      </div>
    </div>
  );
};

export default React.memo(BackgroundShopPage);
