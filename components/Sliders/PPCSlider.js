import React from "react";

import Slider from "react-slick";

import Image from "next/image";

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
    <div style={{ maxWidth: "700px" }}>
      <Slider {...settings}>
        <div>
          <Image
            src="/images/ppc/google-ads.png"
            alt="Google Ads platform"
            width={705}
            height={461}
          />
        </div>
        <div>
          <Image
            src="/images/ppc/linkedin-ads.png"
            alt="LinkedIn Ads platform"
            width={705}
            height={461}
          />
        </div>
        <div>
          <Image
            src="/images/ppc/facebook-ads.png"
            alt="Facebook Ads platform"
            width={705}
            height={461}
          />
        </div>
      </Slider>
    </div>
  );
};

export default PPCSlider;
