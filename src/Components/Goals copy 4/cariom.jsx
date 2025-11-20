import React from "react";
import styles from "./style.module.css";

export default function QualityStatements() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner */}
      <div className={styles.bannerImageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1470&auto=format&fit=crop"
          alt="Quality Statements banner"
          className={styles.bannerImage}
        />

        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Quality Statements</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbArrow}>–</span>
            <span>Quality Statements</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>
          MAC ensures that accreditation and registration processes foster consistent excellence and continuous improvement
          across all educational providers in Montserrat.
        </p>

        <p><strong>Our Three Quality Commitments</strong></p>
        <ul>
          <li><strong>Accountability:</strong> We ensure that institutions uphold meaningful standards that protect learners,
          educators, and the public.</li>

          <li><strong>Evidence-Driven Decisions:</strong> All evaluations and accreditation outcomes are based on verified data,
          expert review, and professional integrity.</li>

          <li><strong>Continuous Improvement:</strong> We encourage sustainable quality development that evolves with global educational needs and innovation.</li>
        </ul>
      </div>
    </div>
  );
}
