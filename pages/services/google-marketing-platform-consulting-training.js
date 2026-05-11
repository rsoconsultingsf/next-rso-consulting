import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import TrainingContact from "../../components/Contact/TrainingContact";
import Button from "../../components/UI/Buttons/Button";
import TrainingTestimonials from "../../components/Sliders/TrainingTestimonialsSlider";

import heroImage from "../../assets/images/hero/rso-hero_google-marketing-platform.png";

const GoogleMarketingPlatformConsultingTraining = () => {
  return (
    <Fragment>
      <Head>
        <title>Google Marketing Platform Consulting - GA4 Experts - RSO</title>
        <meta
          name="description"
          content="Expert Google marketing platform consulting and Google Analytics consulting services to help you improve tracking, reporting, and marketing performance."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Google Marketing Platform Consulting & Training"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Google Marketing Platform</b> <br />
          Consulting &amp; Training
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 30px auto",
          }}
        >
          Training shouldn&apos;t be theoretical — it should drive results.
        </h2>
        <div
          className="col-2-hero"
          style={{ gridAutoRows: "auto" }}
        >
          <Button
            color="orange"
            link="#contact"
          >
            Free Consultation
          </Button>
          <Button
            color="blue"
            link="#contact"
          >
            Contact Us
          </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            Our <b>Google marketing platform consulting</b> and{" "}
            <b>Google Analytics consulting services</b> help your team turn
            fragmented data into clear, actionable insights.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "1000px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            From GA4 setup to advanced reporting, we provide hands-on support
            tailored to your business, ensuring your tools are configured
            correctly and your team knows how to use them with confidence.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="cards">
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_platform-training.png"
              alt="Google Marketing Platform Consulting"
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What to Expect</SectionLabel>
            <h2
              className="sub-headline"
              style={{
                maxWidth: "515px",
                margin: "0 auto 20px auto",
                lineHeight: "1.2",
              }}
            >
              Hands-on consulting designed to deliver{" "}
              <b>real, measurable outcomes</b>.
            </h2>
            <ul
              className="sub-intro-details"
              style={{
                textAlign: "left",
                maxWidth: "515px",
                margin: "20px auto",
                lineHeight: "2",
              }}
            >
              <li>
                Tailored consulting aligned with your business goals and tech
                stack
              </li>
              <li>
                Hands-on working sessions using your real data and accounts
              </li>
              <li>
                Strategic guidance on tracking, reporting, and performance
                measurement
              </li>
              <li>
                Flexible engagement options — from one-time workshops to ongoing
                support
              </li>
              <li>
                Clear, actionable recommendations your team can implement
                immediately
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section>
        <div className="container center">
          <SectionLabel blue>What You&apos;ll Learn</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            Build the skills your team needs to{" "}
            <b>own your data with confidence</b>.
          </h2>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "600px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>How to properly set up and configure Google Analytics (GA4)</li>
            <li>
              Best practices for Google Tag Manager implementation and tracking
            </li>
            <li>How to build meaningful dashboards in Looker Studio</li>
            <li>How to track conversions and understand customer journeys</li>
            <li>How to turn analytics data into marketing decisions</li>
            <li>
              How to optimize performance across channels using data insights
            </li>
          </ul>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section>
        <div className="container center">
          <SectionLabel purple>Who This Is For</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            Our <b>Google marketing platform consulting</b> and{" "}
            <b>Google Analytics consulting services</b> are designed for teams
            that need clarity, accuracy, and confidence in their data.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "0 auto 30px auto",
              fontSize: "1.1rem",
            }}
          >
            <b>This is a good fit if you are:</b>
          </p>
        </div>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div>
              <h3
                className="sub-headline"
                style={{ fontSize: "1.1rem" }}
              >
                <b>In-house marketing teams</b>
              </h3>
              <p className="sub-intro-details">
                Struggling to get clear insights from GA4 or unsure if your
                tracking is set up correctly
              </p>
            </div>
            <div>
              <h3
                className="sub-headline"
                style={{ fontSize: "1.1rem" }}
              >
                <b>Growing companies</b>
              </h3>
              <p className="sub-intro-details">
                That need reliable data to guide marketing spend and performance
                decisions
              </p>
            </div>
            <div>
              <h3
                className="sub-headline"
                style={{ fontSize: "1.1rem" }}
              >
                <b>Enterprise organizations</b>
              </h3>
              <p className="sub-intro-details">
                Looking to standardize reporting, improve data accuracy, and
                align teams around KPIs
              </p>
            </div>
            <div>
              <h3
                className="sub-headline"
                style={{ fontSize: "1.1rem" }}
              >
                <b>Teams migrating to GA4</b>
              </h3>
              <p className="sub-intro-details">
                And need help navigating setup, configuration, and reporting
                changes
              </p>
            </div>
            <div>
              <h3
                className="sub-headline"
                style={{ fontSize: "1.1rem" }}
              >
                <b>Marketing leaders</b>
              </h3>
              <p className="sub-intro-details">
                Who need clear dashboards and actionable insights — not just raw
                data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section>
        <div className="container center">
          <SectionLabel green>Client Results</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            We don&apos;t just configure tools — we help teams actually{" "}
            <b>use their data</b> to make <b>better decisions</b>.
          </h2>
        </div>
        <div className="container center">
          <TrainingTestimonials />
        </div>
      </section>

      {/* How We Help Section */}
      <section>
        <div className="container center">
          <SectionLabel teal>How We Help</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            We go <b>beyond basic training</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            Our approach combines Google marketing platform consulting with
            practical team enablement — so you&apos;re not just learning tools,
            you&apos;re improving how your organization uses data to make
            decisions.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            Whether you need help troubleshooting GA4, refining your tracking
            strategy, or building executive-level reporting, we meet your team
            where they are and help you move forward faster.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
              fontSize: "1.1rem",
            }}
          >
            <b>Ready to get more from your data?</b>
          </p>
        </div>
      </section>

      <TrainingContact
        title="Get In Touch"
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Let&apos;s discuss how our{" "}
            <b>Google marketing platform consulting</b> can help your team gain{" "}
            <b>clarity and confidence</b> in your data.
          </h2>
        }
      />
    </Fragment>
  );
};

export default GoogleMarketingPlatformConsultingTraining;
