import React from "react";
import styles from "./style.module.css";

export default function FunctionsAndPowers() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner */}
      <div className={styles.bannerImageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1561084854-7d9eaa627e5d?q=80&w=1470&auto=format&fit=crop"
          alt="Functions and Powers banner"
          className={styles.bannerImage}
        />

        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Functions & Powers</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbArrow}>–</span>
            <span>Functions & Powers</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>
          MAC safeguards educational quality in Montserrat by evaluating institutions and programmes against established standards,
          while guiding them toward sustainable development.
        </p>

        <p><strong>Key Functions & Powers</strong></p>
        <ul>
          <li>Accredit and register institutions and programmes at the post-secondary and tertiary level.</li>
          <li>Conduct quality audits, evaluations, and institutional assessments.</li>
          <li>Grant, deny, renew, or revoke accreditation based on compliance with established criteria.</li>
          <li>Recognize foreign academic qualifications and advise on equivalency.</li>
          <li>Develop policies to strengthen quality assurance in education.</li>
          <li>Provide training, workshops, and technical support to institutions pursuing accreditation.</li>
        </ul>
      </div>
    </div>
  );
}
