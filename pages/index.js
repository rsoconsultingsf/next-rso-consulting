import { Fragment } from "react";

import Head from "next/head";
import {
  organizationSchema,
  webSiteSchema,
  localBusinessSchema,
} from "../lib/schemas";
import Image from "next/legacy/image";

import Button from "../components/UI/Buttons/Button";
import Hero from "../components/heroSection/heroSection";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import ServiceCard from "../components/UI/Cards/ServiceCard";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactSection from "../components/Contact/ContactSection";

import heroImage from "../assets/images/hero/digital-marketing-agency.png";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>AI-Era Marketing Strategy & Consulting - RSO Consulting</title>
        <meta
          name="description"
          content="RSO is a senior-led marketing strategy firm helping brands navigate AI-driven search and discovery through project-based consulting or full-service management."
        />
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Digital Marketing Agency Graphic"
        anchor="/services/#cards"
      >
        <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "0" }}>
          <b>Senior Strategists for the AI Era of Marketing</b>
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
          AI is changing how customers search, decide, and buy. We help you stay
          ahead of it.
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
            RSO Consulting brings <b>senior-level marketing strategy</b> to
            every engagement. Whether you need a focused, project-based
            initiative or full-service, always-on management. We&apos;re not
            here to just execute a channel checklist. We&apos;re here to{" "}
            <b>think alongside you</b>, at the strategic level, on the{" "}
            <b>work that actually moves the business</b>.
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
            <SectionLabel red>
              How Do You Know What&apos;s Actually Working?
            </SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              Anyone can hand you a <b>dashboard</b>. The harder question is
              knowing <b>what the numbers mean</b> - and <b>what to do next</b>.
            </h2>
            <p className="sub-intro-details">
              That&apos;s the strategic layer most agencies skip. We bring
              senior judgment to the data, not just the data itself. We back
              that judgment with deep platform expertise and multiple industry
              certifications.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel blue>
            Strategy First. Execution Where It Counts
          </SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            We lead every engagement as <b>consultants</b> - scoping the{" "}
            <b>strategy</b> before touching a single channel.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "800px", margin: "0 auto 30px auto" }}
          >
            Whether it&apos;s a defined project or full-service, ongoing
            management, the work is led by senior people, and increasingly
            shaped by how AI is changing search and discovery.
          </p>
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
            title="SEO | Organic Growth Strategy"
            description="Senior-led strategy for visibility in an AI-driven search landscape."
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
            title="Paid Search Advertising Strategy"
            description="Strategic budget and channel decisions - not just campaign management."
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
            title="Social Media Optimization & Content Strategy"
            description="Building brand presence with intention, not just a posting calendar."
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
            title="Web Analytics Strategy & Consultation"
            description="Turning data into decisions, not just dashboards."
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
            description="Strategic UX consulting behind every rebuild."
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
            title="A/B Testing & Conversion Strategy"
            description="Testing frameworks designed around business goals, not just page tweaks."
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
            See how we <b>structure strategy</b> across every channel
          </h2>
          <Button
            className="cta"
            link="/services/"
          >
            EXPLORE OUR APPROACH
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
