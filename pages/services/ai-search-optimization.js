import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import ServiceCard from "../../components/UI/Cards/ServiceCard";
import ContactSection from "../../components/Contact/ContactSection";
import Button from "../../components/UI/Buttons/Button";

import heroImage from "../../public/images/hero/ai-search-optimization.png";

const AISearchOptimization = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Search Optimization Services - RSO Consulting</title>
        <meta
          name="description"
          content="Position your brand for AI-driven discovery. RSO's AI Search Optimization framework helps improve how your brand appears in ChatGPT, Google AI Overviews, Perplexity, and other AI-generated responses."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="AI Search Optimization"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>AI Search Optimization</b>
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
          AI Visibility for the Next Generation of Search
        </h2>
        <div style={{ textAlign: "center" }}>
          <Button anchor="contact">Free Consultation</Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            AI systems like <b>ChatGPT</b>, <b>Google AI Overviews</b>,{" "}
            <b>Perplexity</b>, and <b>Microsoft Copilot</b> are rapidly changing
            how people discover companies and solutions. Instead of browsing
            lists of links, users increasingly rely on{" "}
            <b>AI-generated answers</b> that cite specific brands, sources, and
            expertise.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/ai-optimization/ai-search-optimization-framework.png"
              alt="AI Search Optimization Framework"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>The Opportunity</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto", lineHeight: "1.2" }}
            >
              <b>Position Your Brand</b> for <b>AI-Driven Discovery</b>
            </h2>
            <p className="sub-intro-details">
              RSO&apos;s AI Search Optimization framework helps organizations
              improve how they appear in AI-generated responses by strengthening
              topical authority, structuring knowledge for machine
              interpretation, and ensuring your brand is represented in the
              conversations that shape buying decisions.
            </p>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container center">
          <SectionLabel blue>AI Search Opportunity Analysis</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            We evaluate how <b>AI systems answer questions</b> within your
            category and how frequently <b>your brand appears</b> in those
            responses.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "850px", margin: "0 auto 30px auto" }}
          >
            This analysis identifies where AI systems currently source
            information and where opportunities exist to improve brand
            representation.
          </p>
        </div>
        <div className="col-2 unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/identify-prompts.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Prompt Categories"
            description="Identify categories of prompts AI systems respond to and analyze competitive citation patterns across AI platforms."
          />
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
            title="Coverage Analysis"
            description="Evaluate content and entity coverage gaps, identifying opportunities for brand inclusion in AI responses."
          />
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel purple>AI Platforms We Help Optimize For</SectionLabel>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "850px", margin: "20px auto" }}
          >
            AI discovery now occurs across multiple platforms. Our strategies
            help improve visibility across:
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              maxWidth: "800px",
              margin: "30px auto",
            }}
          >
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                <b>ChatGPT</b>
              </h3>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                <b>Google AI Overviews</b>
              </h3>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                <b>Perplexity</b>
              </h3>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                <b>Microsoft Copilot</b>
              </h3>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                <b>Emerging AI Assistants</b>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="sub-intro">
            <SectionLabel green>Topical Authority Development</SectionLabel>
            <h2
              className="sub-headline"
              style={{
                maxWidth: "515px",
                margin: "0 auto 20px auto",
                lineHeight: "1.2",
              }}
            >
              <b>Strengthen Your Information Ecosystem</b>
            </h2>
            <p className="sub-intro-details">
              AI systems prioritize sources that demonstrate expertise,
              structured knowledge, and credible references. We help strengthen
              your organization&apos;s information ecosystem and topical
              authority so AI platforms recognize your brand as a reliable
              source across important subject areas.
            </p>
            <ul
              className="sub-intro-details"
              style={{
                textAlign: "left",
                maxWidth: "515px",
                margin: "20px auto",
              }}
            >
              <li>Subject-matter coverage</li>
              <li>Supporting knowledge content</li>
              <li>Authoritative citations and references</li>
              <li>Structured information AI systems can interpret</li>
            </ul>
          </div>
          <div className="img-center">
            <Image
              src="/images/ai-optimization/topical-authority-development.png"
              alt="Topical Authority Development"
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
          <SectionLabel blue>AI-Ready Content Architecture</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            Content written for <b>traditional SEO</b> does not always translate
            well to <b>AI-generated responses</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "850px", margin: "0 auto 30px auto" }}
          >
            We develop content frameworks that make information easier for AI
            systems to interpret, summarize, and cite.
          </p>
        </div>
        <div className="col-2 unset container center">
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/fact-dense.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Fact-Dense Content"
            description="Create fact-dense explanations and structured answers to complex questions that AI systems can easily interpret and cite."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/semantic.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Semantic Structure"
            description="Develop supporting documentation and knowledge resources with clear semantic relationships between topics."
          />
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel red>Measurement and Iteration</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            AI visibility requires a <b>different measurement framework</b> than
            traditional search rankings.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "850px", margin: "0 auto 30px auto" }}
          >
            We track how AI systems represent your brand across prompts,
            answers, and citations to understand where visibility is improving
            and where opportunities remain.
          </p>
          <h3
            style={{
              fontSize: "1.5rem",
              margin: "40px auto 20px auto",
              maxWidth: "850px",
            }}
          >
            <b>AI-Centric Metrics We Track</b>
          </h3>
        </div>
        <div
          className="col-2 unset container center"
          style={{ marginTop: "30px" }}
        >
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/ai-visibility.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="AI Visibility Signals"
            description="Track mentions, citations, sentiment, and share of voice within AI-generated responses."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/brand-inclusion.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Prompt Categories & Brand Inclusion"
            description="Identify which prompts trigger responses in your category and how frequently your brand is included."
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
            title="Competitive Representation"
            description="Monitor how competitors are referenced across AI platforms to identify opportunities."
          />
          <ServiceCard
            icon={
              <Image
                src="/images/service-icons/color/citation-sources.png"
                alt=""
                height={160}
                width={160}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            }
            title="Citation Sources"
            description="Analyze which sources AI systems rely on when generating answers in your category."
          />
        </div>
        <div
          className="container center"
          style={{ marginTop: "40px" }}
        >
          <p
            className="sub-intro-details"
            style={{ maxWidth: "850px", margin: "0 auto" }}
          >
            We continuously monitor performance and adjust strategy as AI
            platforms evolve. Supporting Performance Indicators include:
          </p>

          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "600px",
              margin: "20px auto",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              • Organic traffic and keyword visibility
            </li>
            <li style={{ marginBottom: "10px" }}>• Brand query growth</li>
            <li style={{ marginBottom: "10px" }}>
              • Content engagement metrics
            </li>
            <li style={{ marginBottom: "10px" }}>• Conversion impact</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel purple>What You Gain</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 30px auto" }}
          >
            Organizations investing early in <b>AI search visibility</b> benefit
            from:
          </h2>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "700px",
              margin: "30px auto",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            <li style={{ marginBottom: "15px" }}>
              <b>Greater presence</b> in AI-generated answers
            </li>
            <li style={{ marginBottom: "15px" }}>
              <b>Stronger topical authority</b> across key subjects
            </li>
            <li style={{ marginBottom: "15px" }}>
              <b>Increased brand recognition</b> in AI-driven discovery
            </li>
            <li style={{ marginBottom: "15px" }}>
              <b>More qualified inbound demand</b>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <b>Long-term competitive advantage</b> as AI search adoption grows
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/ai-optimization/why-rso-consulting.png"
              alt="Why RSO Consulting"
              width={705}
              height={461}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel green>Why RSO Consulting</SectionLabel>
            <h2
              className="sub-headline"
              style={{
                maxWidth: "515px",
                margin: "0 auto 20px auto",
                lineHeight: "1.2",
              }}
            >
              <b>Traditional SEO Expertise</b> Meets{" "}
              <b>AI Visibility Measurement</b>
            </h2>
            <p className="sub-intro-details">
              RSO Consulting combines traditional SEO expertise with advanced
              analytics and AI visibility measurement. Our team has more than
              two decades of experience helping organizations improve how they
              are discovered online. We bring that same analytical rigor to the
              emerging landscape of AI search.
            </p>
            <ul
              className="sub-intro-details"
              style={{
                textAlign: "left",
                maxWidth: "515px",
                margin: "20px auto",
              }}
            >
              <li>Measurable visibility improvements</li>
              <li>Structured knowledge development</li>
              <li>Sustainable authority building</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container center">
          <h2
            className="sub-headline"
            style={{ maxWidth: "850px", margin: "0 auto" }}
          >
            <b>Prepare Your Brand for AI Search</b>
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "800px", margin: "30px auto" }}
          >
            AI-driven discovery is accelerating across platforms. Organizations
            that structure their knowledge and content for AI systems today will
            have a significant advantage as AI becomes the primary interface for
            information discovery.
          </p>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "800px", margin: "30px auto" }}
          >
            <b>
              Contact RSO Consulting to learn how AI Search Optimization can
              position your brand at the center of AI-driven discovery.
            </b>
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
            help <b>position your brand</b> for <b>AI-driven discovery</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default AISearchOptimization;
