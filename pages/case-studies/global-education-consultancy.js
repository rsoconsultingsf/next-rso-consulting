import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Contact/ContactSection";
import styles from "../../styles/CaseStudy.module.css";

import heroImage from "../../public/images/case-studies/global-education-consultancy-hero.png";

export default function GlobalEducationConsultancyCaseStudy() {
  return (
    <Fragment>
      <Head>
        <title>Global Educational Consultancy Case Study | RSO</title>
        <meta
          name="description"
          content="Discover how RSO helped a Global Educational Consultancy stabilize and recover organic search performance, scaling AI-driven referral traffic by +600% YoY and securing visibility for 97 key terms in Google AI Overviews."
        />
      </Head>

      <Hero
        image={heroImage}
        alt="Global Educational Consultancy Digital Marketing"
        anchor="#overview"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Global Educational Consultancy</b>
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
          2025 SEO: Stabilization, Recovery, and AI Acceleration
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
            Our client, a Global Educational Consultancy, needed to increase
            organic search traffic and form fills coming from non-brand
            keywords. Through a strategic SEO initiative focused on
            intent-driven content, non-brand growth, and AI optimization, RSO
            helped them achieve a strong Q4 organic recovery, scale AI-driven
            referral traffic by +600% YoY, and secure visibility for 97 key
            terms within Google AI Overviews.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>+6%</div>
              <p className={styles.statLabel}>YoY Organic Growth in Q4</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>+600%</div>
              <p className={styles.statLabel}>AI-Driven Referral Traffic YoY</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>97</div>
              <p className={styles.statLabel}>
                Key Terms in Google AI Overviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel blue>The Challenge</SectionLabel>
          <p>
            Our client needed to increase organic search traffic and form fills
            coming from non-brand keywords. The goals were to expand their
            non-brand footprint by scaling organic reach and conversion rates
            through high-intent, non-branded search terms, elevate SERP
            authority by improving keyword rankings and overall search
            visibility, and navigate the AI shift by proactively monitoring and
            capturing traffic from AI Overviews and LLMs to offset potential
            organic click-loss.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel purple>The Approach</SectionLabel>
          <p>
            RSO prioritized relevant content for the blog, shifting the intent
            focus from broad generic terms to high-converting long-tail
            segments. Strategic content was deployed to boost visibility and
            CVR, while high-volume keywords were prioritized for non-brand
            growth and new acquisitions. Additionally, content was optimized
            specifically for AI Overviews to capture emerging search traffic.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel green>The Results</SectionLabel>
          <p>
            The strategy delivered a strong Q4 turnaround, achieving +6% YoY
            organic growth in Q4 and reversing H1 lows with consistent monthly
            gains. Our client overcame an annual -6% dip with a strong year-end
            finish, demonstrating a clear recovery trajectory. AI-driven
            referral traffic scaled by +600% YoY, with Q4 alone seeing a +294%
            increase. They also secured visibility for 97 key terms within
            Google AI Overviews, establishing strong AIO authority.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>
              [Placeholder for client testimonial]
            </blockquote>
            <p className={styles.author}>[Client Name], [Title], Global Educational Consultancy</p>
          </div>
        </div>
      </section> */}

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel>More Case Studies</SectionLabel>
          <div className={styles.relatedStudies}>
            <Link href="/case-studies/alsco">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/alsco-hero.png")',
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Alsco</h3>
                  <p className={styles.studyCardOverlayP}>
                    Driving Customer Acquisition and Market Expansion
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/josys">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/josys-hero.png")',
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Josys</h3>
                  <p className={styles.studyCardOverlayP}>
                    Accelerating Growth: Shortening the Sales Cycle and
                    Expanding Market Reach
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/threatdown">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage:
                    'url("/images/case-studies/threatdown-hero.png")',
                }}
              >
                <div className={styles.studyCardOverlay}>
                  <h3>Threatdown</h3>
                  <p className={styles.studyCardOverlayP}>
                    Leveraging Non-Brand Keywords to Increase Brand Awareness
                    and Pipeline
                  </p>
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
