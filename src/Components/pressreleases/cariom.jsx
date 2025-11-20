import React from "react";
import styles from "./style.module.css";

export default function MACPressReleases() {
  return (
    <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
  <p>
    The Montserrat Accreditation Council (MAC) is committed to building a strong and credible education sector through
    transparency, policy updates, quality initiatives, and stakeholder engagement. All press releases provide important
    updates on accreditation decisions, institutional developments, quality assurance activities, partnerships, and public notices.
  </p>

  <h2 style={{ marginTop: "28px" }}>Latest Announcements</h2>

  <ul className={styles.pressList}>
    <li>
      <strong>MAC Strengthens Oversight of Tertiary Education Providers</strong>
      <p className={styles.pressDate}>February 2025</p>
      <p>
        The Council has introduced updated quality assurance protocols to enhance institutional accountability and 
        programme evaluation standards. These measures reinforce transparency and improve monitoring of student outcomes.
      </p>
    </li>

    <li>
      <strong>Public Advisory: Use of Accredited Institutions</strong>
      <p className={styles.pressDate}>December 2024</p>
      <p>
        MAC advises students, parents, and employers to verify the accreditation status of tertiary institutions before enrollment 
        or recognition of certificates. Verification reduces the risk of illegitimate educational claims.
      </p>
    </li>

    <li>
      <strong>Partnership Initiative to Support Quality Training Providers</strong>
      <p className={styles.pressDate}>September 2024</p>
      <p>
        MAC is expanding technical guidance workshops aimed at assisting private and public training providers to meet national 
        registration and accreditation standards.
      </p>
    </li>
  </ul>

  <p style={{ marginTop: "30px" }}>
    Additional press releases and public notices will be published as new developments arise. For media inquiries or requests for 
    official statements, please <a href="#contactMAC" className={styles.inlineLink}>contact the MAC office</a>.
  </p>
</div>

  );
}
