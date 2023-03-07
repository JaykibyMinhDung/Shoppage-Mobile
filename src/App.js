// import logo from "./logo.svg";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./ShopPage/ShopPage";
import DetailPage from "./DetailPage/DetailPage";
import CartPage from "./CartPage/CartPage";
import Checkout from "./Checkout/Checkout";
// import Banner from "./Navbar/Components/Header/Banner";
import Register from "./Login_Resgister/Register/Register";
import Login from "./Login_Resgister/Login/Login";
import Home from "./HomePage/Home";
import NotFound from "./PageNotFound/PageNotFound";

function App() {
  /*
  Hoàn thành các chức năng chưa có trong Asm nhưng lại hiện thị với người dùng (Lọc ở shoppage, tìm kiếm ở shoppage, hiện theo Apple hay all, ấn vào iphone sẽ hiện ra các sản phẩm về iphone (Ở trang home),....)
  UI:
  input: Hiện lỗi bằng onChang
  loadding: Thêm trạng thái load
  Animation: Cho ảnh
  Chat: Thêm vài 3 lời nhắn
  */
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route path="all" element={<h2>all</h2>} />
        </Route>
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
