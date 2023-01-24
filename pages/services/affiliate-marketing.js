import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_affiliate-marketing.png";

const AffiliateMarketing = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    serviceType: "Affiliate Marketing Management Solutions",
    audience: {
      "@type": "Audience",
      audienceType: "Business Owners",
    },
    brand: "RSO Affiliate Marketing Management Solutions",
    category: "Digital Marketing",
    serviceOutput: "Increase brand awareness and grow your business",
    alternateName: "RSO Consulting Digital Marketing Agency",
    name: "Digital Marketing Company",
    description:
      "Looking to drive sales through affiliated marketing? RSO is a leading affiliate marketing agency that will help you launch, manage, and scale your program for success.",
    mainEntityOfPage:
      "https://www.rso-consulting.com/services/affiliate-marketing/",
  };

  return (
    <Fragment>
      <Head>
        <title>
          Leading Affiliate Marketing Agency to Improve Performance Based Sales
          - RSO
        </title>
        <meta
          name="description"
          content="Looking to drive sales through affiliated marketing? RSO is a leading affiliate marketing agency that will help you launch, manage, and scale your program for success."
        />

        {/* Open Graph */}
        <meta
          property="og:image"
          content="https://www.rso-consulting.com/images/rso_affiliate-marketing.png"
        />
        <meta
          property="og:title"
          content="Leading Affiliate Marketing Agency to Improve Performance Based Sales
          - RSO"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Looking to drive sales through affiliated marketing? RSO is a leading affiliate marketing agency that will help you launch, manage, and scale your program for success."
          key="ogdesc"
        />
        <meta
          property="og:site_name"
          content="RSO Consulting"
          key="ogsitename"
        />
        <meta
          property="og:url"
          content="https://www.rso-consulting.com/services/affiliate-marketing/"
          key="ogurl"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="rso_consulting" key="twhandle" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Affiliate Marketing</b> <br />
          Management Solutions
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
          A unique marketing channel with many benefits.
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
            <b>Your growth partners</b> - focused on{" "}
            <b>creating nurturing partnerships</b> that drive{" "}
            <b>exceptional and measurable outcomes</b> for our clients.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso_affiliate-marketing.png"
              alt=""
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What Is Affiliate Marketing?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>Affiliate marketing</b> is a referral program that gives{" "}
              <b>commissions</b> to those who successfully{" "}
              <b>refer potential clients</b> to your products or services. It is
              an effective way to <b>increase brand awareness</b> and{" "}
              <b>grow your business</b>.
            </h2>
            <p className="sub-intro-details">
              Affiliate marketing provides the opportunity for a profitable
              sales channel by allowing you to offer your products and services
              without the cost per impression or click. It is a unique
              competitive advantage in its own right.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>How Can We Help?</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            <b>Affiliate marketing</b> is an effective way to generate
            additional revenue for your business, but only if you do it right.
            We provide a <b>comprehensive affiliate management service</b> that
            takes care of all the hard work for you. From{" "}
            <b>setting up links and promotions</b> to working with your{" "}
            <b>affiliate account manager</b>. With our expert service, you can
            be sure that your affiliate marketing will be running{" "}
            <b>smoothly and efficiently</b>. Let us put our <b>experience</b>{" "}
            into action for you.
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
            title="Outreach"
            details={
              <ul>
                <li>
                  Identify potential affiliates that are a good fit for your
                  brand
                </li>
                <li>
                  Tailored recruitment to target the best partners for you
                </li>
                <li>
                  Build excitement around your brand and generate leads that
                  turn into successful long-term partners
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
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Affiliate Development"
            details={
              <ul>
                <li>Handle the activation and logistics to get started</li>
                <li>
                  Provide everything they need to promote your brand including
                  resources like image banners and text links, and more
                </li>
                <li>
                  Ensure your affiliate agreements uphold the industry’s gold
                  standard
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
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="End-to-End Management "
            details={
              <ul>
                <li>
                  Customize your software to get the most out of your investment
                </li>
                <li>
                  Ensure marketing budget is spend wisely to increase maximum
                  revenue
                </li>
                <li>
                  Analysis and ongoing optimization through offer development,
                  partner mix optimization, and messaging updates
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
            <b>RSO</b> can help you with <b>affiliate marketing</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default AffiliateMarketing;
