import React from "react";

import Slider from "react-slick";

import Card from "../UI/Cards/Card";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="training-slider">
      <Card style={{ padding: "0 50px" }}>
        <Slider {...settings}>
          <div>
            <p style={{ padding: "20px" }}>
              The consulting work delivered by RSO consistently exceeds client
              expectations, delivering improvements to their SEO performance and
              domain authority across the board. Rob is an intuitive and
              competent partner, demonstrating incredible commitment to his
              client’s success.
            </p>
            <p style={{ textAlign: "center", marginBottom: "0" }}>
              <b>David Hine</b>
            </p>
            <p style={{ textAlign: "center", marginTop: "0" }}>
              <span className="light">
                <a
                  href="https://www.mighway.com/nz/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mighway
                </a>
              </span>
            </p>
          </div>
          <div>
            <p style={{ padding: "20px" }}>
              Since starting the engagement, the school has seen tremendous
              growth in conversion rates and traffic to key pages on their
              website. In addition to providing strong optimization services,
              the RSO Consulting team has proven to be flexible, accommodating,
              and in-tune with their business needs.
            </p>
            <p style={{ textAlign: "center", marginBottom: "0" }}>
              <b>Karen Hayes</b>
            </p>
            <p style={{ textAlign: "center", marginTop: "0" }}>
              <span className="light">
                <a
                  href="https://www.ebinternacional.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escuela Bilingüe Internacional
                </a>
              </span>
            </p>
          </div>
          <div>
            <p style={{ padding: "20px" }}>
              The data and interpretation provided by RSO Consulting has helped
              their client meet the challenges of the modern world more
              successfully, including a massive increase in demand during the
              COVID-19 pandemic. Their team is insightful, dedicated, and
              enjoyable to work with.
            </p>
            <p style={{ textAlign: "center", marginBottom: "0" }}>
              <b>Mike Schramm</b>
            </p>
            <p style={{ textAlign: "center", marginTop: "0" }}>
              <span className="light">
                <a
                  href="https://www.bluejeans.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BlueJeans Network
                </a>
              </span>
            </p>
          </div>
          <div>
            <p style={{ padding: "20px" }}>
              RSO Consulting’s SEO and website design efforts have led to a
              significant increase in search rankings, traffic, engagement, and
              sales. Working independently, the team continues to deliver as
              asked. Their reliability and availability are noteworthy, and
              their proactive approach ensures success.
            </p>
            <p style={{ textAlign: "center", marginBottom: "0" }}>
              <b>Linda Cain</b>
            </p>
            <p style={{ textAlign: "center", marginTop: "0" }}>
              <span className="light">
                <a
                  href="https://valleyfig.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Valley Fig Growers
                </a>
              </span>
            </p>
          </div>
        </Slider>
      </Card>
    </div>
  );
};

export default TestimonialSlider;
