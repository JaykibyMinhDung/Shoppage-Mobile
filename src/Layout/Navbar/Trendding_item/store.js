// Quản lý trạng thái của modal
const ModalReducer = (state = { popup: false }, action) => {
  // Trạng thái ban đầu của popup
  if (action.type === "SHOW_POPUP") {
    return {
      popup: !state.popup,
    };
  }
  if (action.type === "HIDE_POPUP") {
    return {
      popup: !state.popup,
    };
  }
  return state;
};

export default ModalReducer;
