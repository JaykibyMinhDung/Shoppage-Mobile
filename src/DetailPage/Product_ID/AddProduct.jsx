import React, { useEffect } from "react";
import { useRef } from "react";
import Classes from "../StyleShopPage/ShopPage.module.css";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = (props) => {
  // Các biến gọi hook
  const ref = useRef();
  const dispatch = useDispatch();

  // Biến dùng để chuyển đổi số bình thường thành tiền mặt ( ví dụ: 10000000 => 10.000.000)
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });

  // Lấy dữ liệu từ local về để truyền về cho giỏ hàng
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const Nameuser = localStorage.getItem("user");

  /*
  Nếu chưa có Data thì sẽ thêm mới vào redux , sau đó thêm vào local Khi bấm nút sẽ thêm vào redux, xong sau đó là local
  */

  // Hàm lưu vào local
  const Addcart = () => {
    const valueCart = ref.current.value;
    const ArrCart = {
      nameClient: Nameuser,
      nameproducts: props.name,
      price: props.price,
      amount: valueCart,
      image: props.image,
    };
    // Moi lan load no lai dang nhap lai du lieu khac o items (&& Data.items)
    if (Data) {
      const FindTKUser = Data.find((e) => e.nameTK === Nameuser);
      // console.log(Boolean(FindTKUser));
      if (FindTKUser) {
        const FindProducts = FindTKUser.items.find(
          (namepre) => namepre.nameproducts === props.name
        );
        // console.log(Boolean(FindProducts));
        // Nếu có sản phẩm thêm giống sẽ không thêm sản phẩm
        if (FindProducts) {
          // dispatch({ type: "UPDATE_CART", payload: ArrCart });
          console.log("dang update");
        } else {
          //  Nếu không có sản phẩm giống thì sẽ upload sản phẩm mới
          dispatch({ type: "ADD_CART", payload: ArrCart });
        }
      } else {
        // Nếu không có người dùng thêm sản phẩm mới đầu tiên
        dispatch({ type: "ADD_CART", payload: ArrCart });
      }
    }
    // Nếu không có data nào lưu trữ thì thêm sản phầm mới của người mới đầu tiên
    if (!Data) {
      dispatch({ type: "ADD_CART", payload: ArrCart });
    }
    alert("Add products successful");
  };

  // Nếu chưa đăng nhập sẽ hạn chế thêm sản phẩm
  const NotUser = () => {
    alert("You must be logged in to use this function");
  };
  return (
    <React.Fragment>
      <div className={Classes.inforDetail}>
        <h3>{props.name}</h3>
        <p className={Classes.price}>{VND.format(props.price)}</p>
        <p>{props.des}</p>
        <h5>
          CATEGORY: <em> {props.category}</em>
        </h5>
        <div className={Classes.ButtonCart}>
          <input type="text" disabled="disabled" placeholder="QUANTITY" />
          <input
            className={Classes.OptionNumber}
            ref={ref}
            type="number"
            name="SL"
            min="0"
            defaultValue="1"
          />
          <button onClick={Nameuser ? Addcart : NotUser}>Add to cart</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
