import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Button from "../../components/UI/Buttons/Button";
import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";

import heroImage from "../../public/images/hero/rso-hero_services.png";

const Services = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Digital marketing service for data-driven marketing solutions.
        </title>
        <meta
          name="description"
          content="RSO offers data-driven digital marketing solutions: SEO · Paid advertising · Social media marketing · Email marketing · Affiliate marketing · Web development "
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Digital Marketing Agency Graphic"
        anchor="#cards"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Dedicated To Digital Marketing</b>
          <br /> Top Notch Digital Marketing and Website Analytics Services
        </h1>
        <div className="col-3-hero" style={{ gridAutoRows: "auto" }}>
          {/* <Button color="orange" link="/services/seo-services/">
            Search Engine Optimization
          </Button>
          <Button color="red" link="/services/manage-pay-per-click/">
            Paid Advertising
          </Button>
          <Button color="blue" link="/services/social-media-optimization/">
            Social Media Optimization
          </Button>
          <Button color="green" link="/services/web-analytics-consultation/">
            Web Analytics Consulting
          </Button>
          <Button color="purple" link="/services/web-development-services/">
            Website Development
          </Button> */}
          <Button color="turq" link="/services/a-b-testing/">
            A/B Testing
          </Button>
          <Button color="dark-red" link="/services/email-marketing/">
            Email Marketing
          </Button>
          <Button color="teal" link="/services/affiliate-marketing/">
            Affiliate Marketing
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            We are an international <b>team of experts</b> each with a{" "}
            <b>unique set of skills</b> designed to{" "}
            <b>deliver professional service</b> based on today’s{" "}
            <b>best practices</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/services.png"
              alt="rso success"
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>We Get The Job Done!</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              We work across <b>multiple industries and verticals</b> including
              law, education, real estate, technology, retail and more. Our
              clients want to focus on what they do best and leave the{" "}
              <b>KPIs, conversions, and revenue</b> to us.
            </h2>
            <p className="sub-intro-details">
              All our digital marketing services include a customized strategy
              and personalized approach. We are closely aligned with Google’s
              best practices when it comes to SEO and Paid Search. We represent
              years of experience and are not afraid of embracing the data and
              sharing our recommendations and insights in order to improve your
              business goals.
            </p>
          </div>
        </div>
      </section>
      <section></section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            We offer a <b>full range</b> of data-driven <b>digital marketing</b>{" "}
            services:
          </h2>
        </div>
        <div className="col-3 short-service-grid unset container center">
          <ServiceCard
            link="/services/seo-services/"
            icon={
              <Image
                src="/images/service-icons/color/seo.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Search Engine Optimization"
            description="Drive more traffic to your website, generate leads, and grow your business."
            details={
              <ul>
                <li>Site Audits</li>
                <li>Keyword Research & Mapping</li>
                <li>Optimized Content Creation</li>
                <li>On-site & Off-site SEO</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/manage-pay-per-click/"
            icon={
              <Image
                src="/images/service-icons/color/psa.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Paid Search Advertising"
            description="Boost your brand awareness, sales, and revenue."
            details={
              <ul>
                <li>Strategy-Campaign Alignment</li>
                <li>Keyword Research & Analysis</li>
                <li>Campaign Bidding</li>
                <li>Budget Allocation & Adjustments</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/social-media-optimization/"
            icon={
              <Image
                src="/images/service-icons/color/smo.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Social Media Optimization"
            description="Build your brand awareness, expand online
            visibility, and improve your website's organic
            search results."
            details={
              <ul>
                <li>Platform Selections</li>
                <li>Content Strategy & Creation</li>
                <li>Scheduleing & Interaction</li>
                <li>Analysis & Reporting</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/web-analytics-consultation/"
            icon={
              <Image
                src="/images/service-icons/color/wac.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Web Analytics Consultation"
            description="Understand your website behavior and learn how 
            to convert your traffic more effectively."
            details={
              <ul>
                <li>User & Traffic Analysis</li>
                <li>Aligning Metrics and KPIs</li>
                <li>Landing Page Behavior</li>
                <li>Attribution Modeling</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/web-development-services/"
            icon={
              <Image
                src="/images/service-icons/color/wdd.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Web Design & Development"
            description="Offer an engaging experience for your 
            audience and customers leveraging web design
            and development best practices."
            details={
              <ul>
                <li>Optimized Content</li>
                <li>Maintenance</li>
                <li>UX Consulting</li>
                <li>Website Rebuilds</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/a-b-testing/"
            icon={
              <Image
                src="/images/service-icons/color/ab.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="A/B Testing"
            description="Optimize your website's engagement by testing 
            variants of webpages and measuring resulting
            conversion rates."
            details={
              <ul>
                <li>A/B Testing</li>
                <li>Multivariate Testing</li>
                <li>Personalization</li>
                <li>Campaign-specific Testing</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/email-marketing/"
            icon={
              <Image
                src="/images/services/email-marketing.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Email Marketing"
            description="Email delivery based on best practices that will 
            educate or sell your audience on the value of
            your brand, product or service."
            details={
              <ul>
                <li>Content Creation</li>
                <li>Targeted Segmented Messaging</li>
                <li>Subject Line Testing </li>
                <li>Analysis & Reporting</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/affiliate-marketing/"
            icon={
              <Image
                src="/images/services/affiliate-marketing.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Affiliate Marketing"
            description="Promote your product or service through partners 
            and maximize your ROI."
            details={
              <ul>
                <li>Content Creation</li>
                <li>Targeted Segmented Messaging</li>
                <li>Subject Line Testing </li>
                <li>Analysis & Reporting</li>
              </ul>
            }
          />
        </div>
      </section>
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you have regarding how{" "}
            <b>RSO</b> can help your company <b>improve</b> its overall{" "}
            <b>digital marketing strategy</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default Services;
