import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import SubMenu from "./SubMenu";

import styles from "./NavItem.module.css";

const NavItem = (props) => {
  const router = useRouter();

  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenuHandler = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenuHandler = () => {
    setSubMenuVisible(false);
  };

  return (
    <li
      className={props.className}
      onMouseLeave={() => {
        hideSubMenuHandler();
      }}
    >
      <Link href={props.link}>
        <a
          className={
            props.className === "underline-white"
              ? styles["link-item-white"]
              : styles["link-item"]
          }
          style={{
            color: router.asPath.indexOf(props.link) > -1 ? "#ff6633" : null,
          }}
          onMouseEnter={() => {
            showSubMenuHandler();
          }}
        >
          {props.children}
        </a>
      </Link>
      {props.subMenu && props.subMenu.length > 0 && subMenuVisible ? (
        <SubMenu
          menu={props.subMenu}
          showSubMenu={subMenuVisible}
          white={props.className === "underline-white" ? true : false}
        />
      ) : null}
    </li>
  );
};

export default NavItem;
