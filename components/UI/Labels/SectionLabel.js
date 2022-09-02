import React from "react";

import * as styles from "./SectionLabel.module.css";

const SectionLabel = (props) => {
  return (
    <div
      className={
        props.orange
          ? styles.orange
          : props.red
          ? styles.red
          : props.blue
          ? styles.blue
          : props.green
          ? styles.green
          : props.purple
          ? styles.purple
          : props.teal
          ? styles.teal
          : styles.turq
      }
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default SectionLabel;
