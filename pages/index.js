import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/hero/Hero";

import heroImage from "../public/images/hero/hero_home.png";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Hero image={heroImage}></Hero>
    </Fragment>
  );
};

export default Home;
