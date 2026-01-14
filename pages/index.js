import { Fragment } from "react";

import Head from "next/head";
import Image from "next/legacy/image";

import Button from "../components/UI/Buttons/Button";
import Hero from "../components/heroSection/heroSection";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import ServiceCard from "../components/UI/Cards/ServiceCard";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactSection from "../components/Contact/ContactSection";

import heroImage from "../public/images/hero/digital-marketing-agency.png";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Full Service Digital Marketing Agency - RSO</title>
        <meta
          name="description"
          content="RSO is a full-service digital marketing agency in San Francisco, offering SEO, PPC, Social Media, Web Design and Analytics. Call 415-992-3830."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Digital Marketing Agency Graphic"
        anchor="/services/#cards"
      >
        <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "0" }}>
          <b>20 Years of Helping Customers Find You Online</b>
        </h1>
        <p
          className="sub-intro-details"
          style={{
            marginTop: "0",
            marginBottom: "2rem",
            color: "#fff",
            fontSize: "1.5rem",
            maxWidth: "800px",
          }}
        >
          Two decades of helping brands stay visible, competitive, and
          profitable in a constantly evolving digital world.
        </p>
        <div
          className="col-3-hero"
          style={{ gridAutoRows: "auto" }}
        >
          <Button
            color="orange"
            className="cta cta-hero"
            link="/services/seo-services/"
          >
            Search Engine Optimization
          </Button>
          <Button
            color="red"
            className="cta cta-hero"
            link="/services/manage-pay-per-click/"
          >
            Paid Advertising
          </Button>
          <Button
            color="blue"
            className="cta cta-hero"
            link="/services/social-media-optimization/"
          >
            Social Media Optimization
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            Over the past <b>20 years</b>, we’ve watched digital behavior
            evolve—and
            <b>we’ve evolved with it</b>. Today, customers research, decide, and
            purchase online <b>more than ever before</b>. We help you show up in
            the right places to{" "}
            <b>
              build awareness, nurture relationships, and convert demand into
              revenue
            </b>
            .
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso-success.png"
              alt="rso success"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>How Do You Measure Success?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              The <b>success</b> of your <b>digital marketing</b> is all about
              the <b>data</b> and the <b>spend</b>.
            </h2>
            <p className="sub-intro-details">
              To justify marketing expenses, you need the numbers to prove
              what&apos;s working - and what&apos;s not. We are certified in
              Google Ads and Google Analytics, and our services are supported by
              the best in the business.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            We offer a <b>full range</b> of data-driven <b>digital marketing</b>{" "}
            services:
          </h2>
        </div>
        <div className="col-3 unset full-grid container center">
          <ServiceCard
            link="/services/seo-services/"
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
            title="Search Engine Optimization"
            description="Grow your website’s organic search results, drive more traffic to your website and generate leads."
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
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Paid Search Advertising"
            description="Boost your brand awareness, sales, and revenue."
            details={
              <ul>
                <li>Strategy-Campaign Alignment</li>
                <li>Keyword Bidding & Analysis</li>
                <li>Creative Ad Content</li>
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
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Social Media Optimization"
            description="Build your brand awareness, grow your audience and increase engagement through organic or paid content."
            details={
              <ul>
                <li>Platform Selections</li>
                <li>Content Strategy & Creation</li>
                <li>Scheduling & Interaction</li>
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
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Web Analytics Consultation"
            description="Understand your website visitors and spend
            your budget more effectively."
            details={
              <ul>
                <li>Data-Driven Marketing</li>
                <li>Audience & Landing Page Analysis</li>
                <li>Channel User Behavior Analysis</li>
                <li>Conversion & Attribution Modeling</li>
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
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Web Design & Development"
            description="Offer an engaging experience for your website visitors with modern web design using the latest technology and best practices."
            details={
              <ul>
                <li>Optimized Content</li>
                <li>Ongoing Maintenance</li>
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
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
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
        </div>
        <div className="container center">
          <h2 className="sub-headline">
            Take a look at our <b>complete list</b> of digital marketing
            services.
          </h2>
          <Button
            className="cta"
            link="/services/"
          >
            SEE ALL SERVICES
          </Button>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel purple>Who We&apos;ve Worked For</SectionLabel>
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
      <Testimonials />
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you have regarding{" "}
            <b>projects or estimates</b>, or request any other{" "}
            <b>information</b> you need.
          </h2>
        }
      />
    </Fragment>
  );
};

export default Home;
