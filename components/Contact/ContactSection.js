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
            <ContactForm formId={props.formId} />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="mobile"
              style={{ paddingBottom: "30px" }}
            >
              <Card>
                <ContactForm formId={props.formId} />
              </Card>
            </div>
            <Card>
              <div
                className="col-2 contact-meta collapse contact-meta-responsive"
                style={{ rowGap: "0", padding: "10px 0" }}
              >
                <div className="contact-meta-inner">
                  <FaMapMarkerAlt size={16} />
                  <p className="medium">
                    548 Market St
                    <br /> San Francisco, CA 94104
                  </p>
                </div>
                <div className="contact-meta-inner">
                  <FaEnvelope size={16} />
                  <a
                    className="medium"
                    href="mailto:support@rso-consulting.com"
                  >
                    support@rso-consulting.com
                  </a>
                </div>
                <div className="contact-meta-inner contact-meta-hours" style={{ gridColumn: "span 2", justifySelf: "center" }}>
                  <FaRegClock size={16} />
                  <p className="medium">
                    Hours? Our work is not limited to set hours. Contact us and
                    give us a try!
                  </p>
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
