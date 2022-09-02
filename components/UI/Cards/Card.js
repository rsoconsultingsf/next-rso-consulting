import React from "react";

import * as styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={
        props.className && props.sticky && props.desktop
          ? `${styles[props.className]} ${styles.sticky} ${styles.desktop}`
          : props.className && props.sticky
          ? `${styles[props.className]} ${styles.sticky}`
          : props.className
          ? styles[props.className]
          : styles.card
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
