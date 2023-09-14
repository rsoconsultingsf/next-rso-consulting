import React from "react";

import Link from "next/link";

import * as styles from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  if (props.link) {
    return (
      <Link
        className={styles.link}
        href={props.link}
      >
        <div>
          <div
            className={`${styles["service__contents"]} ${styles["link-card"]}`}
          >
            <div className={`${styles.icon}`}>{props.icon}</div>
            <div className={styles.title}>
              <span>{props.title}</span>
            </div>
            {props.description && (
              <div className={styles.description}>{props.description}</div>
            )}
            {props.details && (
              <div className={styles.details}>{props.details}</div>
            )}
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={`${styles["service__contents"]} ${styles.card}`}>
        <div className={`${styles.icon}`}>{props.icon}</div>
        <div className={styles.title}>
          <span>{props.title}</span>
        </div>
        {props.description && (
          <div className={styles.description}>{props.description}</div>
        )}
        {props.details && <div className={styles.details}>{props.details}</div>}
      </div>
    );
  }
};

export default ServiceCard;
