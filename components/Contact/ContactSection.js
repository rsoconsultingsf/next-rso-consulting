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
    <section>
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
            // justifyContent: "center",
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
                  <p className="medium">+1 415-992-7711</p>
                </div>
                <div className="contact-meta-inner">
                  <FaRegClock />
                  <p className="medium">Monday - Friday: 8 am – 5 pm</p>
                </div>
                <div className="contact-meta-inner">
                  <FaEnvelope />
                  <p className="medium">support@rso-consulting.com</p>
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
