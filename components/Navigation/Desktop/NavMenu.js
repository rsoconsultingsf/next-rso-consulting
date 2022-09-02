import React from "react";

import NavItem from "./NavItem";

import navLinks from "../../../data/navLinks";

import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  const propClass = props.white ? styles["nav-menu-white"] : styles["nav-menu"];

  return (
    <nav>
      <ul className={propClass}>
        {navLinks.map((item, index) => {
          return (
            <NavItem
              key={index}
              link={item.path}
              className={props.white ? "underline-white" : "underline"}
              subMenu={item.subMenu}
            >
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
