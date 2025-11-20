import React from "react";
import styles from "./style.module.css";

export default function CapacityBuilding() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Image Full Width */}
      <div className={styles.bannerImageWrapper}>
        <img 
          src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?semt=ais_incoming&w=740&q=80" 
          alt="Capacity Building banner" 
          className={styles.bannerImage}
        />
        
        {/* Overlay Title + Breadcrumb */}
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Capacity Building</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> 
            <span className={styles.breadcrumbArrow}>–</span> 
            <span>Capacity Building</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <p>
          The Montserrat Accreditation Council (MAC) is committed to strengthening 
          the quality and effectiveness of tertiary and post-secondary education. 
          <strong> Capacity building </strong> ensures that institutions, educators, and stakeholders 
          have the knowledge, systems, and resources to meet recognized quality standards.
        </p>

        <p><strong>What is Capacity Building?</strong></p>
        <p>
          Capacity building refers to structured support provided to education providers 
          to improve their governance, programme delivery, evaluation processes, and long-term 
          institutional development. MAC facilitates training, workshops, consultations, and 
          technical guidance to support educational excellence.
        </p>

        <p><strong>What Support Does MAC Provide?</strong></p>
        <ul>
          <li>Training workshops on accreditation, audits, and quality assurance systems.</li>
          <li>Guidance on developing institutional policies and operational standards.</li>
          <li>Technical assistance for self-studies, compliance, and documentation.</li>
          <li>Capacity development for leadership, teaching staff, and quality officers.</li>
          <li>Assistance in curriculum review and programme alignment with national needs.</li>
        </ul>

        <p><strong>Who Benefits from Capacity Building?</strong></p>
        <p>Capacity building positively impacts:</p>
        <ul>
          <li><strong>Administrators</strong> — through improved institutional planning and management.</li>
          <li><strong>Educators</strong> — with skills for curriculum and assessment improvement.</li>
          <li><strong>Students</strong> — benefiting from enriched learning environments and higher quality programmes.</li>
          <li><strong>Employers & Society</strong> — through better prepared graduates and national development outcomes.</li>
        </ul>

        <p><strong>Upcoming Training & Workshops</strong></p>
        <p>
          To stay informed about upcoming capacity building activities, 
          <a href="#register" className={styles.inlineLink}> click here to register your interest</a>.
        </p>

      </div>
    </div>
  );
}
