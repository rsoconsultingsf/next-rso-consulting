import React from "react";

import Link from "next/link";

import styles from "./Button.module.css";

const Button = (props) => {
  if (props.heroAnchor) {
    return (
      <a
        className={styles["hero-anchor"]}
        href={`${props.anchor}`}
      >
        {props.children}
      </a>
    );
  }

  if (props.anchor) {
    return (
      <a
        className={`${styles.anchor} ${styles.btn}`}
        href={`#${props.anchor}`}
      >
        {props.children}
      </a>
    );
  }

  if (props.hero) {
    return (
      <a
        className={`${styles.hero}  ${props.color}`}
        href={`#${props.anchor}`}
      >
        {props.children}
      </a>
    );
  }

  if (props.link) {
    return (
      <Link
        href={props.link}
        passRef
      >
        <span className={`${styles.btn} ${styles[props.color]}`}>
          {props.children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      className={styles.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
