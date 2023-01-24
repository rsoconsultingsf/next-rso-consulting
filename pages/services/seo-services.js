import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_seo.png";

const SEOServices = () => {
  return (
    <Fragment>
      <Head>
        <title>Professional Search Engine Optimization Agency - RSO</title>
        <meta
          name="description"
          content="Award-winning digital marketing agency providing SEO services. Our specialists design customized strategies to help achieve success via organic search."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Digital Marketing Agency Graphic"
        anchor="#cards"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Award Winning</b>
          <br /> San Francisco SEO Company
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
          }}
        >
          Leverage our proven expertise in organic search and content strategy
          to help your customers find you online
        </h2>
        <div style={{ textAlign: "center" }}>
          <Button anchor="contact">Free Consultation</Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            Your <b>future customers</b> are searching online for <b>answers</b>
            , <b>recommendations</b>, <b>reviews</b>, and <b>solutions</b> — all
            on different devices. Our <b>SEO methodology</b> helps your content{" "}
            <b>rank for specific search intent</b>, so you can{" "}
            <b>get in front of customers</b> at <b>every opportunity</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/san-francisco-seo-services.png"
              alt="San Francisco SEO Services Methodology"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="sub-intro">
            <SectionLabel red>What is the value of SEO services?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>On-Page</b> + <b>Off-Page</b>
            </h2>
            <p className="sub-intro-details">
              It takes two to SEO: on-page and off-page. We follow a specific
              methodology to strengthen your website — as well as leverage the
              authority and relevance of third-party websites — to improve your
              organic search rankings and increase website traffic.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            Our <b>SEO services</b> help you build a{" "}
            <b>powerful, fully-integrated strategy</b> for <b>organic search</b>
            .
          </h2>
        </div>
        <div className="col-3 single-row unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/seo.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="On-page Optimization"
            description="The first step in our SEO strategy, on-page optimization 
            ensures all elements on the pages of your website are 
            optimized for organic search. We provide on-page 
            optimizations to help search engines better understand 
            what is on the page and how to rank it."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/psa.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            title="Off-page Optimization"
            description="Off-page SEO is the optimization happening off the page and, 
            in fact, happening off your site entirely. Leveraging the 
            relevance and authority of third-party websites, we can
            help you establish reliable linking that builds credibility 
            for your own website in organic search."
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
                  height: "auto"
                }} />
            }
            title="Technical Audit"
            description="The technical audit process ensures your website is 
            following the best practices of search optimization by 
            analyzing various technical aspects. Our SEO team 
            provides a complete analysis of all the factors that 
            determine your site’s visibility in search engines."
          />
        </div>
      </section>
      <section>
        <div className="container center">
          <h2 className="sub-headline">
            <b>Recognized San Francisco SEO</b>
          </h2>
          <iframe
            title="Clutch Widget"
            id="iframe-0.7673761388712543"
            frameBorder="0"
            height="138px"
            scrolling="no"
            src="https://widget.clutch.co/widgets/get/3?ref_domain=www.rso-consulting.com&amp;uid=21061"
          ></iframe>
          <h2 className="sub-headline">
            <b>Clutch Top SEO Consultant</b>
          </h2>
          <p className="sub-intro-details" style={{ maxWidth: "850px" }}>
            <a href="https://clutch.co/" target="_blank" rel="noreferrer">
              Clutch.co
            </a>{" "}
            is the leading review site for firms nationwide. With 98,000+
            reviews from real customers, it’s a reliable source for making solid
            business decisions. RSO is proud to have multiple Clutch awards at
            our company.
          </p>
        </div>
      </section>
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> regarding how <b>RSO</b> can
            help <b>improve</b> your <b>SEO strategy</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default SEOServices;
