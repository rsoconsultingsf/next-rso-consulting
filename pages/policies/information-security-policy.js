import React, { Fragment } from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Layout/Header";

const InformationSecurityPolicy = () => {
  return (
    <Fragment>
      <Head>
        <title>Information Security Policy | RSO Consulting</title>
        <meta description="View our Information Security Policy" />
      </Head>
      <Header sticky />
      <section>
        <div className="container">
          <h1 className="slate">
            <b>Information Security Policy</b>
          </h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Purpose and Scope</b>
          </h2>
          <p>
            This Information Security Policy outlines the commitment of RSO
            Consulting to safeguard all data associated with its website, client
            projects, and business operations. The policy applies to all
            employees, contractors, and third-party partners who interact with
            RSO Consulting&apos;s systems, assets, or data.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Data Protection and Privacy</b>
          </h2>
          <p>
            RSO Consulting is dedicated to ensuring that data is collected,
            stored, and processed in compliance with applicable privacy
            regulations, including GDPR and CCPA. Sensitive information is
            encrypted in transit and at rest, and data is retained only as
            necessary for operational, legal, or regulatory requirements. This
            includes provisions for legal holds or similar processes to protect
            data, documents, and records from unauthorized destruction.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Access Control and Identity Management</b>
          </h2>
          <p>
            Access to RSO Consulting&apos;s systems and data is restricted to
            authorized personnel based on specific role requirements. We
            maintain an Access and Identity Management policy to ensure secure
            authentication and authorization processes. Multi-factor
            authentication (MFA) is enforced when possible falling back to
            Two-factor authentication (2FA) for accessing critical systems, and
            access levels are periodically reviewed for compliance. An inventory
            of all assets authorized to handle customer data is maintained and
            regularly reviewed.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Password Management</b>
          </h2>
          <p>
            To maintain secure access control, RSO Consulting employs a robust
            Password Management policy. Passwords are securely stored and
            managed through tools like 1Password, and users are required to
            follow password complexity standards. Previous (historical)
            passwords are restricted from reuse to further ensure data
            protection.
          </p>
        </div>
      </section>
      <section id="encryption">
        <div className="container">
          <h2 className="slate">
            <b>Encryption</b>
          </h2>
          <p>
            All sensitive and personally identifiable information (PII) is
            encrypted both in transit and at rest to safeguard data integrity
            and confidentiality. Encryption standards comply with industry
            requirements, and encryption keys are managed securely to prevent
            unauthorized access.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Incident Response</b>
          </h2>
          <p>
            In the event of a security incident, RSO Consulting will activate
            its Incident Response Plan to assess, mitigate, and resolve the
            issue promptly. All incidents will be logged, and affected parties
            will be notified as required by regulations. The response plan
            includes containment measures, root cause analysis, and remediation
            steps to prevent future occurrences.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Regular Audits and Monitoring</b>
          </h2>
          <p>
            RSO Consulting conducts regular audits and monitors its systems to
            identify potential vulnerabilities proactively. System logs are
            reviewed on a scheduled basis, and automated tools are used for
            continuous real-time monitoring of critical assets.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Employee and Contractor Training</b>
          </h2>
          <p>
            Employees and contractors are required to complete information
            security training, covering data protection, phishing prevention,
            and secure data handling. Training is updated periodically to align
            with current threats and best practices.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Third-Party Services and Vendor Security</b>
          </h2>
          <p>
            RSO Consulting ensures that third-party providers used in its
            operations adhere to equivalent security standards. Vendors undergo
            due diligence during onboarding, and periodic reviews are conducted
            to confirm their ongoing compliance.
          </p>
        </div>
      </section>
      <section id="backups">
        <div className="container">
          <h2 className="slate">
            <b>Backups and Disaster Recovery</b>
          </h2>
          <p>
            To ensure business continuity, RSO Consulting performs regular
            backups of critical data and maintains a disaster recovery plan to
            enable prompt system and data restoration. Backup integrity is
            verified periodically.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Review and Policy Updates</b>
          </h2>
          <p>
            This Information Security Policy is reviewed annually or when
            significant changes occur in business practices, technology, or
            regulations. Updates are communicated to all relevant parties to
            maintain alignment with the latest security standards.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default InformationSecurityPolicy;
