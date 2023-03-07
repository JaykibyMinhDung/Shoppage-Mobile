// import { legacy_createStore as createStore } from "redux";
const initialState = { popup: false, nameTK: "" };

// Quản lý trạng thái của modal
const AccReducer = (state = initialState, action) => {
  // Trạng thái ban đầu của popup
  if (action.type === "ON_LOGIN") {
    return {
      popup: !state.popup,
      nameTK: action.payload,
    };
  }
  if (action.type === "ON_LOGOUT") {
    localStorage.removeItem("user");
    return {
      popup: !state.popup,
      nameTK: "",
    };
  }

  return state;
};
// Lưu store vào trong một biến để truyền sang các component

export default AccReducer;
