import styles from './RegistrationInfo.module.css';

const RegistrationInfo = () => (
  <div className={styles.container}>
    <nav className={styles.breadcrumb}>
      <span>Home</span> <span className={styles.arrow}>&raquo;</span>
      <span className={styles.current}>Registration</span>
    </nav>
    <h2 className={styles.heading}>How To Become Registered?</h2>
    <p className={styles.paragraph}>
      To become registered, the provider must meet the requirements established by the Council and pay the requisite fees. Once a provider is registered, it may then apply for accreditation of the institution and/or programme(s) of study or courses. Registration shall be for a period of one (1) calendar year (January to December) after which the provider must re-apply to maintain its status. Registered providers are required to apply for <span className={styles.highlight}>re-registration</span> at least two (2) months before the registration period expires and pay the requisite registration fee.
    </p>
    <h3 className={styles.subheading}>
      For full information on how to become a registered provider, view the information highlighted below.
    </h3>
    <div className={styles.section}>
      <h4 className={styles.label}>Methods of Payment</h4>
      <p>
        Payment of the requisite application fee is due upon notification of registration approval.
      </p>
      <ul className={styles.list}>
        <li>cash;</li>
        <li>company cheque;</li>
        <li>bank draft;</li>
        <li>certified cheque;</li>
        <li>debit card; or</li>
        <li>credit card.</li>
      </ul>
    </div>

    <div className={styles.section}>
      <h4 className={styles.label}>Registration Application Costs</h4>
      <p>The application fee for registration is based on enrolment numbers and is shown below:</p>
      <div className={styles.feeSection}>
        <h5 className={styles.feeTitle}>Local/CSM (CARICOM Single Market)</h5>
        <ul className={styles.feeList}>
          <li>less than 100 students – $125.00</li>
          <li>100-499 students – $250.00</li>
          <li>500-599 students – $375.00</li>
          <li>1,000-2,499 students – $500.00</li>
          <li>2,500-3,999 students – $750.00</li>
          <li>4,000 and over students – $1,000.00</li>
        </ul>
        <h5 className={styles.feeTitle}>Foreign/non-CSM and Transnational</h5>
        <ul className={styles.feeList}>
          <li>Cost is $3,000.00</li>
        </ul>
      </div>
    </div>

    <div className={styles.section}>
      <p>
        For the full guidelines of the registration process, click below: <br/>
        <span className={styles.linkHighlight}>Full Guidelines</span>
      </p>
      <p>
        For summarized guidelines of the registration process, click below: <br/>
        <span className={styles.linkHighlight}>Summarized Guidelines</span>
      </p>
    </div>
  </div>
);

export default RegistrationInfo;
