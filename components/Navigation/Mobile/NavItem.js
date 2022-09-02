import React from "react";

import Link from "next/link";

import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <Link href={props.link} passRef>
      <a className="link-item">
        <li className={`${styles[props.className]}`}>{props.children}</li>
      </a>
    </Link>
  );
};

export default NavItem;
