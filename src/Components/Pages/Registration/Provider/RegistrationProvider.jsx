import React from "react";
import styles from "./style.module.css";

const providers = [
  {
    name: "Vanguard University School of Medicine",
    place: "Montserrat",
    focus: "Medical Education",
    level: "Certificate for all",
  },
  {
    name: "Montserrat Technical College",
    place: "Montserrat",
    focus: "Faith-based educational programmes",
    level: "Certificate for all",
  },
  {
    name: "Samuel Academy",
    place: "Montserrat",
    focus: "Teacher Training",
    level: "Certificate for all",
  },
  {
    name: "St. Augustine Catholic Primary School",
    place: "Montserrat",
    focus: "Christian – pastoring, educational & service activities",
    level: "Certificate for all",
  },
];

export default function RegisteredProvidersPage() {
  // 🔥 Same color for all provider names
  const nameStyle = {
    textDecoration: "underline",
    color: "#b57d15",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Banner Section */}
      <div className={styles.bannerSection}>
        <h1 className={styles.pageTitle}>Registered Providers</h1>
        <div className={styles.breadcrumb}>
          <span>Home</span> <span className={styles.breadcrumbArrow}>–</span>{" "}
          <span>Registered Providers</span>
        </div>
      </div>

      {/* Main Heading */}
      <section className={styles.centeredSection}>
        <h2 className={styles.subtitle}>
          List of Registered Post-secondary/Tertiary Educational Providers as at
          January 31st, 2025
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
                <td className={styles.highlightCol}>
                  {prov.name === "Vanguard University School of Medicine" ? (
                    <a
                      href="https://vusom.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={nameStyle}
                    >
                      {prov.name}
                    </a>
                  ) : (
                    <span style={nameStyle}>{prov.name}</span>
                  )}
                </td>

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
