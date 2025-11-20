import React from "react";
import styles from "./style.module.css";

export default function Fees() {
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
            <span>Home</span> <span className={styles.breadcrumbArrow}>–</span> <span>Accreditation</span>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>
          Accreditation is a process in which a programme of study or an institution is assessed for standards and receives official recognition. In Montserrat, the Montserrat Accreditation Council (MAC) manages the accreditation process to ensure that educational quality and integrity are upheld at the post-secondary and tertiary levels.
        </p>
        <p>
          <strong>Institutional accreditation</strong> focuses on evaluating the overall quality and standards of an institution, while <strong>programme accreditation</strong> assesses the standards and outcomes of a specific course or programme of study.
        </p>
        <p><strong>What are the specific standards for accreditation?</strong></p>
        <ul>
          <li>
            <a href="#institutional" className={styles.inlineLink}>Click here</a> to download the Montserrat Institutional Accreditation Standards
          </li>
          <li>
            <a href="#programme" className={styles.inlineLink}>Click here</a> to download the Programme Accreditation Standards
          </li>
        </ul>
        <p>
          MAC establishes guidelines, procedures, and standards for institutions wishing to achieve accredited status for their programmes. Accreditation signals an institution’s or programme’s commitment to quality, the competence of its faculty and staff, and the relevance of its courses and resources to national and regional needs. The Council’s decision to grant or reaffirm accreditation is based on clear criteria and the assurance of ongoing educational quality.
        </p>
        <p><strong>Why is Accreditation Important?</strong></p>
        <p>Accreditation provides significant benefits for:</p>
        <ul>
          <li>Students</li>
          <li>Institutions</li>
          <li>Employers</li>
          <li>The nation</li>
        </ul>
        <p>
          For more details about the benefits of accreditation, <a href="#benefits" className={styles.inlineLink}>click here</a>.
        </p>
      </div>
    </div>
  );
}
