import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Style.module.css";

const CartTable = (props) => {
  const dispatch = useDispatch();
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const Nameuser = localStorage.getItem("user");
  const FindTKUser = Data ? Data.find((e) => e.nameTK === Nameuser) : "";

  // Tỉnh tổng giá trị đơn hàng từ hàm hiện tại
  const ComputerBoss = () => {
    if (FindTKUser) {
      const price = FindTKUser.items
        ? FindTKUser.items.map((e) => e.price * e.amount)
        : "";
      const Total = price
        ? price.reduce(function (pre, aft, i) {
            return pre + aft;
          }, 0)
        : 0;
      return Total;
    }
  };

  // Nút giảm số lượng hàng hóa
  const minus = () => {
    // Tránh việc giảm dưới, gây mất logic
    if (props.amount > 1) {
      const ArrCart = {
        nameClient: Nameuser,
        nameproducts: props.nameproducts,
        price: props.price,
        amount: new Number(props.amount) - 1,
        TotalpriceOld: ComputerBoss(),
        image: props.img,
      };
      dispatch({ type: "UPDATE_CART", payload: ArrCart });
    }
  };

  // Nút cộng thêm hàng hóa
  const plus = () => {
    // Nếu kho có bao nhiêu cập nhật bằng đó nhưng không có dữ liệu kho nên lấy theo số bé nhất mà một cửa hàng thường nhập bán
    if (props.amount < 10) {
      console.log(ComputerBoss());
      const ArrCart = {
        nameClient: Nameuser,
        nameproducts: props.nameproducts,
        price: props.price,
        amount: new Number(props.amount) + 1,
        TotalpriceOld: ComputerBoss(),
        image: props.img,
      };
      dispatch({ type: "UPDATE_CART", payload: ArrCart });
    }
  };

  // Xóa dữ liệu products
  const remove = () => {
    dispatch({ type: "DELETE_CART", payload: props.nameproducts });
  };

  //  Lây giá trị VND
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <tbody>
      <tr>
        <td>
          <img className={Style.img} src={props.img} alt="Product" />
        </td>
        <td>
          {" "}
          <h3>{props.nameproducts}</h3>{" "}
        </td>
        <td>
          {" "}
          <p> {VND.format(props.price)} </p>
        </td>
        <td className={Style.width}>
          <button onClick={minus}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <span className={Style.inputpt}>{props.amount}</span>
          <button onClick={plus}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </td>
        <td>
          <p>{VND.format(props.price * props.amount)}</p>
        </td>
        {props.removeRecycle ? (
          <td className={Style.remove} onClick={remove}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
        ) : (
          <td></td>
        )}
      </tr>
      ;
      {/* <tr>
            <td>
              <img
                className={Style.img}
                src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249"
                alt="wrong"
              />
            </td>
            <td>
              {" "}
              <h3>Apple Iphone 11 64gb</h3>{" "}
            </td>
            <td>
              {" "}
              <p> 10.999.999 </p>
            </td>
            <td className={Style.width}>
              <button onClick={minus}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              <input
                aria-label="quantity"
                ref={valueCart}
                className={Style.inputpt}
                min="1"
                name="test"
                type="number"
                placehoder="1"
              />
              <button onClick={plus}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </td>
            <td>
              <p>10.999.000</p>
            </td>
            <td className={Style.remove}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr> */}
    </tbody>
  );
};

export default CartTable;
