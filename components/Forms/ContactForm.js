import React from "react";

import Button from "../UI/Buttons/Button";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form
      className={styles["contact-form"]}
      action="https://submit-form.com/vCTcQOVT"
    >
      <div className="col-2 unset collapse">
        <input
          placeholder="First Name*"
          id="first-name"
          maxLength="40"
          name="First Name"
          type="text"
          required
        />
        <input
          placeholder="Last Name*"
          id="last-name"
          maxLength="40"
          name="Last Name"
          type="text"
          required
        />
        <input
          placeholder="Email*"
          id="email"
          maxLength="60"
          name="Email"
          type="email"
          required
        />
        <input
          placeholder="Phone"
          id="phone"
          name="Phone"
          maxLength="20"
          type="text"
        />
        <textarea
          placeholder="Message*"
          id="message"
          name="message"
          rows="5"
          type="text"
          wrap="soft"
          required
        />
        <div className={styles["btn-container"]}>
          <Button type="submit">SUBMIT</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
