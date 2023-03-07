import React from "react";
import ReactDOM from "react-dom";
// import PortalReactDOM from "react-dom";
import classes from "../Styles/Modal.module.css";

// Tạo nền xám cho modal
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
// Gói các component bên trong sẽ tạo ra một box thông báo
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Truy vấn đến id chứa overlay
const portalElement = document.getElementById("overlays");

// Tạo cấu hình cho modal (ModalOverlay) và overlays
const Popup = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
        // {props.children}
      )}
    </React.Fragment>
  );
};

export default Popup;
