import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Styled from "./Styles/HomePage.module.css";
import { useNavigate } from "react-router-dom";
// import Banner from "./Header/Banner";

const HeaderPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isActivehome, setisActivehome] = useState(false);
  const [isActiveshop, setisActiveshop] = useState(false);
  const [isActivecart, setisActivecart] = useState(false);
  const [isActivelogin, setisActivelogin] = useState(false);

  const dispatch = useDispatch();
  // const NameUser = useSelector((state) => state.accountAuth.nameTK); // Khi reload sẽ tải lại, dẫn đến FindNameTK underfine
  const KeepingLoggedin = localStorage.getItem("user");
  // Chức năng checkout, nếu người dùng ấn check out, hệ thống sẽ hỏi lại
  const Logout = () => {
    if (window.confirm("Do you really want to checkout ?")) {
      dispatch({ type: "ON_LOGOUT" });
      navigate("/");
    }
  };
  // Hàm thay đổi màu sắc thẻ
  const Activehome = () => {
    setisActivehome(true);
    setisActiveshop(false);
    navigate("/");
  };
  // Hàm thay đổi màu sắc thẻ
  const Activeshop = () => {
    setisActivehome(false);
    setisActiveshop(true);
    navigate("/shop");
  };
  // console.log(location);
  const Activecart = () => {};
  const Activelogin = () => {};
  return (
    <React.Fragment>
      <div className={Styled.Header}>
        <div className={Styled.hometext}>
          <NavLink
            to="/home"
            // onClick={Activehome}
            className={({ isActive }) =>
              isActive ? `${Styled.active} ${Styled.link}` : Styled.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            // onClick={Activeshop}
            className={({ isActive }) =>
              isActive ? `${Styled.active} ${Styled.link}` : Styled.link
            }
          >
            Shop
          </NavLink>
        </div>
        <div className={Styled.text_Boutique}>
          <p>BOUTIQUE</p>
        </div>
        <div className={Styled.logintext}>
          {/* icon */}
          <NavLink
            to="/cart"
            // onClick={() => {
            // navigate("/cart");
            // }}
            className={({ isActive }) =>
              isActive ? `${Styled.active} ${Styled.link}` : Styled.link
            }
          >
            <i className="fas fa-cart-plus fa-sm  "></i> Cart
          </NavLink>

          {/* Tai khoan nguoi dung */}
          {KeepingLoggedin ? (
            <div className={Styled.buttonLogout} onClick={Logout}>
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              {KeepingLoggedin} <span> (Logout)</span>
            </div>
          ) : (
            <NavLink
              to="/login"
              // onClick={() => {
              //   navigate("/login");
              // }}
              className={({ isActive }) =>
                isActive ? `${Styled.active} ${Styled.link}` : Styled.link
              }
            >
              <i className="fa fa-user" aria-hidden="true"></i> Login
            </NavLink>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderPage;
