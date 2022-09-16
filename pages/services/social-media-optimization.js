import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/rso-hero_smo.png";

const SocialMediaOptimization = () => {
  return (
    <Fragment>
      <Head>
        <title>Leaders in Experienced Social Media Marketing Consulting</title>
        <meta
          name="description"
          content="Social Media Optimization has become more important than ever. To keep your business growing,  RSO offers trusted social media marketing consulting expertise."
        />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Social Media Optimization Services</b>
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
          Build your brand awareness, grow your audience and increase engagement
          through organic or paid content. Start from scratch or elevate your
          social media presence with a campaign.
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
            Whether you are focusing on <b>building a social media presence</b>{" "}
            or creating a <b>social media strategic plan</b>, RSO’s{" "}
            <b>social media optimization services</b> can put you on the road to
            success.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image src="/images/rso_smo.png" alt="" width={705} height={461} />
          </div>
          <div className="sub-intro">
            <SectionLabel red>Successful Social Media</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>Social media</b> has provided multiple platforms on which
              businesses can <b>brand</b>, <b>advertise</b> and{" "}
              <b>ingratiate</b> themselves with their audience all at once,
              while also <b>seeing what competitors are doing</b>.
            </h2>
            <p className="sub-intro-details">
              The heart – and greatest challenge – of social media marketing and
              building a social media presence is finding unique ways to connect
              with your customers and provide content they want to engage with.
            </p>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            <b>RSO</b> can help you meet your <b>social media goals</b> in{" "}
            <b>four simple steps</b>:
          </h2>
        </div>
        <div
          className="col-2 unset container center"
          style={{ maxWidth: "1000px" }}
        >
          <ServiceCard
            icon={
              <Image
                src="/images/smo/card-1.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Platform Selection"
            description="The first step to successful social media marketing is understanding your audience and knowing where to reach them."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/smo/card-2.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Content Strategy & Creation"
            description="Whether it’s brand awareness or product sales, your social media marketing goals are key to building a successful content strategy. Our goal is to post with intent while still keeping the content on brand with your business."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/smo/smo.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Schedule & Managing Engagement"
            description="To ensure timely posting, the approved content will be scheduled for publishing through our social media management platform. In addition to managing content, we are here to help manage engagement. Social media encourages two-way communication, so it’s important to stay connected and responsive."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/smo/wac.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Analytics & Reporting"
            description="Last, but certainly not least, is measuring the social media metrics. This vital step allows us to see what is working well and what can be improved. From here we will analyze, adjust and continue to monitor."
          />
        </div>
      </section>
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "1200px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have regarding how{" "}
            <b>RSO</b> can help you in building a <b>social media presence</b>{" "}
            or creating a <b>social media strategic plan</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default SocialMediaOptimization;
