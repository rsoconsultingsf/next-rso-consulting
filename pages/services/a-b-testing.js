import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_a-b-testing.png";

const ABTesting = () => {
  return (
    <Fragment>
      <Head>
        <title>AB Testing Services & Conversion Rate Optimization - RSO</title>
        <meta
          name="description"
          content="RSO's AB testing methodology leverages best practices by testing UI/UX and other variations in order to improve your website behavior and conversion rates. "
        />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>A/B</b> <br />
          Testing
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
          Achieve better website results.
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
            Our <b>web analytics services</b> give our clients an easy way to
            understand their <b>website’s behavior</b> and <b>gain insight</b>{" "}
            into the performance and problem areas to{" "}
            <b>maximize their goals</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_ab-testing.png"
              alt=""
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What Is A/B Testing?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>A/B testing</b> is a method of comparing{" "}
              <b>different versions</b> of an online experience against each
              other to determine which one <b>performs better</b>.
            </h2>
            <p className="sub-intro-details">
              A/B testing is carried out by presenting each version to users at
              random and analyzing the results. This gives you an opportunity to
              learn what works and what doesn’t with respect to the user’s
              experience on your website.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center" style={{ paddingBottom: "30px" }}>
          <SectionLabel blue>How Can We Help?</SectionLabel>
        </div>
        <div className="col-2 short unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/analytics/card-1.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Methodology:"
            details={
              <ul>
                <li>
                  Identify landing pages with low conversion rates and/or low
                  engagement
                </li>
                <li>
                  Submit a hypothesis (i.e. Why / What are we going to test?)
                </li>
                <li>Build out variations</li>
                <li>Test and monitor results for a winner</li>
                <li>Implement test results</li>
                <li>Repeat process</li>
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
              />
            }
            title="Testing Options:"
            details={
              <ul>
                <li>A/B testing (i.e. A vs. B)</li>
                <li>Multivariate</li>
                <li>Redirect</li>
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
              />
            }
            title="Testing Opportunities:"
            details={
              <ul>
                <li>Layout & Design</li>
                <li>Call to Action & Messaging</li>
                <li>Content & Headlines</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/testing/ab-test-management.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Management:"
            details={
              <ul>
                <li>Implementing/managing via A/B Testing Platform</li>
                <li>Monitoring Variation Behavior</li>
                <li>Reporting/Implementing Results</li>
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
            Reach out with any <b>questions</b> you might have regarding how{" "}
            <b>RSO</b> can help you <b>A/B Test</b> your website.
          </h2>
        }
      />
    </Fragment>
  );
};

export default ABTesting;
