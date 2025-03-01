import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../../components/heroSection/heroSection";
import SectionLabel from "../../components/UI/Labels/SectionLabel";
import Button from "../../components/UI/Buttons/Button";
import ContactSection from "../../components/Contact/ContactSection";
import styles from "../../styles/CaseStudy.module.css";

import heroImage from "../../public/images/case-studies/case-studies-hero.png";

export default function CaseStudies() {
  return (
    <Fragment>
      <Head>
        <title>Case Studies | RSO</title>
        <meta
          name="description"
          content="Explore how RSO helps businesses achieve their digital marketing goals through strategic innovation and data-driven solutions."
        />
      </Head>

      <Hero
        image={heroImage}
        alt="RSO Case Studies"
        anchor="#studies"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Case Studies</b>
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
          Real Results for Real Businesses
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button anchor="contact">Get Started</Button>
        </div>
      </Hero>

      <section
        id="studies"
        className={styles.section}
      >
        <div className={styles.container}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 3rem auto",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.2rem" }}>
              For over two decades, RSO has been driving transformative results
              for businesses across industries. Our case studies showcase how we
              combine strategic innovation with data-driven execution to deliver
              exceptional outcomes for our clients.
            </p>
          </div>
          <SectionLabel>Featured Case Studies</SectionLabel>

          <div
            className={styles.relatedStudies}
            style={{ marginTop: "2rem", gap: "2rem" }}
          >
            <Link href="/case-studies/josys">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/josys-hero.png")',
                  backgroundSize: "cover",
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
            <Link href="/case-studies/alsco">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage: 'url("/images/case-studies/alsco-hero.png")',
                  backgroundSize: "cover",
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
            <Link href="/case-studies/threatdown">
              <div
                className={styles.studyCard}
                style={{
                  backgroundImage:
                    'url("/images/case-studies/threatdown-hero.png")',
                  backgroundSize: "cover",
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
