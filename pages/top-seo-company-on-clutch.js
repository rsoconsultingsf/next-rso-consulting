import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const CalendlyInlineWidget = dynamic(() => import("../components/CalendlyInlineWidget"), { ssr: false });
import Head from "next/head";
import Image from "next/legacy/image";

import Hero from "../components/heroSection/heroSectionMenuOnly";
import Testimonials from "../components/Testimonials/Testimonials";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import Button from "../components/UI/Buttons/Button";

const TopSEOCompanyOnClutch = () => {
  return (
    <Fragment>
      <Head>
        <title>Top SEO Company on Clutch | RSO Consulting</title>
        <meta
          name="description"
          content="RSO Consulting is recognized as a top SEO company on Clutch, delivering exceptional search engine optimization services to businesses."
        />
      </Head>
      <Hero />

      <section>
        <div className="col-2 unset container">
          <div className="sub-intro">
            <h1 className="sub-headline">
              We&apos;re one of the <b>most award-winning</b> SEO companies on
              Clutch.
            </h1>
            <p
              className="sub-intro-details"
              style={{ maxWidth: "100%", marginTop: "0" }}
            >
              Our track record of success and client satisfaction has earned us
              multiple awards on Clutch. As a certified Google partner with
              expertise in SEO, Google Ads, and Analytics, we consistently
              deliver measurable results that drive business growth.
            </p>
            <div style={{ paddingTop: "4rem", width: "100%" }}>
              <Button anchor="schedule">Book an initial consultation</Button>
            </div>
          </div>
          <div className="img-center">
            <Image
              src="/images/rso-clutch-awards.png"
              alt="rso clutch awards"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel red>Who We&apos;ve Worked For</SectionLabel>
          <h2 className="sub-headline">
            Our <b>satisfied clients</b> come from <b>various industries</b>.
          </h2>
          <div className="logo-grid-top">
            <div className="flex-center">
              <Image
                src="/images/logos/adobe.png"
                alt="Adobe logo"
                width={330}
                height={83}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/verizon-logo.svg"
                alt="verizon logo"
                width={283}
                height={65}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/coleman.png"
                alt="Coleman logo"
                width={300}
                height={98}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/discovery.png"
                alt="Discovery logo"
                width={340}
                height={70}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="logo-grid-bottom">
            <div className="flex-center">
              <Image
                src="/images/logos/malwarebytes-logo.svg"
                alt="Malwarebytes logo"
                width={300}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/hp.png"
                alt="HP logo"
                width={130}
                height={130}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/post.png"
                alt="Post logo"
                width={200}
                height={140}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/total_wine.png"
                alt="Total Wine logo"
                width={300}
                height={70}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/usf.png"
                alt="University of San Francisco logo"
                width={330}
                height={90}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-light"
        style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
      >
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <SectionLabel blue>Why Choose RSO Consulting</SectionLabel>
        </div>
        <div className="col-2 left-skew unset container">
          <div
            className="sub-intro"
            style={{ alignItems: "start" }}
          >
            <h2 className="sub-headline ">
              <b>
                What&apos;s the value of SEO if it doesn&apos;t drive real
                business growth?
              </b>
            </h2>
            <p
              className="sub-intro-details"
              style={{ maxWidth: "100%" }}
            >
              We&apos;re one of the highest-rated SEO agencies on Clutch, our
              industry&apos;s leading review platform. There&apos;s a reason for
              our exceptional ranking: we deliver results that others
              can&apos;t. Our unique approach to SEO combines technical
              expertise with strategic thinking, which is why our clients
              consistently choose us as their long-term partner.
            </p>
            <p
              className="sub-intro-details"
              style={{ maxWidth: "100%" }}
            >
              We help brands build strong digital presences that outperform
              their competitors, it&apos;s that straightforward. We achieve this
              through data-driven strategies and a results-focused approach that
              drives remarkable outcomes for our clients while ensuring
              sustainable, long-term growth.
            </p>
          </div>
          <div className="benefits-grid">
            <h2 className="benefits-headline sub-headline">
              <b>Why Partner With Us?</b>
            </h2>
            <ul className="benefits-list sub-intro-details">
              <li>We deliver measurable SEO results</li>
              <li>We maintain long-term client relationships</li>
              <li>We have an expert, dedicated team</li>
              <li>We focus on ROI-driven strategies</li>
              <li>We follow proven SEO methodologies</li>
              <li>We prioritize transparent communication</li>
              <li>We stay ahead of SEO trends</li>
              <li>We create industry-leading campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <section
        id="schedule"
        className="bg-light"
        style={{ paddingTop: "4rem", paddingBottom: "6rem" }}
      >
        <div className="container center">
          <SectionLabel orange>What&apos;s Next?</SectionLabel>
          <h2 className="sub-headline">
            <b>Speak with our SEO experts to transform your digital presence</b>
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "800px", margin: "2rem auto" }}
          >
            Now that you&apos;ve seen our track record, let&apos;s discuss how
            we can elevate your digital presence. Whether you&apos;re just
            starting with SEO or looking to enhance your existing strategy, we
            can help you achieve the sustainable growth and ROI you deserve.
          </p>
          <div style={{ marginTop: "3rem" }}>
            <CalendlyInlineWidget />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TopSEOCompanyOnClutch;
