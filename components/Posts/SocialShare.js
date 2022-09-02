import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "react-social-sharing";

import styles from "./SocialShare.module.css";

const style = {
  padding: "0.5em 0.5em",
};

const SocialShare = () => {
  return (
    <div className={styles["social-inner"]}>
      <h2 className="sidebar-title">Share This Article:</h2>
      <div className={styles["social-grid"]}>
        <Facebook style={style} solid small link="https://facebook.com" />
        <Twitter style={style} solid small link="https://twitter.com" />
        <Linkedin style={style} solid small link="https://linkedin.com" />
        <Mail
          style={{ backgroundColor: "#ff6633", padding: "0.5em 0.5em" }}
          solid
          small
          subject="I found this article on rso-consulting.com"
        />
      </div>
    </div>
  );
};

export default SocialShare;
