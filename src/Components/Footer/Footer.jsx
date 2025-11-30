import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

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
        </div>

        {/* Contact Us */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerContact}>
            First Floor,
            <br />
            The Phoenix Centre,
            <br />
            George Street, St Michael
            <br />
            SSS12112 MONTSERRAT
            <br />
            <br />
            <span className={styles.footerHighlight}>info@macgov.net</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/cariom">CARICOM Skills Portal</Link>
            </li>
            <li>
              <Link to="/registration">Student Portal</Link>
            </li>
            <li>
              <Link to="/accredition">Institutions’ Portal</Link>
            </li>
            <li>
              <Link to="/accreditionprovider">Accredited Providers</Link>
            </li>
            <li>
              <Link to="/registrationproviders">Registered Providers</Link>
            </li>
            <li>
              <Link to="/downloadform">Downloads and Forms</Link>
            </li>
          </ul>
        </div>

        {/* Map + Payment */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Location</h3>
          <div className={styles.footerMapContainer}>
            <iframe
              title="Google Map"
              className={styles.footerMap}
              allowFullScreen
              loading="lazy"
              src="https://maps.google.com/maps?q=Montserrat&t=&z=10&ie=UTF8&iwloc=&output=embed"
            ></iframe>

            <div className={styles.footerCards}>
              <img
                src="https://bac.gov.bb/wp-content/uploads/2022/03/payment-icon-mc-visa.png"
                alt="Payment Options"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------- BOTTOM ------- */}
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          © Copyright {new Date().getFullYear()} Montserrat Accreditation
          Council
        </div>

        <div className={styles.footerPolicyLinks}>
          <Link to="/contact">Contact Us</Link>
          <span>|</span>
          <Link to="/terms">Terms of Use</Link>
          <span>|</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
