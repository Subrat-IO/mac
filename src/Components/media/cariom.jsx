import React from "react";
import styles from "./style.module.css";

export default function MACMedia() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bannerImageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1515169273895-d7dcd6c9d0e3?q=80&w=1470"
          alt="Media banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Media</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> <span className={styles.breadcrumbArrow}>–</span>{" "}
            <span>Media</span>
          </div>
        </div>
      </div>

      <div
        className={styles.centeredSection}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <p>
          The Montserrat Accreditation Council (MAC) engages with media
          partners, educational institutions, and the general public to promote
          awareness, transparency, and accountability in higher education. This
          page provides access to featured media content, awareness campaigns,
          public statements, and official communication tools.
        </p>

        <h2 style={{ marginTop: "25px" }}>
          🎥 Public Awareness & Educational Campaigns
        </h2>
        <ul className={styles.mediaList}>
          <li>
            <strong>Understanding Accreditation:</strong> Educational video on
            why accreditation matters for students and employers.
          </li>
          <li>
            <strong>How to Verify Accreditation Status:</strong> Public
            awareness infographic series published quarterly.
          </li>
          <li>
            <strong>Choosing Registered Training Providers:</strong> Audio
            campaign broadcasted through local radio stations.
          </li>
        </ul>

        <h2 style={{ marginTop: "25px" }}>📰 News & Media Highlights</h2>
        <ul className={styles.mediaList}>
          <li>
            <strong>MAC Launches New Quality Standards Initiative</strong> –
            Featured on national radio and education networks.
          </li>
          <li>
            <strong>Strengthening Student Protection Regulations</strong> –
            Highlighted in regional CARICOM education media.
          </li>
          <li>
            <strong>Public Advisory on Accredited Institutions</strong> – Shared
            via press, government bulletins, and online platforms.
          </li>
        </ul>

        <h2 style={{ marginTop: "25px" }}>📸 Events & Outreach</h2>
        <ul className={styles.mediaList}>
          <li>Accreditation Workshops with training providers.</li>
          <li>Stakeholder consultations with tertiary education partners.</li>
          <li>Public seminars on foreign qualification recognition.</li>
        </ul>

        <h2 style={{ marginTop: "25px" }}>📬 Media Requests</h2>
        <p>
          For interviews, official comments, press materials, logos, or event
          coverage, please submit a media request through our office. Accredited
          media organizations are welcome to feature MAC resources for
          educational reporting.
        </p>

        <p style={{ marginTop: "8px" }}>
          To submit a request,{" "}
          <a href="#contactMAC" className={styles.inlineLink}>
            contact the MAC office
          </a>
          .
        </p>
      </div>
    </div>
  );
}
