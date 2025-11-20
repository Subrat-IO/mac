import React from "react";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footerMain}>

      {/* ------- TOP SECTION ------- */}
      <div className={styles.footerTop}>
        
        {/* Portal */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Portal</h3>
          <p className={styles.footerText}>
            Access to the Official <br />
            Website of the 🇲🇸 Montserrat Government
          </p>
          {/* <img
            alt="BiG Logo"
            className={styles.footerLogo}
          /> */}
        </div>

        {/* Contact Us */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerContact}>
            First Floor,<br />
            The Phoenix Centre,<br />
            George Street, St Michael<br />
            SSS12112 MONTSERRAT<br /><br />
            <span className={styles.footerHighlight}>info@macgov.net</span><br />
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>CARICOM Skills Portal</li>
            <li>Student Portal</li>
            <li>Institutions’ Portal</li>
            <li>Accredited Providers</li>
            <li>Registered Providers</li>
            <li>Downloads and Forms</li>
          </ul>
        </div>

        {/* Location */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Location</h3>
          <div className={styles.footerMapContainer}>
            <iframe
              title="Google Map"
              className={styles.footerMap}
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className={styles.footerCards}>
              <img src="https://bac.gov.bb/wp-content/uploads/2022/03/payment-icon-mc-visa.png" alt="Visa" />
              
            </div>
          </div>
        </div>

      </div>

    <div className={styles.footerBottom}>
  <div className={styles.footerCopyright}>
    © Copyright 2023 Montserrat Accreditation Council
  </div>

  <div className={styles.footerPolicyLinks}>
    <a href="#">Contact Us</a>
    <span>|</span>
    <a href="#">Terms of Use</a>
    <span>|</span>
    <a href="#">Privacy Policy</a>
  </div>
</div>

    </footer>
  );
}

export default Footer;
