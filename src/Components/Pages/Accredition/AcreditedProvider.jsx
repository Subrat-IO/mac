import React from "react";
import styles from   "./style.module.css";

export default function AccreditedProvidersPage() {
  return (
    <div className={`${styles.pageWrapper} mt-5 p-5` }>
      <div className={styles.simpleBreadcrumb}>
        Home <span className={styles.breadcrumbArrow}>»</span> Accredited Providers
      </div>
      <h1 className={styles.heading}>Accredited Providers</h1>
      <h2 className={styles.sectionTitle}>
        List of Accredited Post-Secondary/Tertiary Education and Training Providers in Montserrat
      </h2>
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
                <a href="#" className={styles.linkHighlight}>Montserrat Community College</a>
              </td>
              <td>2024–2031</td>
            </tr>
            <tr>
              <td>
                <a href="#" className={styles.linkHighlight}>University of the West Indies Montserrat Campus</a>
              </td>
              <td>2022–2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={styles.sectionTitle}>
        List of Accredited Programmes of Study in Montserrat
      </h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name of Provider</th>
              <th>Programme of Study</th>
              <th>Accreditation Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#" className={styles.linkHighlight}>Montserrat Community College</a>
              </td>
              <td>Montserrat Diploma in Education</td>
              <td>2023–2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
