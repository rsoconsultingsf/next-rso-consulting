import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Contact/ContactSection";
import styles from "../../styles/CaseStudy.module.css";

import heroImage from "../../public/images/case-studies/alsco-hero.png";

export default function AlscoCaseStudy() {
  return (
    <Fragment>
      <Head>
        <title>Alsco Uniforms Case Study | RSO</title>
        <meta
          name="description"
          content="Discover how RSO helped Alsco optimize their B2B lead generation strategy, resulting in increased qualified leads and improved ROI across multiple markets."
        />
      </Head>

      <Hero
        image={heroImage}
        alt="Alsco B2B Lead Generation"
        anchor="#overview"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Alsco</b>
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
          Driving Customer Acquisition and Market Expansion
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
            Alsco Uniforms, a leader in the uniform rental industry, sought to
            accelerate their expansion in the U.S. market while optimizing their
            customer acquisition process. Through an innovative approach
            combining strategic incentives and targeted marketing campaigns, we
            helped Alsco exceed their customer acquisition goals and establish a
            scalable model for continued growth. The success of this initiative
            led to increased investment in U.S. market expansion and a
            strengthened competitive position.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>41%</div>
              <p className={styles.statLabel}>Revenue Growth</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1600%</div>
              <p className={styles.statLabel}>Budget Growth Over 5 Years</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>32%</div>
              <p className={styles.statLabel}>Lead Growth vs 19% Average</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel blue>The Challenge</SectionLabel>
          <p>
            Alsco, a company with a legacy dating back to 1889, faced
            significant challenges in modernizing its marketing approach.
            Underinvestment in CRM software led to unclear expectations of cost
            per lead, while a fragmented Google Ads structure prioritized
            low-quality conversions. A disconnect between local branch
            expectations and global marketing strategy, combined with
            organizational resistance to change, further complicated efforts.
            With marketing budgets applied equally across 50+ North American
            branches, the company needed a more strategic, data-driven approach
            to optimize performance.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel purple>The Approach</SectionLabel>
          <p>
            To address these issues, we implemented Salesforce and integrated it
            with Google Ads, shifting the focus from maximizing low-value
            conversions to optimizing marketing-qualified leads and customer
            acquisitions. The marketing strategy transitioned from isolated,
            branch-based campaigns to a North America-wide approach,
            incorporating industry-specific and service-based campaigns, a
            cost-controlled brand campaign, and flexible “booster” campaigns for
            underserved cities. To bridge the gap between corporate and local
            teams, we developed user-friendly reporting tools that educated
            branch managers on digital marketing’s impact, fostering better
            alignment with global objectives.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel green>The Results</SectionLabel>
          <p>
            Integrating Salesforce enabled us to identify high-converting and
            high-ROAS keyword themes, quantify investment differences, and
            pinpoint competitive service areas needing additional marketing
            support. Despite a global decline in leads, Alsco surpassed its 2024
            business-wide KPI with a 35% increase in both leads and revenue
            growth, driven by a fourth-quarter promotional campaign where PPC
            was the only channel to exceed this benchmark. Leads increased by
            32% (compared to an all-channel average of 19%), and revenue grew by
            41% (surpassing the all-channel average of 25%). Over five years,
            the inherited Google Ads budget expanded by 1,600%, demonstrating
            sustained bottom-line impact and long-term scalability.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>
              “We worked with RSO for over five years, and their expertise and
              dedication were instrumental in helping us grow during that time.
              Their team is incredibly knowledgeable and often went above and
              beyond to ensure our campaigns were optimized for performance. As
              we managed our PPC efforts and locations all across North America,
              RSO’s strategic approach and collaboration made a significant
              difference in our success. They are true experts in their field,
              and we highly recommend their services to anyone looking to grow
              their advertising efforts with a skilled and reliable PPC
              partner.”
            </blockquote>
            <p className={styles.author}>
              Austin Maynes, Digital Marketing & Brand Manager, Alsco Uniforms
            </p>
          </div>
        </div>
      </section>

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
