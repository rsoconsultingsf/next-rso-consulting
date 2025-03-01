import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Contact/ContactSection";

import styles from "../../styles/CaseStudy.module.css";

import heroImage from "../../public/images/case-studies/threatdown-hero.png";

export default function ThreatdownCaseStudy() {
  return (
    <Fragment>
      <Head>
        <title>Threatdown Case Study | RSO</title>
        <meta
          name="description"
          content="Learn how RSO helped Threatdown establish market presence and drive user acquisition in the competitive cybersecurity space through strategic digital marketing."
        />
      </Head>

      <Hero
        image={heroImage}
        alt="Threatdown Cybersecurity Marketing"
        anchor="#overview"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Threatdown</b>
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
          Leveraging Non-Brand Keywords to Increase Brand Awareness and Pipeline
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button link="/case-studies">View More Case Studies</Button>
        </div>
      </Hero>

      {/* Overview Section */}
      <section
        id="overview"
        className={styles.section}
      >
        <div className={styles.container}>
          <SectionLabel red>Overview</SectionLabel>
          <p>
            Threatdown, a B2B cybersecurity platform, partnered with RSO to
            optimize their paid search strategy and reduce customer acquisition
            costs. By shifting focus to non-brand campaigns and implementing a
            more strategic approach, we helped Threatdown achieve a 120%
            increase in leads while reducing cost per lead by 65%. The success
            of this campaign not only drove immediate pipeline growth of 131%
            but also established a more cost-effective and scalable growth
            strategy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>131%</div>
              <p className={styles.statLabel}>Pipeline Growth</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>-65%</div>
              <p className={styles.statLabel}>Cost Per Lead</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>120%</div>
              <p className={styles.statLabel}>Increase in Leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel blue>The Challenge</SectionLabel>
          <p>
            ThreatDown aimed to expand brand awareness while generating more
            marketing-qualified leads (MQLs) at a lower cost, all without
            increasing their existing budget. A key concern was ensuring brand
            campaigns were not cannibalizing organic search traffic while still
            maintaining a steady flow of incremental leads. Finding the right
            balance between brand and non-brand campaign investments was
            critical to optimizing performance and increasing overall pipeline
            growth.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel purple>The Approach</SectionLabel>
          <p>
            To maximize efficiency, brand campaign investments were gradually
            reduced, allowing organic search to take on a greater role in
            generating traffic and leads. Simultaneously, more budget was
            allocated to non-brand campaigns, targeting users in the
            consideration stage who were unfamiliar with ThreatDown but actively
            seeking relevant solutions. Additional non-brand keywords were
            introduced, with increased spending on high-performing terms to
            drive lead volume. To improve engagement and conversion rates, new
            ad creatives, landing pages, and campaign assets were continuously
            refreshed, ensuring ads remained relevant and effective.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel green>The Results</SectionLabel>
          <p>
            By shifting focus to non-brand campaigns, paid search leads
            increased by 120% while overall costs decreased by 25%. Cost per
            lead saw a significant reduction of 65%, improving overall
            efficiency. The pipeline generated from paid search campaigns grew
            by 131%, with an additional 67% increase in influenced pipeline. As
            a result of the strategic reallocation, leads from brand campaigns
            decreased by 43%, while organic search leads grew by an equivalent
            43%, demonstrating a successful transition towards a more
            cost-effective, scalable growth strategy.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>
              “Partnering with RSO has been a game changer for our marketing
              efforts. Their data-driven approach to demand generation, web and
              SEO has consistently resulted in measurable improvements to
              traffic, leads, and pipeline quarter over quarter. Beyond their
              expertise, they truly act as an extension of our team, bringing
              strategy and efficiency to our marketing team, driving better
              outcomes each quarter.”
            </blockquote>
            <p className={styles.author}>
              Matt Diamond, Sr. Director, Brand, Web, and Comms,
              ThreatDown/Malwarebytes
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel>More Case Studies</SectionLabel>
          <div className={styles.relatedStudies}>
            <Link href="/case-studies/josys">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/josys-hero.png")',
                  backgroundSize: "140%",
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Josys</h3>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/alsco">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/alsco-hero.png")',
                  backgroundSize: "140%",
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Alsco</h3>
                </div>
              </div>
            </Link>
          </div>
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
}
