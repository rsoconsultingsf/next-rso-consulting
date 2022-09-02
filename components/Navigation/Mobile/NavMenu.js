import React from "react";

import NavItem from "./NavItem";

import navLinks from "../../../data/navLinks";

import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  return (
    <nav>
      <ul className={styles["nav-menu"]}>
        {navLinks.map((item, index) => {
          return (
            <NavItem key={index} link={item.path} className="mobile-link-item">
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
