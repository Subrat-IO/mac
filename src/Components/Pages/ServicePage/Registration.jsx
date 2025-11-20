import React from 'react'
import styles from "./style.module.css"

const RegistrationForms = () => (
  <div className={` p-5  ${styles.container}`}>
    <nav className={styles.breadcrumb}>
      <span>Home</span> &raquo; <span>Registration Forms</span>
    </nav>
    <h1 className={styles.heading}>Registration Forms</h1>
    <p className={styles.intro}>
      Want to register your Institution or Programme?
    </p>
    <p className={styles.note}>
      <strong>Registration forms must be submitted with appropriate signature and stamp of the institution or training provider.</strong> Please access the forms below:
    </p>
    <div className={styles.links}>
      <p>
        Fill out our registration form:&nbsp;&nbsp; <span ><a href="" className='text-warning'>Registration Application Form</a></span>
      </p>
      <p>
        Re-registration form: &nbsp; &nbsp; <span><a href="" className='text-warning'>Application for Re-registration Form</a></span>
      </p>
    </div>
  </div>
);

export default RegistrationForms;


