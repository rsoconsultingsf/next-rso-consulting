import { useRouter } from "next/router";

import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "react-social-sharing";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import styles from "./SocialShare.module.css";

const style = {
  padding: "0.5em 0.5em",
};

const SocialShare = () => {
  const router = useRouter();

  return (
    <div className={styles["social-inner"]}>
      <h2 className="sidebar-title">Share This Article:</h2>
      <div className={styles["social-grid"]}>
        <a
          href={`https://www.facebook.com/sharer.php?u=${process.env.SITE_URL}${router.asPath}`}
          target="_blank"
          rel="noreferrer noopener"
          className={styles["social-icon"]}
          style={{ backgroundColor: "#3b5998" }}
        >
          <FaFacebookF color="#FFFFFF" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet/?text=&url=${process.env.SITE_URL}${router.asPath}`}
          target="_blank"
          rel="noreferrer noopener"
          className={styles["social-icon"]}
          style={{ backgroundColor: "#55acee" }}
        >
          <FaTwitter color="#FFFFFF" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.SITE_URL}${router.asPath}`}
          target="_blank"
          rel="noreferrer noopener"
          className={styles["social-icon"]}
          style={{ backgroundColor: "#0077b5" }}
        >
          <FaLinkedinIn color="#FFFFFF" />
        </a>
        <a
          href={`mailto:?subject=I%20found%20this%20article%20on%20rso-consulting.com&body=${process.env.SITE_URL}${router.asPath}`}
          className={styles["social-icon"]}
          style={{ backgroundColor: "#ff6633" }}
        >
          <FaEnvelope color="#FFFFFF" />
        </a>
        {/* <Facebook style={style} solid small link="https://facebook.com" />
        <Twitter style={style} solid small link="https://twitter.com" />
        <Linkedin style={style} solid small link="https://linkedin.com" />
        <Mail
          style={{ backgroundColor: "#ff6633", padding: "0.5em 0.5em" }}
          solid
          small
          subject="I found this article on rso-consulting.com"
        /> */}
      </div>
    </div>
  );
};

export default SocialShare;
