import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/fractional-cmo.png";

const FractionalCMOServices = () => {
  return (
    <Fragment>
      <Head>
        <title>Fractional CMO Services - RSO</title>
        <meta
          name="description"
          content="RSO Consulting's Fractional CMO services deliver executive-level marketing leadership focused on measurable business growth without the full-time overhead."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Fractional CMO Services"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Fractional CMO Services</b>
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
          Executive-Level Marketing Leadership. Without the Full-Time Overhead.
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
            Marketing execution without strategy creates <b>noise</b>.
            <br />
            Strategy without accountability creates <b>slide decks</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "1000px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            RSO Consulting&apos;s Fractional CMO services deliver
            executive-level marketing leadership focused on measurable business
            growth. We align marketing with revenue, oversee performance across
            channels, and ensure every dollar invested drives impact.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "1000px",
              textAlign: "center",
              margin: "20px auto",
              fontSize: "1.1rem",
            }}
          >
            <b>
              This is not outsourced task management. This is strategic
              direction with accountability.
            </b>
          </p>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/fractional-cmo-services.jpg"
              alt="Who Fractional CMO Services Are For"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>Who This Is For</SectionLabel>
            <h2
              className="sub-headline"
              style={{
                maxWidth: "515px",
                margin: "0 auto 20px auto",
                lineHeight: "1.2",
              }}
            >
              <b>Fractional CMO services</b> are designed for organizations
              that:
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
              <li>Are scaling but lack senior marketing leadership</li>
              <li>Have internal teams but need strategic direction</li>
              <li>Want marketing tied directly to revenue goals</li>
              <li>
                Are investing significantly in digital but not seeing
                predictable growth
              </li>
              <li>
                Need cross-functional alignment between marketing, sales, and
                leadership
              </li>
            </ul>
            <p
              className="sub-intro-details"
              style={{ maxWidth: "515px", margin: "20px auto" }}
            >
              <b>
                Ideal for growth-stage B2B companies, performance-driven
                organizations, and founder-led businesses entering their next
                phase.
              </b>
            </p>
          </div>
        </div>
      </section>

      {/* What We Can Do For You Section */}
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 10px auto" }}
          >
            Our approach to <b>fractional CMO services</b> is grounded in{" "}
            <b>data, not theory</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "850px",
              margin: "0 auto 30px auto",
              textAlign: "center",
            }}
          >
            Every strategic decision is informed by measurable performance
            insights. You don&apos;t get opinions. You get clarity.
          </p>
        </div>
        <div className="col-2 unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/seo.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Define Revenue-Aligned Strategy"
            details={
              <ul>
                <li>Establish annual and quarterly marketing roadmaps</li>
                <li>
                  Align marketing with revenue, pipeline, and growth targets
                </li>
                <li>Prioritize channels based on data and ROI</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/wac.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Lead Performance & Accountability"
            details={
              <ul>
                <li>Define KPIs that matter</li>
                <li>Build executive-level reporting dashboards</li>
                <li>Translate analytics into strategic decisions</li>
                <li>Cut what doesn&apos;t work. Scale what does.</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/smo.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Oversee Teams & Vendors"
            details={
              <ul>
                <li>Guide internal marketers</li>
                <li>Manage agency and channel partners</li>
                <li>Ensure execution aligns with strategy</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/competitive-representation.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Optimize Budget Allocation"
            details={
              <ul>
                <li>Evaluate channel performance</li>
                <li>Reallocate spend based on ROI</li>
                <li>
                  Improve CAC efficiency and marketing contribution to pipeline
                </li>
              </ul>
            }
          />
        </div>
      </section>

      {/* How RSO Is Different Section */}
      <section>
        <div className="container center">
          <SectionLabel purple>How RSO Is Different</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            Many &ldquo;fractional chief marketing officers&rdquo; are{" "}
            <b>tactical specialists</b> offering strategic language.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            RSO brings more than 20 years of hands-on, cross-channel marketing
            expertise — not just high-level guidance, but deep operational
            knowledge across:
          </p>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "500px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>Paid Media (Search, Social, Display)</li>
            <li>SEO &amp; Content Strategy</li>
            <li>Analytics &amp; Data Infrastructure</li>
            <li>Conversion Optimization</li>
            <li>Growth Forecasting</li>
          </ul>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            Our approach is grounded in data, not theory. Every strategic
            decision is informed by measurable performance insights.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto",
            }}
          >
            <b>You don&apos;t get opinions. You get clarity.</b>
          </p>
        </div>
      </section>

      {/* Is It Time Section */}
      <section>
        <div className="container center">
          <SectionLabel green>Is It Time for a Fractional CMO?</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            If your organization is <b>investing in marketing</b> but lacking{" "}
            <b>strategic clarity</b> — or if growth has <b>plateaued</b> — it
            may be time for executive-level leadership without the full-time
            cost.
          </h2>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "20px auto 30px auto",
            }}
          >
            Let&apos;s discuss whether this model is right for your stage of
            growth.
          </p>
        </div>
      </section>

      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Ready to explore whether a <b>Fractional CMO</b> is the right fit?{" "}
            <b>Schedule a strategy conversation</b> with our team.
          </h2>
        }
      />
    </Fragment>
  );
};

export default FractionalCMOServices;
