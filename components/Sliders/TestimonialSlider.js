import React from "react";

import Slider from "react-slick";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
      <Slider {...settings}>
        <div>
          <p>
            RSO consulting has helped our clients reach their maximum goals with
            a proven strategy in the ever competitive Social Media arena. Rob
            Sanders has a firm grasp on the analytics to make any product stand
            out in critical searches across many platforms. Always easy to work
            with, on budget, on time! I recommend Rob and RSO for all your
            search engine marketing needs.
          </p>
          <p>
            <b>Robert Haddon</b>
          </p>
          <p>
            <span className="light">CMR Group of Chicago</span>
          </p>
        </div>
        <div>
          <p>
            Rob has been flexible, personable, and fantastic to work with
            throughout the years. Not only has he helped us with AdWords
            campaigns for{" "}
            <a href="http://www.academyx.com/" target="_blank" rel="noreferrer">
              www.academyx.com
            </a>
            , he has been one of our go-to instructors for SEO & PPC. Students
            comment on how knowledgeable he is and his expertise shines through
            with the practical examples he provides in class.
          </p>
          <p>
            <b>Anita Wu</b>
          </p>
          <p>
            <span className="light">AcademyX</span>
          </p>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
