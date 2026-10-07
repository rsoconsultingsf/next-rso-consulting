import React, { Fragment } from "react";

import Head from "next/head";

import Hero from "../components/heroSection/heroSection";

import heroImage from "../assets/images/hero/rso-hero_contact.png";

const ThankYou = () => {
  return (
    <Fragment>
      <Head>
        <title>Thanks for Reaching Out | RSO Consulting</title>
        {/* Post-form thank-you page: keep it out of search results. The
            sitemap generator skips pages marked noindex. */}
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Hero image={heroImage} alt="" noAnchor>
        <div
          className="container center"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", paddingTop: "15vh" }}>
            <b>Thanks for reaching out!</b> <br /> We&apos;ll get back to you
            shortly.
          </h1>
        </div>
      </Hero>
      <div style={{ paddingBottom: "30px" }}></div>
    </Fragment>
  );
};

export default ThankYou;
