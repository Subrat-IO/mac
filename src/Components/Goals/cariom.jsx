import React from "react";
import styles from "./style.module.css";

export default function MACGoals() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bannerImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1470" 
          alt="Goals banner" 
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Our Goals</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> <span className={styles.breadcrumbArrow}>–</span> <span>Goals</span>
          </div>
        </div>
      </div>

      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>Content coming soon…</p>
      </div>
    </div>
  );
}
