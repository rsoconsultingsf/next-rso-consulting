import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_web-analytics-consulting.png";

const WebAnalytricsConsultation = () => {
  return (
    <Fragment>
      <Head>
        <title>Web Analytics Consultancy & Data Insights - RSO</title>
        <meta
          name="description"
          content="Do you want to increase your website traffic? RSO, a web analytics consultancy, uses tech-forward solutions to you understand your users & propel your online success."
        />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Reliable</b> <br />
          Web Analytics Services
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          Discover customer insights with in-depth digital marketing and website
          analytics
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button anchor="contact">Free Consultation</Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            Our <b>web analytics services</b> give our clients an easy way to{" "}
            <b>understand their website’s behavior</b> and <b>gain insight</b>{" "}
            into the <b>performance</b> and <b>problem areas</b> to{" "}
            <b>maximize their goals</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_website-analytics.png"
              alt=""
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What are your visitors doing?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>Web analytics</b> revolves around the practice of{" "}
              <b>gathering</b>, <b>evaluating</b>, and{" "}
              <b>reporting relevant website data</b>. This data lends insight
              into <b>user behavior</b> through helpful metrics and reveals how
              well your <b>digital marketing campaigns</b> and <b>web pages</b>{" "}
              are performing.
            </h2>
            <p className="sub-intro-details">
              Executing and managing digital marketing campaigns can be
              challenging enough. But understanding how the campaign traffic is
              performing is key to making smarter decisions about how to spend
              your marketing dollars as well as improving your website’s
              performance.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>Data-Driven Marketing</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            <b>Data</b> is a valuable commodity for{" "}
            <b>improving website performance</b>. Whether your site is{" "}
            <b>lead generation</b> or <b>e-commerce</b>, our methodology will{" "}
            <b>leverage the appropriate tools</b> to assist you in{" "}
            <b>achieving your objectives</b>.
          </h2>
        </div>
        <div className="col-3 single-row unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/analytics/card-1.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Configuration:"
            details={
              <ul>
                <li>Defining KPIs and engagement metrics</li>
                <li>Attribution modeling</li>
                <li>Enabling the full marketing funnel</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/analytics/card-2.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Analysis:"
            details={
              <ul>
                <li>
                  Technical issues (ex. page load) that impact performance
                </li>
                <li>Segmenting and filtering key data points </li>
                <li>A/B Testing (pages, ad copy, subject lines)</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/analytics/card-3.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Management:"
            details={
              <ul>
                <li>GA4 transition</li>
                <li>Implementing/managing tags/triggers via GTM</li>
                <li>Event tracking</li>
              </ul>
            }
          />
        </div>
      </section>
      <ContactSection
        title="Free Consultation"
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have about improving
            your <b>website&apos;s performance</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default WebAnalytricsConsultation;
