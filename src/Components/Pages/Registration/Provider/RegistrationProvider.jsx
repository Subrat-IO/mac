import React from "react";
import styles from "./style.module.css";

const providers = [
  {
    name: "3D’s Educational & Skills Training Institute",
    place: "Salvation Army Lighthouse Centre, Speightstown, St. Peter",
    focus: "Business, Childcare, Care for Elderly, Law, ICT, Vocational Training",
    level: "Certificate",
  },
  {
    name: "Advantage Caribbean Institute Ltd.",
    place: "Suite #7, Courtyard By Marriott, Hastings, Christ Church BB15156",
    focus: "ICT and Business Skills Training",
    level: "Certificate",
  },
  {
    name: "Allied Health Institute",
    place: "Whitehall, St. Michael",
    focus: "Courses in Nursing",
    level: "Certificate",
  },
  {
    name: "Barbados Community College",
    place: "“Eyrie” Howell’s Cross Road, St. Michael",
    focus: "General and Specialized Areas of study",
    level: "Certificate, Diploma, Associate Degree, Post-Associate Degree Diploma, Bachelor’s Degree, Postgraduate Degree, Diploma",
  },
  // Add more as needed…
];

export default function RegisteredProvidersPage() {
  return (
    <div className={styles.pageWrapper}>

      {/* Banner Section */}
      <div className={styles.bannerSection}>
        <h1 className={styles.pageTitle}>Registered Providers</h1>
        <div className={styles.breadcrumb}>
          <span>Home</span> <span className={styles.breadcrumbArrow}>–</span> <span>Registered Providers</span>
        </div>
      </div>

      {/* Main Heading */}
      <section className={styles.centeredSection}>
        <h2 className={styles.subtitle}>
          List of Registered Post-secondary/Tertiary Educational Providers as at January 31st, 2025
        </h2>
      </section>

      {/* Providers Table */}
      <div className={styles.tableContainer}>
        <table className={styles.providersTable}>
          <thead>
            <tr>
              <th>Name of Provider</th>
              <th>Place of Operation</th>
              <th>Educational Focus</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((prov, idx) => (
              <tr key={idx}>
                <td className={styles.highlightCol}>{prov.name}</td>
                <td>{prov.place}</td>
                <td>{prov.focus}</td>
                <td>{prov.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
