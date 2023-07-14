import React, { Fragment, useEffect } from "react";

import Head from "next/head";

import Hero from "../components/heroSection/heroSection";
import Card from "../components/UI/Cards/Card";
import ContactSection from "../components/Contact/ContactSection";
import Button from "../components/UI/Buttons/Button";
import RssItem from "../components/RSS/RssItem";

import heroImage from "../public/images/hero/rso-hero_news.png";

import { FEEDS, getFeed } from "../data/rss";

const News = ({ items }) => {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>News about Digital Marketing - RSO </title>
        <meta
          name="description"
          content="Stay up-to-date with the latest digital marketing news and trends, including search engine optimization (SEO), paid search (PPC), e-commerce, and more."
        />
      </Head>
      <Hero
        image={heroImage}
        alt=""
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>All About</b> <br />
          Digital Marketing
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
          Read the Latest Trends and Headlines in Digital Marketing.
        </h2>
        <div style={{ textAlign: "center" }}>
          <Button anchor="contact">Free Consultation</Button>
        </div>
      </Hero>
      <section>
        <div className="container">
          <h2 className="sub-headline center">
            Here are some of the latest headlines on digital marketing insights,
            search, and ecommerce:
          </h2>
        </div>
        <div className="news">
          <div></div>
          <Card style={{ paddingTop: "40px" }}>
            {items.map((item) => {
              return (
                <RssItem
                  key={item.link}
                  title={item.title}
                  link={item.link}
                  excerpt={item.contentSnippet}
                />
              );
            })}
          </Card>
          <div></div>
          {/* <Card
            className="right"
            sticky>
            <a
              className="twitter-timeline"
              data-height="450"
              href="https://twitter.com/rso_consulting"
              target="_blank"
              rel="noreferrer">
              Tweets by rso_consulting
            </a>{" "}
          </Card> */}
        </div>
      </section>
      <ContactSection
        title="Free Consultation"
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have regarding how{" "}
            <b>RSO</b> can help you with <b>digital marketing</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export async function getStaticProps({ params }) {
  const feed = FEEDS[0];
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 60,
  };
}

export default News;
