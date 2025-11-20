import React from "react";
import styles from "./style.module.css";

export default function CoreValues() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner */}
      <div className={styles.bannerImageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1543163521-1bf75c9128e7?q=80&w=1470&auto=format&fit=crop"
          alt="Core Values banner"
          className={styles.bannerImage}
        />

        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Core Values</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbArrow}>–</span>
            <span>Core Values</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>
          The Montserrat Accreditation Council (MAC) promotes excellence and trust in education through a robust, ethical,
          and future-focused quality assurance framework.
        </p>

        <p><strong>Our Core Values</strong></p>
        <ul>
          <li><strong>Integrity:</strong> We uphold fairness and transparency in every review and decision.</li>
          <li><strong>Excellence:</strong> We maintain high standards to strengthen the quality of tertiary education.</li>
          <li><strong>Collaboration:</strong> We partner with institutions, stakeholders, and experts to enhance learning outcomes.</li>
          <li><strong>Innovation:</strong> We embrace continuous improvement and modern educational practices.</li>
          <li><strong>Equity:</strong> We ensure that all evaluations are unbiased and accessible.</li>
        </ul>
      </div>
    </div>
  );
}
