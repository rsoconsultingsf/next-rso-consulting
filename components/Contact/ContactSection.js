import React, { useState, useEffect } from "react";

import Card from "../UI/Cards/Card";
import SectionLabel from "../UI/Labels/SectionLabel";
import ContactForm from "../Forms/ContactForm";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = (props) => {
  return (
    <section id="contact">
      <div className="container center">
        {!props.noLabel && (
          <SectionLabel orange>{props.title || "Get In Touch"}</SectionLabel>
        )}
        {props.contactHeader}
      </div>
      <div className="container col-2">
        <div className="desktop">
          <Card>
            <ContactForm />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div className="mobile" style={{ paddingBottom: "30px" }}>
              <Card>
                <ContactForm />
              </Card>
            </div>
            <Card>
              <div
                className="col-2 contact-meta collapse"
                style={{ rowGap: "0", padding: "10px 0" }}
              >
                <div className="contact-meta-inner">
                  <FaMapMarkerAlt />
                  <p className="medium">
                    268 Bush St. #3038,
                    <br /> San Francisco, CA 94104
                  </p>
                </div>
                <div className="contact-meta-inner">
                  <FaPhoneAlt />
                  <a className="medium" href="tel:4159927711">
                    +1 415-992-7711
                  </a>
                </div>
                <div className="contact-meta-inner">
                  <FaRegClock size={36} />
                  <p className="medium">
                    Hours? Our work is not limited to set hours. Contact us and
                    give us a try!
                  </p>
                </div>
                <div className="contact-meta-inner">
                  <FaEnvelope />
                  <a
                    className="medium"
                    href="mailto:support@rso-consulting.com"
                  >
                    support@rso-consulting.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
