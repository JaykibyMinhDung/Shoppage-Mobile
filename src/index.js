import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ModalReducer from "./Layout/Navbar/Trendding_item/store";
import AccReducer from "./Login_Resgister/ReduxStore/LoginStore";
import listCart from "./DetailPage/DetailRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Lưu store vào trong một biến để truyền thông sang các component
const reducer = combineReducers({
  isPopup: ModalReducer,
  accountAuth: AccReducer,
  cart: listCart,
});
const store = createStore(reducer);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
