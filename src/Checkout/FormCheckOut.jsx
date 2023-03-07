import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Checkout.module.css";

const FormCheckOut = () => {
  const Navigate = useNavigate();
  const NameRef = useRef();
  const EmailRef = useRef();
  const Address = useRef();
  const TelRef = useRef();
  const Data = JSON.parse(localStorage.getItem("AccountClient"));
  const NameData = localStorage.getItem("user");
  // Hàm valid cho người dùng
  const ValidateEmpty = () => {
    if (NameRef.current.value.trim() === "") {
      // In mot dong text duoi input
      alert("Please type Full Name");
    }
    if (EmailRef.current.value.trim() === "") {
      alert("Please type Email");
    }
    if (Address.current.value.trim() === "") {
      alert("Please type password account");
    }
    if (TelRef.current.value.trim() === "") {
      alert("Please type number phone");
    } else {
      return true;
    }
  };
  const ValidateInfor = () => {
    if (ValidateEmpty() && Data) {
      const findemail = Data.find(
        (e) => e.Email !== EmailRef.current.value.trim()
      );
      if (findemail) {
        alert("This email has not exist, please change email");
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  const Order = (e) => {
    e.preventDefault();
    if (ValidateInfor()) {
      alert("You had order successful ");
      Navigate("/");
    }
  };
  const NotAccount = () => {
    alert("You need Logged in to use this button!");
  };
  return (
    <div className={Style.widthform}>
      <form>
        <div className={Style.form}>
          <h2>BILLING DETAILS</h2>
          <label htmlFor="Fullname">FULLNAME:</label>
          <br />
          <input
            id="Fullname"
            type="text"
            name="Fullname"
            placeholder="Enter Your Fullname Here!"
            ref={NameRef}
          />{" "}
          <br />
          <label htmlFor="Fullname">EMAIL:</label>
          <br />
          <input
            type="email"
            name="Email"
            placeholder="Enter Your Email Here!"
            ref={EmailRef}
          />{" "}
          <br />
          <label htmlFor="Fullname">PHONE NUMBER:</label>
          <br />
          <input
            type="tel"
            name="Phone"
            maxLength="12"
            placeholder="Enter Your Phone Number Here! "
            ref={TelRef}
          />
          <br />
          <label htmlFor="Address">ADDRESS:</label>
          <br />
          <input
            id="Address"
            type="Address"
            name="Address"
            placeholder="Enter Your Address Here!"
            ref={Address}
          />
          <br />
          <button onClick={NameData ? Order : NotAccount}>Place order</button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckOut;
