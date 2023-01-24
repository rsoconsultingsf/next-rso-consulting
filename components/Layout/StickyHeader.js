import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";

import DesktopNav from "../Navigation/Desktop/NavMenu";
import MobileNav from "../Navigation/Mobile/NavMenu";
import Backdrop from "../UI/Backdrop/Backdrop";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

import styles from "./Header.module.css";

// set delay for Sticky Header display
const useDelayUnmount = (isMounted, delayTime) => {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
    }
    return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
};

const mountedStyle = { animationName: "fade-in", animationDuration: "1s" };
const unmountedStyle = {
  display: "none",
};

const StickyHeader = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawerIsClosing, setDrawerIsClosing] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 300);

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

  // Track window scroll
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        window.pageYOffset >= 600 && setIsMounted(true);
        window.pageYOffset < 600 && setIsMounted(false);
      };
    }
  }, []);

  return <>
    {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
    <SideDrawer
      show={drawerIsOpen}
      close={closeDrawer}
      isClosing={drawerIsClosing}
    >
      <MobileNav />
    </SideDrawer>
    {showDiv && (
      <header
        className={styles["sticky-header"]}
        style={isMounted ? mountedStyle : unmountedStyle}
      >
        <div className={`${styles.header} container`}>
          <Link href="/">
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
    )}
  </>;
};

export default StickyHeader;
