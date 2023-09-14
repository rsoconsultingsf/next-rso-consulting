import React from "react";

import Slider from "react-slick";

import Image from "next/legacy/image";

import styles from "./PPCSlider.module.css";

const PPCSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles["ppc-slider"]}>
      <Slider {...settings}>
        <div>
          <Image
            src="/images/ppc/google-ads.png"
            alt="Google Ads platform"
            width={705}
            height={461}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div>
          <Image
            src="/images/ppc/linkedin-ads.png"
            alt="LinkedIn Ads platform"
            width={705}
            height={461}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div>
          <Image
            src="/images/ppc/facebook-ads.png"
            alt="Facebook Ads platform"
            width={705}
            height={461}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </Slider>
    </div>
  );
};

export default PPCSlider;
