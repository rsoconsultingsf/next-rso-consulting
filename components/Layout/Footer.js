import React from "react";

import Image from "next/legacy/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.badges} container unset`}>
        <div>
          <iframe
            title="Clutch Widget"
            id="iframe-0.7673761388712543"
            frameBorder="0"
            width="auto"
            height="138px"
            scrolling="no"
            src="https://widget.clutch.co/widgets/get/3?ref_domain=www.rso-consulting.com&amp;uid=21061"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/partners/agency?id=1257975749"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg"
            alt="Google Partner Badge"
            width={140}
            height={140}
          />
        </a>

        <a
          href="https://www.bbb.org/greater-san-francisco/business-reviews/marketing-consultants/rso-consulting-in-san-francisco-ca-305599"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/AB_logo_200x76-1.png"
            alt=""
            width={200}
            height={76}
          />
        </a>

        <a
          href="https://wimgo.com/s/ca/san-francisco/business-consultant"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/footer/wimgo-2020.png"
            alt="Top Service Provider"
            width={160}
            height={173}
          />
        </a>
      </div>
      <div className={`${styles["footer__bottom__desktop"]} container`}>
        <div className={`${styles["footer__col"]} ${styles.logo}`}>
          <Image
            src="/images/logos/san-francisco-digital-marketing-agency_gray.svg"
            alt="RSO Logo - San Francisco Digital Marketing Agency"
            width={100}
            height={37}
          />
        </div>
        <div className={`${styles["footer__col"]} ${styles.social}`}>
          <div className={`${styles["social__icons"]} col-3`}>
            <a
              href="https://www.facebook.com/RSOConsulting?m2w"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={25} color="#6B7A99" />
            </a>
            <a
              href="https://twitter.com/rso_consulting"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={25} color="#6B7A99" />
            </a>
            <a
              href="https://www.linkedin.com/company/rso-consulting/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} color="#6B7A99" />
            </a>
          </div>
          <div className={`${styles["footer__menu"]} col-5`}>
            <Link href="/">Home</Link>
            <Link href="/services/">Services</Link>
            <Link href="/digital-marketing-blogs/">Blog</Link>
            <Link href="/news-about-digital-marketing/">News</Link>
            <Link href="/digital-marketing-consultation/">Contact</Link>
          </div>
        </div>
        <div className={`${styles["footer__col"]} ${styles.copyright}`}>
          <span>
            Copyright ©{new Date().getFullYear()} RSO Consulting. All Rights
            Reserved.
          </span>
          <span>
            <Link href="/privacy-policy/">Privacy Policy</Link>
          </span>
        </div>
      </div>
      <div className={`${styles["footer__bottom__mobile"]} container`}>
        <div className={`${styles["footer__col"]} ${styles.social}`}>
          <div className={`${styles["social__icons"]} `}>
            <a
              href="https://www.facebook.com/RSOConsulting?m2w"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={25} color="#6B7A99" />
            </a>
            <a
              href="https://twitter.com/rso_consulting"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={25} color="#6B7A99" />
            </a>
            <a
              href="https://www.linkedin.com/company/rso-consulting/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} color="#6B7A99" />
            </a>
          </div>
        </div>
        <div className={`${styles["footer__menu"]} col-5`}>
          <Link href="/">Home</Link>
          <Link href="/services/">Services</Link>
          <Link href="/digital-marketing-blogs/">Blog</Link>
          <Link href="/news-about-digital-marketing/">News</Link>
          <Link href="/digital-marketing-consultation/">Contact</Link>
        </div>
        <div className={`${styles["footer__col"]} ${styles.logo}`}>
          <Image
            src="/images/logos/san-francisco-digital-marketing-agency_gray.svg"
            alt="RSO Logo - San Francisco Digital Marketing Agency"
            width={100}
            height={37}
          />
        </div>
        <div className={`${styles["footer__col"]} ${styles.copyright}`}>
          <span>
            Copyright ©{new Date().getFullYear()} RSO Consulting. All Rights
            Reserved.
          </span>
          <span>
            <Link href="/privacy-policy/">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
