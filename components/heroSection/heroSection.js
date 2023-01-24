import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Buttons/Button";
import NavMenu from "../Navigation/Desktop/NavMenu";
import MobileNav from "../Navigation/Mobile/NavMenu";
import Backdrop from "../UI/Backdrop/Backdrop";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import ContactForm from "../Forms/ContactForm";

import { BiMenu } from "react-icons/bi";

import styles from "./hero.module.css";

const Hero = (props) => {
  const { image, alt, children, anchor } = props;

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

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer
        show={drawerIsOpen}
        close={closeDrawer}
        isClosing={drawerIsClosing}
      >
        <MobileNav />
        <p style={{ fontSize: "22px", fontWeight: "700" }}>Contact Us Today</p>
      </SideDrawer>
      <section
        className={styles["hero-container"]}
        style={{ marginBottom: props.noAnchor ? "-35px" : null }}
      >
        <div className={props.fixed ? "hero-fixed" : styles.hero}>
          <div
            className={
              props.noAnchor
                ? styles["hero-inner-no-anchor"]
                : styles["hero-inner"]
            }
          >
            <Image
              src={image}
              alt={alt}
              priority
              placeholder="blur"
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.header} container`}>
              <Link href="/">
                <Image
                  src="/images/logos/san-francisco-digital-marketing-agency_white.svg"
                  alt="RSO Logo - San Francisco Digital Marketing Agency"
                  className="header-logo-link"
                  width={145}
                  height={54}
                />
              </Link>
              <div className="desktop">
                <NavMenu white />
              </div>
              <div className="mobile" onClick={openDrawer}>
                <BiMenu color="#fff" size={32} />
              </div>
            </div>
            <div
              className={
                props.fixed
                  ? `${styles["hero-overlay"]} ${props.className}`
                  : `${styles["hero-overlay"]} container ${props.className}`
              }
              style={{ maxWidth: props.fixed ? "none" : "1440px" }}
            >
              <div className={styles["hero-overlay-inner"]}>{children}</div>
            </div>
          </div>

          {!props.noAnchor && (
            <div className={styles["btn-container"]}>
              <Button heroAnchor anchor={anchor}>
                Learn More
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
