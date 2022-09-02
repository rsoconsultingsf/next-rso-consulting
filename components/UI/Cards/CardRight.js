import React from "react";

import styles from "./Card.module.css";

const CardRight = (props) => {
  return <div className={styles.right}>{props.children}</div>;
};

export default CardRight;
