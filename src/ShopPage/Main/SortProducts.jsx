import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Hàm này để lọc dữ liệu từ các giá trị truyền vào từ components BackGroundShopPage, nó có 3 biến: biến thứ nhất chứa data của API, biến thứ 2 và 3 chứa string đã lọc trên đường dẫn
const sortProducts = (products, Increase, Decrease) => {
  return products.sort((productsA, productsB) => {
    // Nếu true thì sẽ lọc sản phẩm của biến "isSortingAscending"
    if (Increase) {
      return new Number(productsA.price) > new Number(productsB.price) ? 1 : -1;
    }
    // Nếu true thì sẽ lọc sản phẩm của biến "isSortingDesending"
    if (Decrease) {
      return new Number(productsA.price) < new Number(productsB.price) ? 1 : -1;
    } else {
      return;
    }
  });
};

const SortProducts = (props) => {
  const [dataAPI, setDataAPI] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  // Lấy tham số từ URL, biến queryParams trả về một object, object này sẽ get về một value từ key "sort"
  const queryParams = new URLSearchParams(location.search);

  // Lấy tham số từ URL, so sánh với value từ key "sort"
  const isSortingAscending = queryParams.get("sort") === "asc";

  // Lấy tham số từ URL, biến queryParams trả về một object, object này sẽ get về một value từ key "sort"
  const isSortingDesending = queryParams.get("sort") === "desc";

  const sortedQuotes = sortProducts(
    dataAPI,
    isSortingAscending,
    isSortingDesending
  );
  const DataTrendingProduct = async () => {
    const Response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const Data = await Response.json();
    setDataAPI(Data);
  };

  useEffect(() => {
    DataTrendingProduct();
  }, []);

  const changeSortingAscHandler = () => {
    props.dataSort(sortedQuotes);
    navigate(location.pathname, {
      search: `?sort=asc`,
    });
  };
  const changeSortingDescHandler = () => {
    props.dataSort(sortedQuotes);
    navigate(location.pathname, {
      search: `?sort=desc`,
    });
  };
  const Changedefault = () => {
    props.dataSort(sortedQuotes);
    navigate(location.pathname, {
      search: `?sort=default`,
    });
  };

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  // props.dataSort(sortedQuotes);
  console.log(Boolean(isSortingAscending));
  console.log(sortedQuotes);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value={"defaults"}>Defaulting Sorting</option>
          <option value={"increase"}>Increase Sorting</option>
          <option value={"decrease"}>Decrease Sorting</option>
        </select>
      </div>
    </div>
  );
};

export default React.memo(SortProducts);
