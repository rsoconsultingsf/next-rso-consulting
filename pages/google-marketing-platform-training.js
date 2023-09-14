import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../components/heroSection/heroSection";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import TrainingContact from "../components/Contact/TrainingContact";
import Button from "../components/UI/Buttons/Button";
import TrainingTestimonials from "../components/Sliders/TrainingTestimonialsSlider";
import Card from "../components/UI/Cards/Card";
import TrainingAccordion from "../components/UI/Accordions/TrainingAccordion";

import heroImage from "/public/images/hero/rso-hero_google-marketing-platform.png";

const GoogleMarketingPlatformTraining = () => {
  return (
    <Fragment>
      <Head>
        <title>Google Marketing Platform Virtual Training - RSO</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Hero
        image={heroImage}
        alt=""
        anchor="#cards"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Google Marketing Platform</b> <br />
          Virtual Training
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
            paddingBottom: "30px",
          }}
        >
          Competitive Pricing | Flexible Scheduling | Expert-Led Sessions
        </h2>
        <div
          className="col-2-hero"
          style={{ gridAutoRows: "auto" }}
        >
          <Button
            color="orange"
            link="#contact"
          >
            Register Now
          </Button>
          <Button
            color="blue"
            link="/digital-marketing-consultation/"
          >
            Get A Quote
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            The <b>Google Marketing Platform Training Course</b> is an
            interactive e-learning program designed to help you understand and
            utilize the full suite of tools available in{" "}
            <b>Google Marketing Platform</b>. Upon completion, you will be able
            to <b>improve your digital strategy</b> and{" "}
            <b>meet your online business goals</b>.
          </h2>
        </div>
      </section>
      <section id="cards">
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_platform-training.png"
              alt=""
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What to Expect</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              Google Marketing Platform combines{" "}
              <b>DoubleClick Digital Marketing</b>
              and the <b>Google Analytics 360 Suite</b> together for an
              all-inclusive platform that includes:
            </h2>
            <p className="sub-intro-details">
              Google Ads | Google Analytics | Google Tag Manager | Google Search
              Console | Google Optimize | Data Studio
            </p>
            <p className="sub-intro-details">
              Attendees will have the opportunity to work in their own accounts
              or example accounts, in order to gain the experience and feedback
              needed to fully grasp important concepts and skills. Real
              application and practice are the main enablers to becoming
              proficient. Attendees will leave with an understanding of how to
              use the tools in Google Marketing Platform to collaborate, share
              insights, and better understand their customers.
            </p>
            <p className="sub-intro-details">
              Google Ads and Analytics certification information will be
              provided and discussed. Attendees will be able to take and pass
              those certifications after participating in this virtual training.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container col-2">
          <div>
            <div
              className="container center"
              style={{ paddingBottom: "30px" }}
            >
              <SectionLabel blue>Learn How To</SectionLabel>
            </div>
            <Card>
              <ul
                style={{
                  textAlign: "left",
                  maxWidth: "600px",
                  margin: "0 auto",
                  padding: "20px",
                }}
              >
                <li>
                  Incorporate Google Analytics into Your Current Marketing
                  Efforts
                </li>
                <li>Set Up an Analytics Account and Profile</li>
                <li>Measure Conversions</li>
                <li>Understand Audience Behavior</li>
                <li>Calculate Revenue and ROI</li>
                <li>
                  Understand Data Points and Their Impact on Your Business
                </li>
                <li>Learn the Value of Testing Variables</li>
                <li>Interpret Visitor Behavior to Your Website</li>
                <li>Identify Various Segments Visiting Your Website</li>
                <li>Analyze Keyword Data</li>
              </ul>
            </Card>
          </div>
          <div>
            <div
              className="center"
              style={{ paddingBottom: "30px" }}
            >
              <SectionLabel purple>Testimonials</SectionLabel>
            </div>
            <div>
              <TrainingTestimonials />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container center"
          style={{ paddingBottom: "30px" }}
        >
          <SectionLabel green>About The Course</SectionLabel>
        </div>
        <div className="container short">
          <TrainingAccordion />
        </div>
      </section>
      <TrainingContact title="Register For The Course" />
    </Fragment>
  );
};

export default GoogleMarketingPlatformTraining;
