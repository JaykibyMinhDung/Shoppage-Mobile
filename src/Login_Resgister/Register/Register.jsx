import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SaveLocal } from "../InformationDatabase";
import Style from "./StyleLogin.module.css";

const Register = () => {
  // useState cho Email
  const [ValidEmpty, setValidEmpty] = useState(false);
  const [InputEmail, setInputEmail] = useState("");

  // useState cho Password
  const [ValidPWEmpty, setValidPWEmpty] = useState(false);
  const [InputPW, setInputPW] = useState("");

  // useState cho fullname
  const [ValidfullnameEmpty, setValidfullnameEmpty] = useState(false);
  const [Inputfullname, setInputfullname] = useState("");

  // useState cho phonenumber
  const [ValidphonenumberEmpty, setValidphonenumberEmpty] = useState(false);
  const [Inputphonenumber, setInputphonenumber] = useState("");

  const Navigate = useNavigate();
  const NameRef = useRef();
  const EmailRef = useRef();
  const PWRef = useRef();
  const TelRef = useRef();

  const Data = JSON.parse(localStorage.getItem("AccountClient"));
  const ValidateEmpty = () => {
    if (NameRef.current.value.trim() === "") {
      alert("Please type Full Name");
    }
    if (EmailRef.current.value.trim() === "") {
      alert("Please type Email");
    }
    if (PWRef.current.value.trim() === "") {
      alert("Please type your password account");
    }
    if (TelRef.current.value.trim() === "") {
      alert("Please type your number phone");
    } else {
      return true;
    }
  };
  const ValidateInfor = () => {
    /*
    // Nếu true thì nó sẽ so sánh Data có bị trùng lặp không. Nếu không thì đăng kí thành công

     */
    if (ValidateEmpty() && Data) {
      const findemail = Data.find(
        (e) => e.Email === EmailRef.current.value.trim()
      );
      if (findemail) {
        alert("This email has been already, please change email");
        return false;
      }

      if (PWRef.current.value.length <= 8) {
        alert("Password must be longer than 8 characters");
        return false;
      } else {
        return true;
      }
    }
    // Nếu Data không có, thì sẽ đăng nhập tài khoản thành công
    if (ValidateEmpty() && !Data) {
      return true;
    }
  };

  const SubmiLogin = (e) => {
    e.preventDefault();
    setValidEmpty(true);
    setValidPWEmpty(true);
    // console.log(NameRef.current.value, PWRef.current.value, ValidateInfor());
    // ValidateInfor();
    //  Nếu kiểm tra thành công thì sẽ lưu vào local
    if (ValidateInfor()) {
      alert("You are resgister successful !");
      SaveLocal(
        NameRef.current.value,
        PWRef.current.value,
        EmailRef.current.value,
        TelRef.current.value
      );
      setValidEmpty(false);
      setValidPWEmpty(false);
      Navigate("/login");
    }
  };

  // Chức năng UX

  // _________Email
  const InvalidEmail = InputEmail.trim() !== ""; // Neu dau vao rong thi "false"
  const displayUXEmail = !InvalidEmail && ValidEmpty;
  const UXEmptyEmail = () => {
    setValidEmpty(true);
  };
  const EnterEmail = () => {
    // Hàm nhận dữ liệu từ input
    setInputEmail(EmailRef.current.value);
  };

  const classUXEmail = displayUXEmail // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Style.formcontrol} ${Style.invalid}`
    : Style.formcontrol;

  // _________Password
  const InvalidPW = InputPW.trim() !== "";
  const displayUXPW = !InvalidPW && ValidPWEmpty;
  const UXEmptyPassword = () => {
    setValidPWEmpty(true);
  };
  const EnterPassword = () => {
    // Hàm nhận dữ liệu từ input
    setInputPW(PWRef.current.value);
  };

  const classUXPW = displayUXPW // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Style.formcontrol} ${Style.invalid}`
    : Style.formcontrol;

  // _________fullname

  const InvalidFullname = Inputfullname.trim() !== "";
  const displayUXFullname = !InvalidFullname && ValidfullnameEmpty;
  const UXEmptyfullname = () => {
    setValidfullnameEmpty(true);
  };
  const Enterfullname = () => {
    // Hàm nhận dữ liệu từ input
    setInputfullname(NameRef.current.value);
  };

  const classFullname = displayUXFullname // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Style.formcontrol} ${Style.invalid}`
    : Style.formcontrol;

  // _________phonenumber
  const Invalidphonenumber = Inputphonenumber.trim() !== "";
  const displayUXphonenumber = !Invalidphonenumber && ValidphonenumberEmpty;
  const UXEmptyphonenumber = () => {
    setValidphonenumberEmpty(true);
  };
  const Enterphonenumber = () => {
    // Hàm nhận dữ liệu từ input
    setInputphonenumber(TelRef.current.value);
  };

  const classUXphonenumber = displayUXphonenumber // 1 trong 2 lỗi không thỏa mãn sẽ hiện lỗi ở ô input
    ? `${Style.formcontrol} ${Style.invalid}`
    : Style.formcontrol;

  return (
    <div className={Style.background}>
      {/* className={Style['background']} */}
      <form onSubmit={SubmiLogin}>
        <div className={Style.form}>
          <h2>Sign Up</h2>
          <div className={classFullname}>
            <input
              type="text"
              name="Fullname"
              placeholder="Full Name"
              ref={NameRef}
              onBlur={UXEmptyfullname}
              onChange={Enterfullname}
            />{" "}
            {displayUXFullname && (
              <p className={Style.errortext}>Email not be empty</p>
            )}
          </div>
          <div className={classUXEmail}>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              ref={EmailRef}
              onBlur={UXEmptyEmail}
              onChange={EnterEmail}
            />{" "}
            {displayUXEmail && (
              <p className={Style.errortext}>Email not be empty</p>
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
              <p className={Style.errortext}>Password not be empty</p>
            )}
          </div>
          <div className={classUXphonenumber}>
            <input
              type="tel"
              name="Phone"
              maxLength="12"
              placeholder="Phone"
              ref={TelRef}
              onBlur={UXEmptyphonenumber}
              onChange={Enterphonenumber}
            />
            {displayUXphonenumber && (
              <p className={Style.errortext}>PW not be empty</p>
            )}
          </div>
          <br />
          <button>SIGN UP</button>
          <div>
            Login?
            <Link to="/login">Click</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
