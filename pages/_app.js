import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "../components/Layout/Layout";
// import Transition from "../components/UI/Transitions/Transition";

import Head from "next/head";
import Script from "next/script";

import { canonicalUrl } from "../lib/canonicalUrl";

import "../styles/globals.css";

// const setSmoothScroll = (isSmooth) => {
//   document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
// };

// Error pages render under the requested URL, which doesn't exist, so they
// get no canonical.
const NO_CANONICAL_PATHNAMES = ["/404", "/_error"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {!NO_CANONICAL_PATHNAMES.includes(router.pathname) && (
        <Head>
          <link
            rel="canonical"
            href={canonicalUrl(router.asPath)}
            key="canonical"
          />
        </Head>
      )}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
      >
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M522H9');
      `}
      </Script>
      <Script
        src="https://unpkg.com/@botpoison/browser"
        async
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
