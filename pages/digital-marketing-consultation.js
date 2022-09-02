import React, { Fragment } from "react";

import Head from "next/head";

import Hero from "../components/heroSection/heroSection";
import Header from "../components/Layout/Header";

import ContactSection from "../components/Contact/ContactSection";

import heroImage from "../public/images/hero/rso-hero_contact.png";

const ContactUs = () => {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <div className="desktop-contact">
        <Hero className="contact-hero" image={heroImage} alt="" noAnchor>
          <ContactSection
            noLabel
            contactHeader={
              <h1
                className="sub-headline"
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto 40px auto",
                  color: "#fff",
                }}
              >
                Reach out with any <b>questions</b> you might have regarding how{" "}
                <b>RSO</b> can help you with your <b>digital marketing</b>.
              </h1>
            }
          />
        </Hero>
        <div style={{ paddingBottom: "30px" }}></div>
      </div>
      <div className="mobile-contact">
        <Header />
        <ContactSection
          noLabel
          contactHeader={
            <h1
              className="sub-headline"
              style={{
                maxWidth: "1200px",
                margin: "40px auto 40px auto",
                color: "#4D5E80",
              }}
            >
              Reach out with any <b>questions</b> you might have regarding how{" "}
              <b>RSO</b> can help you with your <b>digital marketing</b>.
            </h1>
          }
        />
      </div>
    </Fragment>
  );
};

export default ContactUs;
