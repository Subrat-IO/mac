import React from "react";
import styles from "./style.module.css";

function LatestNews() {
  return (
    <div className={styles.lnsSection}>
      <h2 className={styles.lnsTitle}>Latest News</h2>
      <p className={styles.lnsSubtitle}>
        Stay informed with the latest updates, developments, and announcements from the MAC.
      </p>

      <div className={styles.lnsCardsRow}>

        {/* ------ CARD 1 ------ */}
        <div className={styles.lnsCard}>
          <div className={styles.lnsCardImgBox}>
            <img
              src="/src/assets/Logo.png"
              alt="MAC Logo"
              className={styles.lnsCardImg}
            />
            <span className={styles.lnsNewsLabel}>LATEST NEWS</span>
          </div>

          <div className={styles.lnsCardBody}>
            <h4 className={styles.lnsCardHeadline}>
              MAC Launches “Recognition Matters” Campaign to Strengthen Public Awareness
            </h4>
            <p className={styles.lnsCardSummary}>
              Brades, Montserrat – November 10, 2025 – The Montserrat Accreditation Council (MAC) has launched “Recognition Matters”, a national awareness campaign designed to help the public better understand the importance of MAC’s recognition services.
            </p>
            <a href="#" className={styles.lnsCardLink}>READ MORE »</a>
          </div>

          <div className={styles.lnsCardDate}>November 10, 2025</div>
        </div>

        {/* ------ CARD 2 ------ */}
        <div className={styles.lnsCard}>
          <div className={styles.lnsCardImgBox}>
            <img
              src="/src/assets/Logo.png"
              alt="MAC Logo"
              className={styles.lnsCardImg}
            />
            <span className={styles.lnsNewsLabel}>LATEST NEWS</span>
          </div>

          <div className={styles.lnsCardBody}>
            <h4 className={styles.lnsCardHeadline}>
              MAC Highlights Updates to Regional Free Movement Regulations
            </h4>
            <p className={styles.lnsCardSummary}>
              Brades, Montserrat – September 17, 2025 – The Montserrat Accreditation Council (MAC), the national authority responsible for the CARICOM Skills Certificate, has welcomed new regional updates aimed at improving the free movement of skilled workers across CARICOM states.
            </p>
            <a href="#" className={styles.lnsCardLink}>READ MORE »</a>
          </div>

          <div className={styles.lnsCardDate}>September 17, 2025</div>
        </div>

        {/* ------ CARD 3 ------ */}
        <div className={styles.lnsCard}>
          <div className={styles.lnsCardImgBox}>
            <img
              src="https://bac.gov.bb/wp-content/uploads/2025/07/BAC-WEBSITE-STATS-GRAPHIC-300x191.png"
              alt="Statistics Graphic"
              className={styles.lnsCardImg}
            />
            <span className={styles.lnsNewsLabel}>LATEST NEWS</span>
          </div>

          <div className={styles.lnsCardBody}>
            <h4 className={styles.lnsCardHeadline}>
              MAC by the Numbers – Quarter 1, 2025 Report
            </h4>
            <p className={styles.lnsCardSummary}>
              The Certificate of Recognition of CARICOM Skills Qualification continues to support the movement of certified skilled professionals across the region. MAC’s Quarter 1 report shows steady growth in applications, assessments, and approvals throughout 2025.
            </p>
            <a href="#" className={styles.lnsCardLink}>READ MORE »</a>
          </div>

          <div className={styles.lnsCardDate}>July 10, 2025</div>
        </div>

      </div>
    </div>
  );
}

export default LatestNews;


