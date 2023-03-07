import React from "react";
import Classes from "./Style.module.css";

const Bill = () => {
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const Nameuser = localStorage.getItem("user");
  const FindTKUser = Data ? Data.find((e) => e.nameTK === Nameuser) : "";
  // console.log(FindTKUser);
  // Tính giá trị tổng tiền hàng từ tài khoản hiện tại
  const price = FindTKUser
    ? FindTKUser.items.map((e) => e.price * e.amount)
    : [];
  const Total = price.reduce(function (pre, aft, i) {
    return pre + aft;
  }, 0);
  // console.log("Hiệu năng cực kém");

  // Khi người dùng nhập code
  const discount_code = () => {
    alert(" Code Not correctly");
  };
  // Tạo giá trị VND
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className={Classes.bill}>
      <h3>CART TOTAL</h3>
      {/* Tổng giá */}
      <p>
        SUBTOTAL: <span className={Classes.blur}> {VND.format(Total)}</span>
      </p>
      <hr />
      {/* Sau khi đã cộng cả giảm giá */}
      <p>TOTAL: {VND.format(Total)}</p>
      <div className={Classes.DiscountBill}>
        <input type="text" placeholder="Enter your coupon" name="Discount" />{" "}
        <br />
        <button onClick={discount_code}>
          <i className="fa fa-gift" aria-hidden="true"></i> Apply coupon
        </button>
      </div>
    </div>
  );
};
export default Bill;
