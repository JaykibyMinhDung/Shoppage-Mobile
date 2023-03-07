import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.align_middle}>
        <div className={classes.column}>
          <h3>customer services</h3>
          <Link>Help & Contact US</Link>
          <Link>Return & Refunds</Link>
          <Link>Online Stores</Link>
          <Link>Term & Conditions</Link>
        </div>
        <div className={classes.column}>
          <h3>company</h3>
          <Link>What We Do</Link>
          <Link>Available Services</Link>
          <Link>Latest Post</Link>
          <Link>FAQs</Link>
        </div>
        <div className={classes.column}>
          <h3>social media</h3>
          <Link>Twitter</Link>
          <Link>Instagram</Link>
          <Link>Facebook</Link>
          <Link>Pinterest</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
