import React from "react";
import styles from "./style.module.css";

// Replace with your image import or external link
const bgImg = "https://bac.gov.bb/wp-content/uploads/2020/11/contact-01.jpg";

function ContactHero() {
  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={styles.overlay} />
        <div className={styles.breadcrumbs}>
          <span>
            Home » <span className={styles.breadcrumbCurrent}>Contact Us</span>
          </span>
        </div>
        <h1 className={styles.title}>Contact Us</h1>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.columns}>
          {/* Left side: Info */}
          <div className={styles.left}>
            <div className={styles.cross}>Quickly unleash cross</div>
            <h2 className={styles.heading}>Get In Touch</h2>
            <div className={styles.hrAccent}></div>
            <p className={styles.infoText}>
              Would you like to speak to one of our Quality Assurance Officers
              about your institution or programme? Your comments are important
              to us and we will address them as quickly as possible.
              <br />
              <br />
              Our team is committed to providing you with the best information
              to help assure quality as an educational provider. To schedule a
              meeting, fill out this form.
              <br />
              <br />
              We have lots of information already available on-line which may be
              exactly what you need. We invite you to start by reading the{" "}
              <a className={styles.link} href="#">
                Frequently Asked Questions (FAQs)
              </a>{" "}
              and{" "}
              <a className={styles.link} href="#">
                About Us
              </a>{" "}
              web pages where many of your questions may already have been
              addressed.
            </p>
          </div>

          {/* Right side: Form */}
          <div className={styles.right}>
            <div className={styles.cross}>Quickly unleash cross</div>
            <h2 className={styles.heading}>Get In Touch</h2>
            <div className={styles.hrAccent}></div>
            <form className={styles.form}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Full Name *"
                  required
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className={styles.rowFull}>
                <select className={styles.select}>
                  <option>Inquiry</option>
                  <option>Meeting</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className={styles.rowFull}>
                <textarea
                  className={styles.textarea}
                  rows={4}
                  placeholder="Message *"
                  required
                />
              </div>
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={styles.hoursBox}>
          <p className={styles.visit}>Come Pay Us A Visit</p>

          <h2 className={styles.hoursTitle}>
            Opening Days and
            <br />
            Hours
          </h2>

          <div className={styles.hoursAccent}></div>

          <p className={styles.schedule}>
            Monday – Friday, 8:15 a.m. to 4:30 p.m.
            <br />
            Cashier: Monday – Friday, 8:30 a.m. to 3:30 p.m.
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactHero;
