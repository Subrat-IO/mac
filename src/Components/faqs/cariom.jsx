import React from "react";
import styles from "./style.module.css";

export default function MACFaqs() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bannerImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1551836022-5e4e9ec5f7f0?q=80&w=1470" 
          alt="FAQs banner" 
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>FAQs</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> <span className={styles.breadcrumbArrow}>–</span> <span>FAQs</span>
          </div>
        </div>
      </div>

      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>Content coming soon…</p>
      </div>
    </div>
  );
}
