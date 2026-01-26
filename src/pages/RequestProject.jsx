import { useState } from "react";
import styles from "./RequestProject.module.css";
import emailjs from "@emailjs/browser";
import {useRef} from 'react';

export default function Project() {
  const contact = useRef(); 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9yqclrj", 
      "template_sujbfhc", 
      contact.current, 
      "te26wRMa-4UPnlX7P" 
    )
    .then((result) => {
        console.log("Success!", result.text);
        setSubmitted(true);
    }, (error) => {
        console.log("Failed...", error.text);
    });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <span className={styles.tag}>[ CONTACT ]</span>
        <h1 className={styles.title}>
          Request a project to <br /> start the conversation
        </h1>
        <p className={styles.subtitle}>
          You will hear from me within 2 business days.
        </p>
      </div>

      <div className={styles.right}>
        {!submitted ? (
          <form ref={contact} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Full name</label>
            
              <input type="text" name="from_name" required />
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>

            <div className={styles.field}>
              <label>Company</label>
              <input type="text" name="company_name" />
            </div>



            <div className={styles.field}>
              <label>Message</label>
              <input type="text" name="message" required placeholder="Project details..." />
            </div>

            <button type="submit" className={styles.submit}>Submit</button>
          </form>
        ) : (
          <div className={styles.successWrapper}>
            <h2 className={styles.successTitle}>Thank you for your submission!</h2>
          </div>
        )}
      </div>
    </section>
  );
}