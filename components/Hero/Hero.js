import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Buttons/Button";

import styles from "./Hero.module.css";

import { navLinks } from "../../data/navLinks";

const Hero = (props) => {
  const { image, alt, children } = props;

  return (
    <section className={styles["hero-container"]}>
      <div className={styles.hero}>
        <div className={styles["hero-inner"]}>
          <Image
            className={styles["hero-image"]}
            src={image}
            alt={alt}
            objectFit="cover"
          />
          <div className={`${styles.header} container`}>
            <Image
              src="/images/logos/rso-logo-white.svg"
              alt="RSO Consulting logo"
              width={145}
              height={54}
            />
            <nav></nav>
          </div>
          <div className={styles["hero-overlay"]}>{children}</div>
        </div>
        <div className={styles["btn-container"]}>
          <Button heroAnchor anchor="top">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
