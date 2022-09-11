import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_email-marketing.png";

const EmailMarketing = () => {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Targeted Email</b> <br />
          Marketing Solutions
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
          From strategy to execution
        </h2>
        <div style={{ textAlign: "center" }}>
          <Button link="/digital-marketing-consultation/">
            Free Consultation
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            A <b>customized strategy</b> to <b>connect with your audience</b>{" "}
            and <b>grow your business</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_email-marketing.png"
              alt=""
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>Marketing Through Email</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>Email</b> is a <b>fast and effective</b> way for businesses of
              all sizes to <b>stay in touch with customers</b>. But it also
              provides a <b>powerful platform</b> for marketing your{" "}
              <b>products and services</b> via targeted messages. By keeping
              your customers <b>informed and engaged</b>, email marketing can
              help you build <b>strong relationships</b> that lead to{" "}
              <b>long-term success</b>.
            </h2>
            <p className="sub-intro-details">
              RSO works with brands of all sizes and email service providers to
              deliver best-in-class quality service, production, and support.
              From developing targeted email lists to designing engaging
              campaigns, we can help you maximize the impact of your email
              marketing efforts.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            Creating campaigns that are <b>well designed</b> and{" "}
            <b>carefully targeted</b> to <b>grow your business</b>.
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
              />
            }
            title="Prioritize the opportunities that 
            drive revenue"
            details={
              <ul>
                <li>
                  Reactivation - targets your most engaged subscribers. In order
                  to improve engagement levels and maximize conversion rates.
                </li>
                <li>
                  Broadcast - develop a strategy for your emails to optimize
                  engagement.
                </li>
                <li>
                  Roadmap - identify customer behavior that indicates the
                  highest buying intent and use email triggers when they will
                  drive the most revenue.
                </li>
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
            title="Elevate your brand and drive conversion"
            details={
              <ul>
                <li>
                  Copywriting - provide email copy that is aimed at increasing
                  response rates.{" "}
                </li>
                <li>
                  Design - create email templates that are designed to optimize
                  conversions.{" "}
                </li>
                <li>
                  Quality Assurance - emails are tested for maximum
                  compatibility across devices and clients
                </li>
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
            title="RSO Full Service"
            details={
              <ul>
                <li>
                  Delivery - we’ll take on the day-to-day management of your
                  email marketing. Never forget to send another email.{" "}
                </li>
                <li>
                  Reporting - we’ll use performance metrics to guide your
                  strategy and improve performance.
                </li>
                <li>
                  Optimization - we’ll build an A/B testing roadmap and test
                  every aspect of your emails to increase your ROI.
                </li>
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
            <b>RSO</b> can help you improve your <b>email marketing</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default EmailMarketing;
