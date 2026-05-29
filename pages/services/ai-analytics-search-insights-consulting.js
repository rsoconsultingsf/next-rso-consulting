import React, { Fragment } from "react";

import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import TrainingContact from "../../components/Contact/TrainingContact";
import Button from "../../components/UI/Buttons/Button";
import TrainingTestimonials from "../../components/Sliders/TrainingTestimonialsSlider";

import heroImage from "../../assets/images/hero/ai-analytics.png";

const AIAnalyticsSearchInsightsConsulting = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Analytics Consulting Services for Marketing Data - RSO</title>
        <meta
          name="description"
          content="Use AI to turn data into action. Our AI analytics consulting helps you analyze performance, automate reporting, and connect insights to AI-driven search."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="AI Analytics & Search Insights Consulting"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>AI Analytics &amp; Search Insights</b> Consulting
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 30px auto",
          }}
        >
          The real value of AI isn&apos;t the output — it&apos;s what you do
          with the insights.
        </h2>
        <div
          className="col-2-hero"
          style={{ gridAutoRows: "auto" }}
        >
          <Button
            color="orange"
            link="#contact"
          >
            Free Consultation
          </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section>
        <div id="intro"></div>
        <div className="container center">
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "900px",
              textAlign: "center",
              margin: "0 auto 20px auto",
              fontSize: "1.15rem",
            }}
          >
            AI is changing not only how brands are discovered — but how
            marketing performance is understood.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "900px",
              textAlign: "center",
              margin: "0 auto 20px auto",
            }}
          >
            Our <b>AI analytics consulting</b> helps your team use tools like
            ChatGPT, Claude, and BigQuery to extract, analyze, and act on your
            data faster. We connect those insights to your visibility in
            AI-driven search, giving you a clearer picture of what&apos;s
            working — and what to do next.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "900px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            This isn&apos;t about adding more tools. It&apos;s about making your
            data more useful in an AI-driven marketing landscape.
          </p>
        </div>
      </section>

      {/* What We Help You Achieve Section */}
      <section>
        <div className="container center">
          <SectionLabel blue>What We Help You Achieve</SectionLabel>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "650px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>Turn complex data into clear, actionable insights using AI</li>
            <li>Reduce manual reporting and accelerate analysis</li>
            <li>Make faster, more confident marketing decisions</li>
            <li>Identify what&apos;s driving performance across channels</li>
            <li>Connect AI search visibility to real business outcomes</li>
          </ul>
        </div>
      </section>

      {/* How We Help Section */}
      <section>
        <div className="col-2 unset reverse-mobile container">
          <div className="img-center">
            <Image
              src="/images/ai-data-extraction.png"
              alt="AI Data Extraction and Analytics"
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel teal>How We Help</SectionLabel>
            <p
              className="sub-intro-details"
              style={{
                maxWidth: "515px",
                margin: "0 auto 20px auto",
              }}
            >
              We combine <b>AI analytics consulting</b> with practical, hands-on
              support to help your team apply AI in meaningful ways.
            </p>
            <ul
              className="sub-intro-details"
              style={{
                textAlign: "left",
                maxWidth: "515px",
                margin: "20px auto",
                lineHeight: "2",
              }}
            >
              <li>AI-powered data analysis using ChatGPT and Claude</li>
              <li>BigQuery data extraction, querying, and interpretation</li>
              <li>Automated reporting and insight generation</li>
              <li>Marketing performance analysis across channels</li>
              <li>Connecting search visibility with analytics data</li>
              <li>Ongoing consulting and team enablement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section>
        <div className="container center">
          <SectionLabel red>What to Expect</SectionLabel>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "650px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>Hands-on sessions using your real data and workflows</li>
            <li>
              Practical guidance on applying AI to analytics and reporting
            </li>
            <li>Strategic direction tailored to your business goals</li>
            <li>
              Flexible engagements — from focused workshops to ongoing support
            </li>
            <li>
              Clear, actionable next steps your team can implement immediately
            </li>
          </ul>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section>
        <div className="container center">
          <SectionLabel purple>What You&apos;ll Learn</SectionLabel>
          <ul
            className="sub-intro-details"
            style={{
              textAlign: "left",
              maxWidth: "650px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <li>
              How to use AI tools to analyze marketing and performance data
            </li>
            <li>How to extract insights from platforms like BigQuery</li>
            <li>How to automate reporting and reduce manual work</li>
            <li>How to identify trends and opportunities using AI</li>
            <li>How to connect analytics insights to marketing performance</li>
            <li>How to adapt your measurement strategy for AI-driven search</li>
          </ul>
        </div>
      </section>

      {/* How This Connects to AI Search Section */}
      <section>
        <div className="container center">
          <SectionLabel orange>How This Connects to AI Search</SectionLabel>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "0 auto 20px auto",
            }}
          >
            Getting found in AI-driven search is only part of the equation.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "0 auto 20px auto",
            }}
          >
            To understand what&apos;s working, you need to analyze performance
            data, identify patterns, and turn insights into action. That&apos;s
            where AI-powered analytics comes in.
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "0 auto 20px auto",
            }}
          >
            If your focus is improving visibility in AI search, explore our{" "}
            <Link href="/services/ai-search-optimization/">
              AI Search Optimization Services
            </Link>
            .
          </p>
          <p
            className="sub-intro-details"
            style={{
              maxWidth: "800px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            If you&apos;re ready to better understand and act on your data using
            AI, you&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* Client Results Section */}
      <section>
        <div className="container center">
          <SectionLabel green>Client Results</SectionLabel>
          <h2
            className="sub-headline"
            style={{ margin: "0 auto 20px auto", lineHeight: "1.2" }}
          >
            We don&apos;t just explore AI — we help teams{" "}
            <b>apply it in ways that improve performance</b>.
          </h2>
        </div>
        <div className="container center">
          <TrainingTestimonials />
        </div>
      </section>

      <TrainingContact
        title="Get In Touch"
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Let&apos;s discuss how our <b>AI analytics consulting</b> can help
            your team turn data into <b>faster, smarter decisions</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default AIAnalyticsSearchInsightsConsulting;
