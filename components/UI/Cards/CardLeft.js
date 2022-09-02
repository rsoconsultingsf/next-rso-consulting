import React from "react";

import styles from "./Card.module.css";

const CardLeft = (props) => {
  return <div className={styles.left}>{props.children}</div>;
};

export default CardLeft;
