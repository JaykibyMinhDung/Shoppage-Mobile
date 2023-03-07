import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Classes from "../Register/StyleLogin.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Luu ten nguoi dung xuong local storage
// Thay đổi dòng input cho thân thiện, sử dụng onChange, bỏ alert

const Login = () => {
  // useState cho Email
  const [ValidEmpty, setValidEmpty] = useState(false);
  const [InputEmail, setInputEmail] = useState("");

  // useState cho Password
  const [ValidPWEmpty, setValidPWEmpty] = useState(false);
  const [InputPW, setInputPW] = useState("");

  const Data = JSON.parse(localStorage.getItem("AccountClient"));
  const EmailRef = useRef();
  const PWRef = useRef();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // Kiểm tra lỗi bỏ trống
  const ValidateEmpty = () => {
    if (EmailRef.current.value.trim() === "") {
      alert("Please type Email");
    }
    if (PWRef.current.value.trim() === "") {
      alert("Please type your password account");
    } else {
      return true;
    }
  };
  // Hàm gửi dữ liệu lên local
  const SubmiLogin = (e) => {
    e.preventDefault();
    // làm 2 hàm có màu xanh khi submit
    setValidEmpty(true);
    setValidPWEmpty(true);
    // Validate Login User
    if (ValidateEmpty() && Data) {
      // Tìm email xác thực
      const FindAccount = Data.find(
        (e) =>
          e.Email === EmailRef.current.value.trim() &&
          e.Password === PWRef.current.value.trim()
      );
      // Nếu nhập sai tên hoặc mật khẩu
      if (!FindAccount) {
        PWRef.current.value = "";
        alert("Email or Password is not correct, please try again");
      }
      // Tìm kiếm người dùng thỏa mãn để đăng nhập thành công
      else {
        dispatch({ type: "ON_LOGIN", payload: FindAccount.name });
        // Chuyển trạng thái đăng nhập, có reload cũng không mất
        localStorage.setItem("user", FindAccount.name);
        // Trả lại giá trị ban đầu của biến đổi màu
        setInputEmail(false);
        setValidPWEmpty(false);

        Navigate("/shop");
      }
    }
    // Nếu không có tài khoản sẽ hiện thông báo cho khách
    if (!Data) {
      alert("Email or Password is not correct, please try again");
    }
  };

  // Chức năng UX

  // _________Email
  const InvalidEmail = InputEmail.trim() !== ""; // Neu dau vao rong thi "false"
  const InvalidPW = InputPW.trim() !== "";
  const displayUXEmail = !InvalidEmail && ValidEmpty;
  const displayUXPW = !InvalidPW && ValidPWEmpty;
  const UXEmptyEmail = () => {
    setValidEmpty(true);
  };
  const EnterEmail = () => {
    // Hàm nhận dữ liệu từ input
    setInputEmail(EmailRef.current.value);
  };

  // _________Password
  const UXEmptyPassword = () => {
    setValidPWEmpty(true);
  };
  const EnterPassword = () => {
    // Hàm nhận dữ liệu từ input
    setInputPW(PWRef.current.value);
  };
  const classUXEmail = displayUXEmail // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Classes.formcontrol} ${Classes.invalid}`
    : Classes.formcontrol;

  const classUXPW = displayUXPW // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Classes.formcontrol} ${Classes.invalid}`
    : Classes.formcontrol;

  return (
    <div className={Classes.background}>
      <form>
        <div className={Classes.form}>
          <h2>Log In</h2>
          <div className={classUXEmail}>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              ref={EmailRef}
              onBlur={UXEmptyEmail}
              onChange={EnterEmail}
            />
            {displayUXEmail && (
              <p className={Classes.errortext}>Email not be empty</p>
            )}
          </div>
          <div className={classUXPW}>
            <input
              type="password"
              name="PassWord"
              placeholder="Password"
              ref={PWRef}
              onBlur={UXEmptyPassword}
              onChange={EnterPassword}
            />
            {displayUXPW && (
              <p className={Classes.errortext}>Password not be empty</p>
            )}
          </div>
          <br />
          <button onClick={SubmiLogin}>SIGN IN</button>
          <div>
            Create an account?
            <Link to="/register"> Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
