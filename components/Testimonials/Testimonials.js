import React from "react";

import Image from "next/image";

import SectionLabel from "../UI/Labels/SectionLabel";
import TestimonialSlider from "../Sliders/TestimonialSlider";

import background from "../../public/images/testimonials/Testimonials-bg.png";

import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles["testimonials-container"]}>
      <div className="container center">
        <div className={styles.inner}>
          <div className={styles["background-image-container"]}>
            <Image
              className={styles["background-image"]}
              src={background}
              alt="RSO Testimonials"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
          <div className={styles.content}>
            <SectionLabel green>What People Have To Say</SectionLabel>
            <h2 className="sub-headline" style={{ margin: "0" }}>
              Client <b>Testimonials</b>
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
