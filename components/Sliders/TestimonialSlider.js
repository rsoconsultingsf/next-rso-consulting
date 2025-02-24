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
            Partnering with RSO has been a game changer for our marketing
            efforts. Their data-driven approach to demand generation, web and
            SEO has consistently resulted in measurable improvements to traffic,
            leads, and pipeline quarter over quarter. Beyond their expertise,
            they truly act as an extension of our team, bringing strategy and
            efficiency to our marketing team, driving better outcomes each
            quarter.
          </p>
          <p>
            <b>Matt Diamond</b>
          </p>
          <p>Sr. Director, Brand, Web, and Comms</p>
          <p>
            <span className="light">ThreatDown/Malwarebytes</span>
          </p>
        </div>
        <div>
          <p>
            Their team is incredibly knowledgeable and often went above and
            beyond to ensure our campaigns were optimized for performance. As we
            managed our PPC efforts and locations all across North America,
            RSO’s strategic approach and collaboration made a significant
            difference in our success. They are true experts in their field, and
            we highly recommend their services to anyone looking to grow their
            advertising efforts with a skilled and reliable PPC partner.
          </p>
          <p>
            <b>Austin Maynes</b>
          </p>
          <p>Digital Marketing & Brand Manager</p>
          <p>
            <span className="light">Alsco Uniforms</span>
          </p>
        </div>
        <div>
          <p>
            The team at RSO has been invaluable as we have gone from having zero
            paid advertising in the market to establishing a robust,
            multi-channel PPC engine that has been the key catalyst for our
            pipeline development efforts. I deeply appreciate our partnership
            with Rob and team and how I can always count on them to be looking
            around the corner to identify new programs that will extend our
            reach and keep the leads flowing.
          </p>
          <p>
            <b>Zach Bosin</b>
          </p>
          <p>Head of Global GTM</p>
          <p>
            <span className="light">Josys</span>
          </p>
        </div>
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
            <a
              href="http://www.academyx.com/"
              target="_blank"
              rel="noreferrer"
            >
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
          <p>
            Thanks for doing such a great job on our SEO. We are coming up in
            the top section of Google often and it is helping our business.
          </p>
          <p>
            <b>Rose Weidmann</b>
          </p>
          <p>
            <span className="light">Weidmann & Farrar PC</span>
          </p>
        </div>
        <div>
          <p>
            I can highly recommend working with Rob Sanders and his team at RSO.
            I was very impressed with RSO! I reached out for their help with
            increasing the SEO of my non-profits website. I learned so much more
            than I thought I would! It was amazing how much better it was to
            learn and think in terms of the context of their recommendations for
            the non-profit organization rather than just “in concept”. They made
            the ideas they suggested really STICK.
          </p>
          <p>
            <b>Janet Beach</b>
          </p>
          <p>
            <span className="light">Strategic Harmony® Partners</span>
          </p>
        </div>
        <div>
          <p>
            I’ve been working with RSO consulting since 2010. In that time, they
            have been my go-to team for my company’s online marketing needs. As
            an experienced digital marketer myself, I am impressed with their
            commitment to our success, and their ability to work closely with us
            to help us evolve our strategy over time, and measurably grow our
            online traffic and leads in a high-quality way.
          </p>
          <p>
            <b>Nerissa Lemaster-Sardi</b>
          </p>
          <p>
            <span className="light">CrowdScience</span>
          </p>
        </div>
        <div>
          <p>
            I worked closely with RSO’s team for about a year to develop and
            roll out a robust and complex international PPC strategy for my
            company. It has been a very productive and positive relationship and
            I can see so much improvement with their help. Their dedication and
            diligence was much appreciated both by myself as the primary account
            contact, and the senior leaders at my company who also recognized
            the improvements made.
          </p>
          <p>
            <b>Heather Aho</b>
          </p>
          <p>
            <span className="light">Intrax</span>
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
