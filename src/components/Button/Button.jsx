import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ changePage }) => (
  <button onClick={changePage} type="button" className={styles.Button}>
    Load More
  </button>
);

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
