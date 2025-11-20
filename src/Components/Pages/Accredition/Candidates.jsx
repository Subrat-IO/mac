import React from "react";
import styles from "./style.module.css";

export default function CandidatesForAccreditationPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.simpleBreadcrumb}>
        Home <span className={styles.breadcrumbArrow}>»</span> Candidates for Accreditation
      </div>
      <div className={styles.bannerSection}>
        <img className={styles.bannerImage}
          src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?semt=ais_incoming&w=740&q=80"
          alt="Accreditation"
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.heading}>Candidates for Accreditation</h1>
          <div className={styles.bannerBreadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbArrow}>–</span>
            <span>Candidates for Accreditation</span>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>
        List of Candidates for Accreditation in Montserrat
      </h2>
      <h3 className={styles.subSectionTitle}>Institutional Accreditation</h3>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name of Provider</th>
              <th>Accreditation Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#" className={styles.linkHighlight}>
                  Samuel Jackman Prescod Institute of Technology (sample)
                </a>
              </td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
