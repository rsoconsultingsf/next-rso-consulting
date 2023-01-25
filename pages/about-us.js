import React, { Fragment } from "react";

import Image from "next/image";
import Head from "next/head";

import Hero from "../components/heroSection/heroSection";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import ContactSection from "../components/Contact/ContactSection";

import heroImage from "../public/images/hero/rso-hero_about-us.png";

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>
          RSO: Digital Marketing Agency Near Me | SEO Service San Francisco +
        </title>
        <meta
          name="description"
          content="The best digital marketing agency near me is RSO Consulting. Our clients are all around the world. We will get the results you need."
        />
      </Head>
      <Hero
        image={heroImage}
        alt="Digital Marketing Agency Graphic"
        anchor="#intro"
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>RSO: The Digital Marketing Agency Near Me</b>
          <br /> with a Global Attitude
        </h1>
      </Hero>
      <section>
        <div id="intro" style={{ top: "-100px" }}></div>
        <div className="container">
          <h2 className="intro sub-headline">
            In a sea of web <b>analytics consulting companies</b>, you need the
            right digital marketing partner to get the right results. Enter{" "}
            <b>RSO Consulting</b>, a diverse consultancy. Our team spans{" "}
            <b>six time zones</b> with employees situated{" "}
            <b>all around the globe</b>. With roots in <b>San Francisco</b>, we
            want to work with the world by representing the world.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso-running.png"
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
            <SectionLabel red>Lifelong Learning + Leadership</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              It all started with <b>running</b>.
            </h2>
            <p className="sub-intro-details">
              In 2000, RSO founder, Rob Sanders trained for a marathon. His
              running group brought him to the Sports Basement, where he cut his
              teeth on internet marketing, combining prior project management
              skills at Ford Motor Company with web development skills.
            </p>
            <p className="sub-intro-details">
              This led to contract work with Gap Online and Charles Schwab
              before teaming up with Coleman, other Jarden Home Brands and
              various other companies representing a variety of verticals and
              industries.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="intro sub-headline">
            Part of what makes RSO Consulting stand out from other{" "}
            <b>web analytics consulting companies</b> is a drive to keep
            learning.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "1400px", textAlign: "center" }}
          >
            With Google Analytics teaching experience at Academy X, San
            Francisco, and both online and in person with the American Society
            of Professional Education, University of San Francisco, and the
            IÉSEG School of Management in France, Rob’s brought his expertise
            with education and as author on Google Analytics.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="sub-intro">
            <SectionLabel red>What Story Does Your Data Tell? </SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              The internet is crowded—so, <b>how do you stand out</b>? Find out
              the <b>story of your data</b>.
            </h2>
            <p className="sub-intro-details">
              Whether your current numbers paint a bleak picture now or a good
              story that deserves a happy ending, let our team translate and
              make recommendations so you can respond or pivot accordingly.
            </p>
            <p className="sub-intro-details">
              Data is the backbone of everything we do at RSO Consulting. As
              algorithms shift and flow, so do we. Best practices change. At the
              core of our company is a belief that our client’s online marketing
              wins are our wins too. Being in the digital marketing space is
              being in the customer service business. We bring creative
              solutions to customer pain points and challenges.
            </p>
          </div>
          <div className="img-center">
            <Image
              src="/images/rso-data-story.png"
              alt="rso success"
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
        <div className="container">
          <h2 className="intro sub-headline">
            The target is <b>always moving</b>. We don’t set the rules—we just{" "}
            <b>learn</b> to play by them with <b>custom approaches</b> for each
            client for <b>guaranteed success</b>. The internet connects the
            world and <b>RSO Consulting</b> brings the online expertise your
            business needs to <b>thrive</b>.
          </h2>
          <p
            className="sub-intro-details"
            style={{ maxWidth: "1400px", textAlign: "center" }}
          >
            We are the digital marketing partner you’ve been looking for.
          </p>
        </div>
      </section>
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

export default AboutUs;
