import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/non-profits.png";

const NonprofitDigitalMarketingServices = () => {
  return (
    <Fragment>
      <Head>
        <title>Nonprofit Digital Marketing Services - RSO Consulting</title>
        <meta
          name="description"
          content="RSO Consulting provides pro bono marketing services and nonprofit digital marketing services to help organizations grow visibility, reach, and impact."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Nonprofit Digital Marketing Services"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Nonprofit Digital Marketing Services</b>
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 30px auto",
          }}
        >
          Giving Back: Supporting Nonprofits Through Digital Expertise
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Button anchor="contact">Free Consultation</Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            At RSO Consulting, <b>performance marketing</b> isn&apos;t just
            about driving ROI—it&apos;s about making an{" "}
            <b>impact where it matters most</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "1000px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            We&apos;re proud to support a select group of nonprofit
            organizations through pro bono digital marketing services, helping
            them expand their reach, increase visibility, and ultimately further
            their missions.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "1000px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            From managing Google Ad Grant accounts to strengthening SEO and
            website performance, we bring the same strategic discipline to
            nonprofit work as we do for our commercial clients—because
            meaningful causes deserve meaningful results.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section>
        <div className="container center">
          <SectionLabel red>What We Do</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            Our <b>pro bono marketing services</b> support focuses on the areas
            where nonprofits often need it most:
          </h2>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "500px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>Google Ad Grant management and optimization</li>
            <li>SEO strategy and implementation</li>
            <li>Website performance improvements</li>
            <li>Content strategy and visibility</li>
          </ul>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            <b>
              Nonprofits operate with limited resources. We help them punch
              above their weight.
            </b>
          </p>
        </div>
      </section>

      {/* Organizations We Support Section */}
      <section>
        <div className="container center">
          <SectionLabel blue>
            Organizations We&apos;re Proud to Support
          </SectionLabel>
        </div>
      </section>

      {/* Ama Foundation */}
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/non-profit/ama-logo.png"
              alt="Ama Foundation / Ama Ghar Logo"
              width={360}
              height={80}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <h3
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto 20px auto" }}
            >
              <b>Ama Foundation / Ama Ghar</b>
            </h3>
            <p className="sub-intro-details">
              A nonprofit dedicated to supporting vulnerable children in Nepal
              through its Ama Ghar home.
            </p>
            <p className="sub-intro-details">
              The organization provides food, shelter, healthcare, and education
              to children who have been orphaned, abandoned, or affected by
              poverty and trafficking. Its mission is simple but powerful: give
              every child the opportunity to grow into a self-sufficient adult.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Button
                target="https://www.ama-foundation.org"
                color="orange"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GiveLight Foundation */}
      <section>
        <div className="col-2 unset reverse-mobile container">
          <div className="sub-intro">
            <h3
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto 20px auto" }}
            >
              <b>GiveLight Foundation</b>
            </h3>
            <p className="sub-intro-details">
              A global nonprofit focused on building homes and futures for
              orphaned and at-risk children.
            </p>
            <p className="sub-intro-details">
              Operating across more than a dozen countries, GiveLight provides
              long-term care, education, and a stable, family-like environment
              to help children reach their full potential.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Button
                target="https://www.givelight.org"
                color="orange"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="img-center">
            <Image
              src="/images/non-profit/givelight-logo.jpg"
              alt="GiveLight Foundation Logo"
              width={380}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Sneaky Saves */}
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/non-profit/logo_sneaky-saves.png"
              alt="Sneaky Saves Logo"
              width={204}
              height={195}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <h3
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto 20px auto" }}
            >
              <b>Sneaky Saves</b>
            </h3>
            <p className="sub-intro-details">
              A nonprofit focused on financial literacy for underserved high
              school students.
            </p>
            <p className="sub-intro-details">
              Through engaging, real-world education, Sneaky Saves helps young
              people build essential skills in saving, investing, and financial
              decision-making—setting them up for long-term independence and
              stability.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Button
                target="https://www.sneakysaves.org"
                color="orange"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mare Blu */}
      <section>
        <div className="col-2 unset reverse-mobile container">
          <div className="sub-intro">
            <h3
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto 20px auto" }}
            >
              <b>Mare Blu</b>
            </h3>
            <p className="sub-intro-details">
              An environmental conservation nonprofit based in Costa Rica,
              dedicated to making oceans, rivers, and coastlines plastic free.
            </p>
            <p className="sub-intro-details">
              Through coastal cleanup expeditions, artificial reef projects, and
              an international volunteer program spanning more than 25
              countries, Mare Blu is driving real change for marine ecosystems
              along Costa Rica&apos;s Pacific coast.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Button
                target="https://www.mareblucr.org"
                color="orange"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="img-center">
            <Image
              src="/images/non-profit/Mareblu-logo.png"
              alt="Mare Blu Logo"
              width={600}
              height={166}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section>
        <div className="container center">
          <SectionLabel purple>Why It Matters</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            Nonprofits are solving real problems—<b>poverty</b>,{" "}
            <b>education gaps</b>, <b>financial inequality</b>—but{" "}
            <b>visibility</b> is often their biggest barrier.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "850px",
              margin: "0 auto 30px auto",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            <b>That&apos;s where we come in.</b>
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "850px",
              margin: "0 auto 20px auto",
              textAlign: "center",
            }}
          >
            By applying data-driven marketing strategies, we help these
            organizations:
          </p>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "500px",
              margin: "30px auto",
              fontSize: "1.1rem",
              lineHeight: "2",
            }}
          >
            <li>
              <b>Reach</b> more people
            </li>
            <li>
              <b>Attract</b> more donors
            </li>
            <li>
              <b>Increase</b> engagement
            </li>
            <li>
              <b>Scale</b> their impact
            </li>
          </ul>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "850px",
              margin: "30px auto 0 auto",
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            <b>
              Because great missions shouldn&apos;t be limited by digital
              performance.
            </b>
          </p>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section>
        <div className="container center">
          <SectionLabel green>Our Commitment</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            We believe businesses have a <b>responsibility</b> to contribute{" "}
            <b>beyond the bottom line</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            Supporting nonprofits isn&apos;t a side project for us—it&apos;s
            part of how we define success.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            If you&apos;re a nonprofit looking to improve your digital presence,
            or a business interested in partnering on meaningful initiatives,
            we&apos;d love to connect.
          </p>
        </div>
      </section>

      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Reach out to learn how <b>RSO Consulting</b> can help your{" "}
            <b>nonprofit</b> grow its <b>digital presence</b> and{" "}
            <b>further its mission</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default NonprofitDigitalMarketingServices;
