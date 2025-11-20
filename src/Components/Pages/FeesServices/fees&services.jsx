import React from "react";
import styles from "./style.module.css";

export default function FeesandServices() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner */}
      <div className={styles.bannerImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1581093458791-9d7cb1901dcc?q=80&w=1470&auto=format&fit=crop" 
          alt="Fees banner" 
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Fees for Services</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> 
            <span className={styles.breadcrumbArrow}>–</span> 
            <span>Fees for Services</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.centeredSection} style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <p>
          The Montserrat Accreditation Council (MAC) applies service fees to support certification, 
          evaluation, accreditation, and monitoring processes. Fees vary based on the type of institution, 
          assessment level, and service requested.
        </p>

        <h2 className={styles.subHeading}>📌 Institutional Registration Fees</h2>
        <table className={styles.feesTable}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Application for Institutional Registration</td>
              <td>$800</td>
            </tr>
            <tr>
              <td>Renewal of Registration (every 3 years)</td>
              <td>$450</td>
            </tr>
            <tr>
              <td>Site Visit Evaluation</td>
              <td>$1500 + Travel</td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.subHeading}>🎓 Programme Accreditation Fees</h2>
        <table className={styles.feesTable}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Application for Programme Accreditation</td>
              <td>$600 per Programme</td>
            </tr>
            <tr>
              <td>Reaffirmation Review</td>
              <td>$450 per Programme</td>
            </tr>
            <tr>
              <td>Programme Evaluation & Site Visit</td>
              <td>$1500 + Travel + Assessor Fees</td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.subHeading}>🏛 Recognition & Equivalency Fees</h2>
        <table className={styles.feesTable}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recognition of Foreign Award Bodies</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>Recognition of Foreign Qualifications</td>
              <td>$150 per Certificate</td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.subHeading}>🧾 Additional Services</h2>
        <table className={styles.feesTable}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Certified Copies of Certificates / Reports</td>
              <td>$25 per Copy</td>
            </tr>
            <tr>
              <td>Replacement of Certificates</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Consultation Meeting (per hour)</td>
              <td>$75</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Note:</strong> All fees must be paid before evaluation and are non-refundable 
          once processing has begun. Additional expenses such as travel and accommodation are 
          billed where applicable.
        </p>

        <p>
          For quotation requests or invoicing enquiries, please 
          <a href="contactus" className={styles.inlineLink}> contact the MAC office</a>.
        </p>

      </div>
    </div>
  );
}
