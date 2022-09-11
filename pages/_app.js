import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "../components/Layout/Layout";
// import Transition from "../components/UI/Transitions/Transition";

import "../styles/globals.css";

const setSmoothScroll = (isSmooth) => {
  document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
};

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
