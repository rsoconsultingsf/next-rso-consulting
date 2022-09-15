import React from "react";

import Link from "next/link";

import styles from "./WebsiteCard.module.css";

const WebsiteCard = (props) => {
  if (props.link) {
    return (
      <Link className={styles.link} href={props.link} passRef>
        <a target="_blank" rel="noopener noreferrer">
          <div
            className={`${styles["website__contents"]} ${styles["link-card"]}`}
          >
            {props.image}
            <span className={styles.title}>{props.title}</span>
          </div>
        </a>
      </Link>
    );
  } else {
    return (
      <div className={`${styles["website__contents"]} ${styles.card}`}>
        {props.image}
        <span className={styles.title}>{props.title}</span>
      </div>
    );
  }
};

export default WebsiteCard;
