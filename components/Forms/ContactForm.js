import React from "react";

import Button from "../UI/Buttons/Button";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form
      className={styles["contact-form"]}
      action="https://submit-form.com/vCTcQOVT"
    >
      <input
        type="hidden"
        name="_redirect"
        value="https://www.rso-consulting.com/welcome-to-rso-consulting"
      />
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
        <label className="uhohhoney" htmlFor="email2">
          <input
            className="uhohhoney"
            autoComplete="off"
            type="email"
            id="email2"
            name="email2"
            placeholder="Your e-mail here"
          />
        </label>
        <div className={styles["btn-container"]}>
          <Button type="submit">SUBMIT</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
