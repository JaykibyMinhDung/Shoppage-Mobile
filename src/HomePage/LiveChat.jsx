import React, { useRef } from "react";
import Classes from "./LiveChat.module.css";

const Livechat = () => {
  const MessRef = useRef();
  const submitBoxchat = (e) => {
    e.preventDefault();
    console.log(MessRef.current.value);
    MessRef.current.value = "";
  };
  return (
    <div className={Classes.box}>
      <div className={Classes.align}>
        <h1>Customer Support</h1>
        <button>Let's Chat App</button>
      </div>
      <div className={Classes.Messages}>
        <div className={Classes.client}>
          <p>Xin chào</p>
          <p>Làm thế nào để xem các sản phẩm</p>
        </div>
        <div className={Classes.admin}>
          <p>
            {" "}
            <figure className={Classes.avatar}>
              <img src="" alt="wrong image" />
            </figure>{" "}
            ADMIN: Chào bạn
          </p>
          <p>
            <figure className={Classes.avatar}>
              <img src="" alt="wrong image" />
            </figure>{" "}
            ADMIN: Bạn có thể vào mục shop để xem các sản phẩm
          </p>
        </div>
      </div>
      <div className={Classes.align2}>
        <figure className={Classes.avatar}>
          <img src="" alt="wrong image" />
        </figure>
        <textarea
          type="text"
          placeholder="Enter Message!"
          ref={MessRef}
          className={Classes.messInput}
        ></textarea>
        <div>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M360.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </div>
        <div onClick={submitBoxchat}>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Livechat;
