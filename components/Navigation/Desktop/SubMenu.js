import React from "react";

import Link from "next/link";

import styles from "./SubMenu.module.css";

const SubMenu = (props) => {
  return (
    <div
      className={
        props.showSubMenu && props.white
          ? styles["sub-menu-container-active-white"]
          : props.showSubMenu && !props.white
          ? styles["sub-menu-container-active"]
          : styles["sub-menu-container"]
      }
    >
      <ul className={styles["sub-menu"]} aria-label="submenu">
        {props.menu.map((subLink, key) => (
          <li key={key} className={styles["sub-menu-item"]}>
            <Link href={subLink.path} className={styles["sub-menu-link"]}>
              {subLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
