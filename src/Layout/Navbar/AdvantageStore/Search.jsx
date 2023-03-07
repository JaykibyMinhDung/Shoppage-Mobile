import React from "react";
import classes from "../Styles/Sale_search.module.css";

const Search = (props) => {
  return (
    <div className={classes.block_search}>
      <div className={classes.Sologan}>
        <h1>let's be friend!</h1>
        <p>Nisi nisi tempor consequat laboris nisi.</p>
      </div>
      <div className={classes.search}>
        <input
          type="search"
          placehoder="Enter your email address"
          name="search"
        />
        {/* <input  name="Subscribe" /> */}
        <button type="submit" className={classes.button}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Search;
