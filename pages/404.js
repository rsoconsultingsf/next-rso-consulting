import React, { Fragment } from "react";

import Header from "../components/Layout/Header";

import Head from "next/head";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Fragment>
      <Head></Head>
      <Header />
      <section>
        <div className="container error-page">
          <div className="center">
            <span className="error-page-title">404</span>
            <h2>The content you are looking for does not exist.</h2>
            <p>Try one of these links to get back on track:</p>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/services/">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-blogs/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/news-about-digital-marketing/">
                  <a>News</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PageNotFound;
