import React, { useEffect, useState } from "react";
import Classes from "./Checkout.module.css";

const BoxCheckOut = (props) => {
  const [NotFindAccount, setNotFindAccount] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0);
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const Nameuser = localStorage.getItem("user");
  const FindTKUser = Data ? Data.find((e) => e.nameTK === Nameuser) : "";
  // Tính tổng giá tiền để truyền về bill
  const ComputerBoss = () => {
    // Tìm tên người dùng để lọc giá sản phẩm từ tài khoản đó, rồi tiếp tục cộng tổng giá trị để thành tiền
    if (FindTKUser) {
      const price = FindTKUser.items
        ? FindTKUser.items.map((e) => e.price * e.amount)
        : "";
      const Total = price
        ? price.reduce(function (pre, aft, i) {
            return pre + aft;
          }, 0)
        : 0;
      setTotalPrice(Total);
      setNotFindAccount(true);
    }
  };
  useEffect(() => {
    ComputerBoss(FindTKUser);
  }, [FindTKUser]);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className={Classes.billcheckout}>
      <h3>YOUR ORDER</h3>
      {NotFindAccount ? (
        FindTKUser.items.map((e) => (
          <div>
            <p>
              <em>{e.nameproducts} </em>
              <small>
                {VND.format(e.price)} x {e.amount}
              </small>
            </p>
            <hr />
          </div>
        ))
      ) : (
        <div>
          <p>Not Found Products</p>
          {/* <p>Let's go shopping</p> */}
        </div>
      )}
      <em>
        TOTAL <span>{VND.format(TotalPrice)}</span>
      </em>
    </div>
  );
};

export default BoxCheckOut;
