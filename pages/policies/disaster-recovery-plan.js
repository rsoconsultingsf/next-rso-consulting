import React, { Fragment } from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Layout/Header";

const DisasterRecoveryPlan = () => {
  return (
    <Fragment>
      <Head>
        <title>Disaster Recovery Plan | RSO Consulting</title>
        <meta description="View our Information Security Policy" />
      </Head>
      <Header sticky />
      <section>
        <div className="container">
          <h1 className="slate">
            <b>Disaster Recovery Plan</b>
          </h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Purpose</b>
          </h2>
          <p>
            The purpose of this Disaster Recovery Plan is to outline procedures
            for RSO Consulting to respond to significant disruptions in
            operations, specifically tailored for a fully remote workforce. This
            plan focuses on restoring access to critical cloud-based
            applications, ensuring data integrity, and minimizing downtime.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Scope</b>
          </h2>
          <p>
            This DRP applies to all cloud-hosted IT systems, data, and remote
            employee devices used by RSO Consulting, including Google Workspace,
            communication platforms (e.g., Slack, Zoom), and other critical
            business applications.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Objectives</b>
          </h2>
          <ul>
            <li>
              Restore critical business functions within targeted recovery
              times.
            </li>
            <li>
              Ensure the integrity and security of all business and client data.
            </li>
            <li>
              Maintain clear communication with clients and employees throughout
              the recovery process.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Roles and Responsibilities</b>
          </h2>
          <ul>
            <li>
              <b>Disaster Recovery Team (DRT):</b> Manages the DRP execution,
              assesses damage, and coordinates the recovery.
            </li>
            <li>
              <b>IT Manager:</b> Oversees restoration of cloud systems, manages
              remote device security, and liaises with cloud providers.
            </li>
            <li>
              <b>Communications Lead:</b> Ensures timely updates to clients,
              employees, and stakeholders during and after the incident.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Disaster Recovery Procedures</b>
          </h2>
          <h3>
            <b>Initial Assessment</b>
          </h3>
          <ul>
            <li>
              Evaluate the impact of the disruption on cloud systems and remote
              access.
            </li>
            <li>
              Notify the Disaster Recovery Team to initiate the DRP if
              necessary.
            </li>
            <li>
              Document incident details, including the cause, affected systems,
              and estimated downtime.
            </li>
          </ul>
          <h3>
            <b>Data Backup and Restoration</b>
          </h3>
          <ul>
            <li>
              <b>Cloud-Based Backup:</b> Ensure all critical data is backed up
              in Google Workspace and verified by regular checks.
            </li>
            <li>
              <b>Remote Device Protocol:</b> Employees are instructed to store
              work files on approved, encrypted cloud storage rather than local
              drives.
            </li>
            <li>
              <b>Data Restoration:</b> Initiate data recovery from cloud
              backups, prioritizing access to client files, project management
              systems, and communication tools.
            </li>
          </ul>
          <h3>
            <b>System Restoration and Access Verification</b>
          </h3>
          <ul>
            <li>
              <b>Cloud Service Restoration:</b> Work with cloud providers (e.g.,
              Google Workspace, Slack) to restore functionality and address any
              security breaches.
            </li>
            <li>
              <b>Remote Device Access Testing:</b> Ensure that all employees can
              securely access cloud services from their devices once restored.
            </li>
            <li>
              <b>Alternate Access Measures:</b> If primary cloud services are
              unavailable, establish backup solutions, such as alternate
              communication platforms (e.g., Microsoft Teams as a backup to
              Slack).
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Communication Plan</b>
          </h2>
          <ul>
            <li>
              <b>Internal Communications:</b> Use designated platforms (e.g.,
              email, Slack, Zoom) to update employees on recovery status and
              interim steps.
            </li>
            <li>
              <b>Client Communication:</b> Notify clients about the disruption,
              estimated recovery times, and any temporary solutions in place.
            </li>
            <li>
              <b>Regular Updates:</b> Provide scheduled updates to all parties
              throughout the recovery process until full operations resume.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Security of Remote Devices and Networks</b>
          </h2>
          <ul>
            <li>
              <b>Device Compliance:</b> Ensure employee devices meet security
              standards, including encryption, VPN access, and antivirus
              protection.
            </li>
            <li>
              <b>Endpoint Monitoring:</b> Activate remote monitoring tools to
              confirm that all employee devices comply with security policies
              during and after the recovery process.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Testing and Maintenance</b>
          </h2>
          <ul>
            <li>
              <b>Annual Testing:</b> Test the DRP annually to validate remote
              recovery procedures and identify potential gaps in the plan.
            </li>
            <li>
              <b>Remote Scenario Testing:</b> Test remote access restoration
              from various locations and devices to ensure that recovery steps
              align with the remote work environment.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Post-Recovery Review</b>
          </h2>
          <ul>
            <li>
              <b>Evaluation:</b> Conduct a post-recovery review to assess the
              DRP’s effectiveness, focusing on remote access and cloud system
              recovery.
            </li>
            <li>
              <b>Employee Feedback:</b> Gather feedback from remote employees on
              accessibility and recovery experience to identify improvements.
            </li>
            <li>
              <b>Plan Updates:</b> Update the DRP as needed based on feedback,
              changes in cloud services, or business operations.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="slate">
            <b>Plan Approval and Review</b>
          </h2>
          <p>
            This DRP is reviewed annually and updated as necessary to ensure it
            reflects RSO Consulting&apos;s remote operational needs and current
            technology stack.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default DisasterRecoveryPlan;
