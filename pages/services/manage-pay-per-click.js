import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";
import PPCSlider from "../../components/Sliders/PPCSlider";

import heroImage from "../../public/images/hero/rso-hero_ppc.png";

const ManagePayPerClick = () => {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <Hero image={heroImage} alt="Paid Search Graphic" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          Certified Seach Engine
          <br /> <span style={{ fontWeight: "400" }}>Marketing Services</span>
        </h1>
        <p
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Boost brand awareness, leads, and revenue with best-in-class paid
          search management.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button link="/digital-marketing-consultation/">
            Free Consultation
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <p className="intro sub-headline">
            Our <b>search engine marketing services</b> will help you{" "}
            <b>pay less per click </b> and get <b>more for your dollars</b>.
          </p>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <PPCSlider />
          </div>
          <div className="sub-intro">
            <SectionLabel red>Why Paid Search Management?</SectionLabel>
            <p
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              Extending the <b>reach</b> and <b>visibility</b> of your ads
              through <b>Google</b>, <b>Facebook</b>, <b>LinkedIn</b> or any
              other pertinent platform is only one part of{" "}
              <b>paid search management</b>.
            </p>
            <p className="sub-intro-details">
              A successful campaign requires more than choosing a few keywords
              and writing a few ads. It demands consistent paid search
              management to measure what’s most effective and how to make the
              most of your budget while boosting conversions and conversion
              rates.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <p className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            Our approach to <b>paid search advertising</b> and{" "}
            <b>management services</b> is in line with{" "}
            <b>Google&apos;s best practices</b> and all of our{" "}
            <b>search engine marketing specialists</b> are{" "}
            <b>Google Ads certified</b>.
          </p>
        </div>
        <div className="col-3 single-row unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/ppc/card-1.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Consider these important questions:"
            details={
              <ul>
                <li>
                  Are you getting the most out of your budget in terms of
                  conversions?{" "}
                </li>
                <li>
                  Is your website (or landing pages) contributing to
                  conversions?{" "}
                </li>
                <li>
                  Can you improve search engine positioning without increasing
                  your budget?
                </li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/ppc/card-2.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Our initial analysis includes:"
            details={
              <ul>
                <li>Reviewing your business needs, budget, and goals</li>
                <li>
                  Analyzing existing ad copy, keywords, placements and landing
                  pages
                </li>
                <li>
                  Proposing and strategy that will align with your business
                  goals
                </li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/ppc/card-3.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Our ongoing management includes: "
            details={
              <ul>
                <li>Improving business goals</li>
                <li>Recommending new opportunities for expansion</li>
                <li>Building out new campaigns to reach new audiences</li>
              </ul>
            }
          />
        </div>
      </section>
      <ContactSection
        contactHeader={
          <p
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have about improving
            your <b>paid search advertising</b>.
          </p>
        }
      />
    </Fragment>
  );
};

export default ManagePayPerClick;
