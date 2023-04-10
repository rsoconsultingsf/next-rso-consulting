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
  const router = useRouter();

  // Set scrolling to smooth for anchor links
  // useEffect(() => {
  //   setSmoothScroll(true);
  //   const handleStart = () => setSmoothScroll(false);
  //   const handleStop = () => setSmoothScroll(true);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive">
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
        async></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
