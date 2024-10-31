import React, { Fragment, useRef, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Layout/Header";

const PrivacyPolicy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.setAttribute(
      "data-georegions",
      "{'region':'US-06','cbid':'4e3d269b-0766-46f9-beec-61d4a75119a5'},{'region':'US-51','cbid':'a6c78df2-c7a8-447b-9162-39f20c77c5d3'},{'region':'AT, BE, BG, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, PL, PT, RO, SE, SI, SK','cbid':'a6546862-c312-4440-8228-972aa88aa07f'},{'region':'BR','cbid':'86ef25b5-138b-46c5-807d-05666a7d21ff'}"
    );
    script.async = true;
    script.src =
      "https://consent.cookiebot.com/d447ec29-dc7c-46bc-90e6-68f2cb28826c/cd.js";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Privacy Policy | RSO Consulting</title>
        <meta description="View our Privacy Policy" />
      </Head>
      <Header sticky />
      <section>
        <div className="container">
          <h1 className="slate">
            <b>Privacy Policy</b>
          </h1>
          <p>
            This privacy notice discloses the privacy practices for
            robsandersonline.com and rso-consulting.com. This privacy notice
            applies solely to information collected by this web site. It will
            notify you of the following:
          </p>
          <ul>
            <li>
              What personally identifiable information is collected from you
              through the web site and how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Information Collection, Use, and Sharing</b>
          </h2>
          <p>
            We are the sole owners of the information collected on this site. We
            only have access to collect information that you voluntarily give us
            such as; name, address, phone and billing information via email or
            other direct contact from you. We will not sell or rent this
            information to anyone.
          </p>
          <p>
            We will use your information to respond to you, regarding the reason
            you contacted us. We will not share your information with any third
            party outside of our organization, other than as necessary to
            fulfill your request, e.g. to ship an order.
          </p>
          <p>
            Unless you ask us not to, we may contact you via email in the future
            to tell you about specials, new products or services, or changes to
            this privacy policy.
          </p>
        </div>
      </section>
      <section>
        <div
          className="container"
          ref={containerRef}
        >
          <h2 className="slate">
            <b>Cookies</b>
          </h2>
        </div>
        {/* <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/d447ec29-dc7c-46bc-90e6-68f2cb28826c/cd.js"
          type="text/javascript"
          async
          data-georegions="{'region':'US-06','cbid':'4e3d269b-0766-46f9-beec-61d4a75119a5'},{'region':'US-51','cbid':'a6c78df2-c7a8-447b-9162-39f20c77c5d3'},{'region':'AT, BE, BG, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, PL, PT, RO, SE, SI, SK','cbid':'a6546862-c312-4440-8228-972aa88aa07f'},{'region':'BR','cbid':'86ef25b5-138b-46c5-807d-05666a7d21ff'}"></Script> */}
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Your Access to and Control Over Information</b>
          </h2>
          <p>
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number given on our website:
          </p>
          <ul>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Security</b>
          </h2>
          <p>
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline.
          </p>
          <p>
            Wherever we collect sensitive information (such as credit card
            data), that information is encrypted and transmitted to us in a
            secure way. You can verify this by looking for a closed lock icon at
            the bottom of your web browser, or looking for “https” at the
            beginning of the address of the web page.
          </p>
          <p>
            While we use encryption to protect sensitive information transmitted
            online, we also protect your information offline. Only employees who
            need the information to perform a specific job (for example, billing
            or customer service) are granted access to personally identifiable
            information. The computers/servers in which we store personally
            identifiable information are kept in a secure environment.
          </p>
          <p>
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at 415.225.9934 or{" "}
            <Link href="/digital-marketing-consultation/">via email</Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default PrivacyPolicy;
