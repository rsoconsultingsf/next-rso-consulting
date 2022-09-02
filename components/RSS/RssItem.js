import React from "react";

import styles from "./RssItem.module.css";

const RssItem = (props) => {
  const { title, excerpt, link } = props;

  return (
    <div className={styles.item}>
      <a
        className={styles.title}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  );
};

export default RssItem;
