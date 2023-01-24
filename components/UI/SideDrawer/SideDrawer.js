import React from "react";
import { createPortal } from "react-dom";

import Link from "next/link";
import Image from "next/image";

import { IoCloseSharp } from "react-icons/io5";

import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return props.show
    ? createPortal(
        <div
          className={
            props.isClosing
              ? `${styles["side__drawer__show"]} sidedrawer__slide__out`
              : props.show
              ? `${styles["side__drawer__show"]} sidedrawer__slide__in`
              : `${styles["side__drawer"]}`
          }
        >
          <div className={styles["side__drawer__inner"]}>
            <div className={styles["side__drawer__close__btn__container"]}>
              <IoCloseSharp
                className={styles["side__drawer__close"]}
                size={28}
                color={"#000"}
                onClick={props.close}
              />
            </div>
            <div className={styles["side__drawer__logo__container"]}>
              <Link href="/">
                <Image
                  className={styles["side__drawer__logo"]}
                  src="/images/logos/san-francisco-digital-marketing-agency_color.svg"
                  alt="RSO Consulting logo"
                  width={200}
                  height={125}
                />
              </Link>
            </div>
            {props.children}
          </div>
        </div>,
        document.getElementById("drawer-hook")
      )
    : null;
};

export default SideDrawer;
