import React from "react";
import styles from "./style.module.css";

export default function CariomFeesServices() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Image Full Width */}
      <div className={styles.bannerImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1580822184713-fc5400cdae36?q=80&w=1470&auto=format&fit=crop" 
          alt="Fees and Services banner" 
          className={styles.bannerImage}
        />
        
        {/* Overlay Content */}
        <div className={styles.bannerOverlay}>
          <h1 className={styles.pageTitle}>Fees & Services</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span> 
            <span className={styles.breadcrumbArrow}>–</span> 
            <span>Fees & Services</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.centeredSection} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p>
          The Montserrat Accreditation Council (MAC) offers a range of quality assurance services to support educational institutions at the post-secondary and tertiary levels. 
          These services ensure that programmes, institutions, and certifications meet nationally recognized standards of excellence.
        </p>

        <p><strong>What Services Does MAC Provide?</strong></p>
        <ul>
          <li>Accreditation of institutions</li>
          <li>Accreditation of academic and professional programmes</li>
          <li>Registration of education and training providers</li>
          <li>Quality audits and evaluations</li>
          <li>Recognition of foreign qualifications</li>
          <li>Advice and training on quality assurance systems</li>
        </ul>

        <p><strong>Fees for Accreditation & Services</strong></p>
        <p>
          Fees are charged based on the type of institution, programme, or quality assurance service requested. 
          Fees support evaluation processes, expert assessors, site visits, and administrative oversight.
        </p>

        <ul>
          <li>
            <a href="#institutionalFees" className={styles.inlineLink}>Click here</a> to view Institutional Accreditation Fees
          </li>
          <li>
            <a href="#programmeFees" className={styles.inlineLink}>Click here</a> to view Programme Accreditation Fees
          </li>
          <li>
            <a href="#registrationFees" className={styles.inlineLink}>Click here</a> to view Registration & Evaluation Fees
          </li>
        </ul>

        <p><strong>Payment & Billing Information</strong></p>
        <p>
          Institutions must pay applicable fees prior to site visits and evaluation processing. 
          Invoices are issued by MAC, and all fees are non-refundable once an evaluation has commenced.
        </p>

        <p><strong>Why Do Fees Matter?</strong></p>
        <p>
          Fees ensure that evaluation and accreditation procedures are transparent, credible, and aligned with regional education standards. 
          Funding supports qualified evaluators, professional reports, and ongoing monitoring of accredited institutions.
        </p>

        <p>
          For additional questions about payments or quotations, 
          <a href="#contactMAC" className={styles.inlineLink}> contact the MAC office</a>.
        </p>
      </div>
    </div>
  );
}
