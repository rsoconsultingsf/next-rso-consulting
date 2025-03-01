import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Contact/ContactSection";

import styles from "../../styles/CaseStudy.module.css";

import heroImage from "../../public/images/case-studies/josys-hero.png";

export default function JosysCaseStudy() {
  return (
    <Fragment>
      <Head>
        <title>Josys Case Study | RSO</title>
        <meta
          name="description"
          content="Learn how RSO helped Josys achieve digital transformation success through innovative solutions and strategic implementation."
        />
      </Head>

      <Hero
        image={heroImage}
        alt="Josys Digital Transformation"
        anchor="#overview"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Josys</b>
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
          Accelerating Growth: Shortening the Sales Cycle and Expanding Market
          Reach
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
            Expanding into a new market presents unique challenges, especially
            when it comes to refining the sales cycle and engaging new
            audiences. Our client, a Japan-based SaaS company, sought to
            accelerate their lead-to-customer conversion rate while expanding
            into the U.S. market. By implementing a strategic, incentive-driven
            approach, we successfully increased conversions, exceeded customer
            acquisition goals, and set the stage for further U.S. market growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>120%</div>
              <p className={styles.statLabel}>Target Exceeded</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>Increased Budget</div>
              <p className={styles.statLabel}>due to Q4 2024 success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel blue>The Challenge</SectionLabel>
          <p>
            As the company transitioned into the U.S. market, it faced several
            key obstacles. The existing sales cycle was too long, slowing growth
            and making it difficult to achieve aggressive expansion goals.
            Mid-sized organizations were the ideal target, as they required the
            SaaS solution but had fewer decision-making stakeholders, allowing
            for faster adoption. However, audience fatigue was a growing issue,
            and existing lead-generation efforts were yielding diminishing
            returns. A new approach was needed to reach fresh prospects and
            convert them into customers more efficiently.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel purple>The Approach</SectionLabel>
          <p>
            To address these challenges, a multi-layered strategy was developed
            to attract, engage, and convert high-value prospects.
            Decision-makers were incentivized to participate in product demos
            with an exclusive $100 gift card offer, making it easier to
            introduce the platform’s value proposition. Lead generation efforts
            were expanded by increasing awareness and tailoring messaging to
            different stages of the customer journey. The strategy also
            prioritized niche industries, such as NGOs, where streamlined
            decision-making processes allowed for quicker conversions.
            Additionally, HubSpot lists were leveraged to refine audience
            targeting, retargeting, and predictive modeling, ensuring a steady
            pipeline of engaged prospects.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel green>The Results</SectionLabel>
          <p>
            The combination of audience segmentation, targeted advertising, and
            strategic incentives led to a significant increase in customer
            acquisition. By the end of Q4 2024, the company had successfully
            onboarded 120% of its target customers, surpassing initial
            projections. The strong performance validated the approach, leading
            to increased investment in U.S. market expansion for the upcoming
            year. With a refined sales process and a growing customer base, the
            company is well-positioned to scale its operations and maintain
            momentum in a competitive landscape.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>
              “The team at RSO has been invaluable as we have gone from having
              zero paid advertising in the market to establishing a robust,
              multi-channel PPC engine that has been the key catalyst for our
              pipeline development efforts. I deeply appreciate our partnership
              with Rob and team and how I can always count on them to be looking
              around the corner to identify new programs that will extend our
              reach and keep the leads flowing.”
            </blockquote>
            <p className={styles.author}>
              Zach Bosin, Head of Global GTM, Josys
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel>More Case Studies</SectionLabel>
          <div className={styles.relatedStudies}>
            <Link href="/case-studies/threatdown">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage:
                    'url("/images/case-studies/threatdown-hero.png")',
                  backgroundSize: "140%",
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Threatdown</h3>
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
