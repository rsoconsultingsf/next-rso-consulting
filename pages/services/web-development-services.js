import React, { Fragment } from "react";

import Head from "next/head";
import Image from "next/image";

import Button from "../../components/UI/Buttons/Button";
import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import WebsiteCard from "../../components/UI/Cards/WebsiteCard";
import ContactSection from "../../components/Contact/ContactSection";

import heroImage from "../../public/images/hero/rso-hero_web-design.png";

const WebDevelopmentServices = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Professional Web Development Services with Over 30 Years Experience -
          RSO
        </title>
        <meta
          name="description"
          content="RSO provides professional custom web development services. Over 30 years of experience in designing and developing websites, web portals, and more."
        />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Professional Web Design</b> <br />& Development Services
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
          Strengthen Your Website With Proven Experts
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
            <b>RSO</b> has partnered with <b>Alkalyne Solutions</b> for both{" "}
            <b>ground up builds</b> and <b>site rebuilds</b> using the{" "}
            <b>latest technology</b> and <b>best practices</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso-website-development.png"
              alt="rso website development"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="sub-intro">
            <SectionLabel red>Delight Your Customers</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              Your website’s <b>User Experience (UX)</b> is crucial when it
              comes to <b>conversions</b> and creating <b>return visitors</b>.
            </h2>
            <p className="sub-intro-details">
              Creating the best experience for your visitors, whether they be
              returning or new, is just as important as getting them to your
              site in the first place. Our web design and development services
              complement our digital marketing services and take into account
              the latest in technology, trends and web standards in order to
              ensure an engaging experience.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            We offer a <b>full range</b> of various{" "}
            <b>web design and development</b> services:
          </h2>
        </div>
        <div className="col-3 single-row unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/development/website-builds.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Full Website Builds"
            details={
              <ul>
                <li>Platform Recommendations</li>
                <li>eCommerce Integration</li>
                <li>Content Updates</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/development/web-hosting.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Web Hosting:"
            details={
              <ul>
                <li>Hosting Recommendations</li>
                <li>Site Migration</li>
                <li>Performance Monitoring</li>
              </ul>
            }
          />
          <ServiceCard
            icon={
              <Image
                src="/images/development/website-maintenance.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Maintenance/Management:"
            details={
              <ul>
                <li>Troubleshooting Errors</li>
                <li>Performance Monitoring</li>
                <li>Theme & Plugin Maintenance</li>
              </ul>
            }
          />
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel purple>Who We&apos;ve Worked For</SectionLabel>
          <h2 className="sub-headline">
            Our <b>satisfied clients</b> come from <b>various industries</b>.
          </h2>
          <div className="col-3 unset full-grid container center">
            <WebsiteCard
              image={
                <Image
                  src="/images/development/alsco.png"
                  alt="Alsco website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="Alsco"
              link="https://alsco.com/"
            />
            <WebsiteCard
              image={
                <Image
                  src="/images/development/ama.png"
                  alt="The Ama Foundation website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="Ama Foundation"
              link="https://ama-foundation.org/"
            />
            <WebsiteCard
              image={
                <Image
                  src="/images/development/hro.png"
                  alt="HRO Resources website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="HRO Resources"
              link="https://hroresources.com/"
            />
            <WebsiteCard
              image={
                <Image
                  src="/images/development/peg.png"
                  alt="Paul Ekman Group website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="Paul Ekman Group"
              link="https://www.paulekman.com/"
            />
            <WebsiteCard
              image={
                <Image
                  src="/images/development/vfg.png"
                  alt="Valley Fig Growers website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="Valley Fig Growers"
              link="https://valleyfig.com/"
            />
            <WebsiteCard
              image={
                <Image
                  src="/images/development/alpec.png"
                  alt="Alpec website"
                  width={454}
                  height={562}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              }
              title="Alpec"
              link="https://www.alpec.com/"
            />
          </div>
        </div>
      </section>
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have about{" "}
            <b>improving your website</b> .
          </h2>
        }
      />
    </Fragment>
  );
};

export default WebDevelopmentServices;
