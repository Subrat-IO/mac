import React from "react";
import styles from "./style.module.css";

export default function Recognitionofawardies() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Image Full Width */}
      <div className={styles.bannerImageWrapper}>
        <img
          src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?semt=ais_incoming&w=740&q=80"
          alt="Accreditation banner"
          className={styles.bannerImage}
        />
        {/* Overlay content if you want breadcrumb/title over the image */}
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Accreditation</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> <span className={styles.breadcrumbArrow}>–</span>{" "}
            <span>Accreditation</span>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div
        className={styles.centeredSection}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <p>
          Accreditation is a process in which a programme of study or an
          institution is assessed for standards and receives official
          recognition. In Montserrat, the Montserrat Accreditation Council (MAC)
          manages the accreditation process to ensure that educational quality
          and integrity are upheld at the post-secondary and tertiary levels.
        </p>
        <h2 style={{ marginTop: "25px" }}>🏅 Recognition of Awarding Bodies</h2>
        <p>
          MAC works closely with regional and international awarding bodies to
          ensure that certificates, diplomas, and professional training
          programmes delivered in Montserrat meet quality standards. Recognition
          of awarding bodies improves student mobility, strengthens employer
          confidence, and supports qualifications that hold value beyond local
          borders.
        </p>

        <ul className={styles.mediaList}>
          <li>
            <strong>Endorsement of Professional Training Agencies:</strong>{" "}
            Supporting reputable industry-based qualification providers.
          </li>
          <li>
            <strong>Regional Qualification Recognition:</strong> Collaboration
            with CARICOM agencies for academic and technical qualification
            alignment.
          </li>
          <li>
            <strong>Evaluation of Foreign Awarding Bodies:</strong> Ensuring
            that international qualifications meet acceptable standards before
            recognition.
          </li>
          <li>
            <strong>Public Publication of Recognised Bodies:</strong> Promoting
            transparency by listing approved organisations for public awareness.
          </li>
        </ul>

        <p style={{ marginTop: "10px" }}>
          Institutions and employers may request verification of awarding bodies
          to determine whether certifications can be officially recognized for
          employment, transfer, or continued education.
        </p>
      </div>
    </div>
  );
}
