import React from "react";

import Link from "next/link";

import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <Link
      href={props.link}
      passRef
    >
      <span className="link-item">
        <li className={`${styles[props.className]}`}>{props.children}</li>
      </span>
    </Link>
  );
};

export default NavItem;
