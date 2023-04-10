import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "../components/Layout/Layout";
// import Transition from "../components/UI/Transitions/Transition";

import Script from "next/script";

import "../styles/globals.css";

// const setSmoothScroll = (isSmooth) => {
//   document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
// };

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        id="google-tag-manager"
        strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M522H9');
      `}
      </Script> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
