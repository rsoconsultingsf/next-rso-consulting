import React, { Fragment } from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Layout/Header";

const ThirdPartySupplierPolicy = () => {
  return (
    <Fragment>
      <Head>
        <title>Third Party Supplier Policy | RSO Consulting</title>
        <meta description="View our Information Security Policy" />
      </Head>
      <Header sticky />
      <section>
        <div className="container">
          <h1 className="slate">
            <b>Third Party Supplier Policy</b>
          </h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Purpose and Scope</b>
          </h2>
          <p>
            This policy outlines RSO Consulting’s approach to managing
            relationships with third-party suppliers, ensuring that suppliers
            meet our security, compliance, and operational standards. It applies
            to all vendors, contractors, and service providers who handle
            company data or participate in business-critical activities.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Supplier Evaluation and Due Diligence</b>
          </h2>
          <p>
            Before engagement, all suppliers undergo a risk assessment to
            evaluate their ability to meet RSO Consulting’s security,
            compliance, and operational requirements. Key factors include:
          </p>
          <ul>
            <li>
              Security certifications (e.g., SOC, ISO 27001) and compliance
              standards (e.g., GDPR, CCPA).
            </li>
            <li>Financial stability and reputation.</li>
            <li>Data protection and privacy measures.</li>
            <li>Business continuity and disaster recovery plans.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Contractual Requirements</b>
          </h2>
          <p>All third-party agreements must include:</p>
          <ul>
            <li>
              <b>Confidentiality and Data Protection:</b> Clauses requiring
              suppliers to protect RSO Consulting data in alignment with our
              privacy and security standards.
            </li>
            <li>
              <b>Compliance Obligations:</b> Specifications that suppliers must
              comply with relevant laws, regulations, and industry standards.
            </li>
            <li>
              <b>Audit Rights:</b> Allowing RSO Consulting to audit the
              supplier’s security and compliance practices if necessary.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Ongoing Monitoring and Review</b>
          </h2>
          <p>
            RSO Consulting periodically reviews third-party suppliers to ensure
            continued compliance with our standards:
          </p>
          <ul>
            <li>
              <b>Annual Reviews:</b> Suppliers handling sensitive data or
              critical operations are reassessed annually to verify adherence to
              security and compliance requirements.
            </li>
            <li>
              <b>Performance Tracking:</b> Continuous monitoring of supplier
              performance and incident response capabilities.
            </li>
            <li>
              <b>Risk Reassessment:</b> Any significant change in the supplier’s
              operations, such as mergers or service expansions, triggers a risk
              reassessment.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Incident Management and Reporting</b>
          </h2>
          <p>
            Suppliers are required to report any security incidents, breaches,
            or data loss events that may impact RSO Consulting’s data or
            services within a specified timeframe. RSO Consulting works with
            suppliers to address and remediate incidents swiftly.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Termination and Offboarding</b>
          </h2>
          <p>
            Upon termination of the supplier relationship, RSO Consulting
            ensures:
          </p>
          <ul>
            <li>
              <b>Data Retrieval:</b> All RSO data is securely returned or
              deleted as per the data retention policies.
            </li>
            <li>
              <b>Access Revocation:</b> Supplier access to RSO Consulting’s
              systems and data is promptly revoked.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Policy Review and Updates</b>
          </h2>
          <p>
            The Third Party Supplier Policy is reviewed annually and updated as
            necessary to ensure alignment with RSO Consulting’s business needs
            and evolving regulatory standards.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default ThirdPartySupplierPolicy;
