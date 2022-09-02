import React from "react";

import styles from "./Card.module.css";

const PreviewCard = (props) => {
  return <div className={styles["preview-card"]}>{props.children}</div>;
};

export default PreviewCard;
