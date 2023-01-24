import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";

import DesktopNav from "../Navigation/Desktop/NavMenu";
import MobileNav from "../Navigation/Mobile/NavMenu";
import Backdrop from "../UI/Backdrop/Backdrop";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

import styles from "./Header.module.css";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawerIsClosing, setDrawerIsClosing] = useState(true);

  const openDrawer = () => {
    setDrawerIsClosing(false);
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsClosing(true);
    const drawerTimer = setInterval(() => {
      setDrawerIsOpen(false);
      clearInterval(drawerTimer);
    }, 270);
  };

  // Prevent scrolling behind sidedrawer when open
  useEffect(() => {
    drawerIsOpen && (document.documentElement.style.overflow = "hidden");
    drawerIsOpen && (document.body.style.paddingRight = "15px");
    !drawerIsOpen && (document.documentElement.style.overflow = "unset");
    !drawerIsOpen && (document.body.style.paddingRight = "0");
  }, [drawerIsOpen]);

  return <>
    {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
    <SideDrawer
      show={drawerIsOpen}
      close={closeDrawer}
      isClosing={drawerIsClosing}
    >
      <MobileNav />
    </SideDrawer>
    <header className={styles["normal-header"]}>
      <div className={`${styles.header} container`}>
        <Link href="/" passHref>
          <Image
            src="/images/logos/san-francisco-digital-marketing-agency_color.svg"
            alt="RSO Logo - San Francisco Digital Marketing Agency"
            className="header-logo-link"
            width={145}
            height={54}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>
        <div className="desktop">
          <DesktopNav />
        </div>
        <div className="mobile" onClick={openDrawer}>
          <BiMenu color="#000" size={32} />
        </div>
      </div>
    </header>
  </>;
};

export default Header;
