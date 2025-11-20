import React from "react";
import styles from "./style.module.css";

const DashboardSection = () => (
  <section className={styles.dashboardSection}>
    <div className={styles.dashboardHeader}>
      <h2>
        We are the sole authority responsible for <br />
        upholding the quality and integrity <of>" "</of>
        <br />
        of <span className={styles.highlight}>post-secondary</span> and{" "}
        <span className={styles.highlight}>tertiary</span> education and <br />
        training in Montserrat.
      </h2>
    </div>

    {/* GRID */}
    <div className={styles.dashboardGrid}>
      <div className={`${styles.dashboardGridLeft}`}>
        <div className={`${styles.dashboardImgCard} ${styles.animateIn}`}>
          <img
            src="https://cdn02.plentymarkets.com/k8j71m70f8ri/frontend/pheno-flags/Startseite/modern/1-1_Laenderflaggen.jpeg"
            alt="CARICOM Flags"
          />
          <div className={styles.dashboardCardLabel}>
            CARICOM Skilled Nationals
          </div>
        </div>
      </div>

      <div className={styles.dashboardGridRight}>
        <div
          className={`${styles.dashboardImgCard} ${styles.animateIn} ${styles.delay}`}
        >
          <img
            src="https://www.quickanddirtytips.com/wp-content/uploads/2022/05/ezgif.com-gif-maker-3.jpg"
            alt="Students"
          />
          <div className={styles.dashboardCardLabel}>Students</div>
        </div>

        <div
          className={`${styles.dashboardImgCard} ${styles.animateIn} ${styles.delay2}`}
        >
          <img
            src="https://bac.gov.bb/wp-content/uploads/2020/11/Institutions-2-1024x328.jpg"
            alt="Institutions"
          />
          <div className={styles.dashboardCardLabel}>Institutions</div>
        </div>
      </div>
    </div>

    {/* BOTTOM STATS */}
    <div className={styles.dashboardStatsBar}>
      <div>
        <span className={styles.statNumber}>29</span>
        <div className={styles.statLabel}>Registered Institutions</div>
      </div>
      <div>
        <span className={styles.statNumber}>3</span>
        <div className={styles.statLabel}>Accredited Institutions</div>
      </div>
      <div>
        <span className={styles.statNumber}>2500+</span>
        <div className={styles.statLabel}>CARICOM Skills Certificates</div>
      </div>
    </div>
  </section>
);

export default DashboardSection;
