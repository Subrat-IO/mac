import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./style.module.css";

export default function Servicepage() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: (
      <>
        <p>
          In November 2004, the Montserrat Accreditation Council (MAC) was
          established to strengthen and regulate the quality of
          post-secondary and tertiary education across Montserrat.
        </p>
        <p>
          MAC works to ensure that institutions meet regional and
          international quality assurance standards through registration,
          accreditation, programme evaluation, and recognition services.
        </p>
      </>
    ),

    vision: (
      <>
        <p>
          To be a leading authority in quality assurance for tertiary
          education, supporting excellence, innovation, and continuous
          improvement throughout Montserrat and the wider region.
        </p>
      </>
    ),

    mission: (
      <>
        <p>The Montserrat Accreditation Council seeks to fulfill its mission by:</p>
        <ul>
          <li>
            Delivering advisory, regulatory, and quality assurance services aligned with
            global best practices.
          </li>
          <li>Fostering excellence and integrity across Montserrat’s education sector.</li>
          <li>
            Strengthening partnerships that support national and regional
            development through education.
          </li>
          <li>
            Enhancing public trust through transparency, accountability, and
            service excellence.
          </li>
        </ul>
      </>
    ),
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>Home » About Us</div>

        {/* Banner */}
        <div className={styles.banner}>
          <img
            src="https://www.masslive.com/resizer/v2/O4BK2ME4PND5BKJ7H2O7CXX26I.jpeg?auth=2cad3158b6b84f8fcf13ca28ed5a2530da69ae898fc6d584d8ea32707d8e8eb6&width=1280&smart=true&quality=90"
            alt="About Banner"
          />
          <div className={styles.overlay}></div>
          <h1 className={styles.title}>About Us</h1>
        </div>

        {/* ----- WHO WE ARE SECTION ----- */}
        <div className={styles.aboutSection}>
          {/* LEFT IMAGE */}
          <div className={styles.leftImage}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG3PEQs4Nw2bWiijR5hLUwwt4kQQatJuBFQ&s"
              alt="MAC Building"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.rightContent}>
            <h1 className={styles.heading}>Who We Are</h1>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={activeTab === "overview" ? styles.activeTab : ""}
                onClick={() => setActiveTab("overview")}
              >
                OVERVIEW
              </button>

              <button
                className={activeTab === "vision" ? styles.activeTab : ""}
                onClick={() => setActiveTab("vision")}
              >
                OUR VISION
              </button>

              <button
                className={activeTab === "mission" ? styles.activeTab : ""}
                onClick={() => setActiveTab("mission")}
              >
                OUR MISSION
              </button>
            </div>

            {/* Dynamic Tab Content */}
            <div className={styles.tabContent}>{content[activeTab]}</div>

            <button className={styles.cta}>Get In Touch</button>
          </div>
        </div>
      </div>

      {/* ----- OUR GOALS SECTION ----- */}
      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.goalHeading}>Our Goals?</h1>
          <h2 className={styles.subHeading}>We’re Experienced Professionals</h2>
          <div className={styles.underline} />

          <p className={styles.description}>
            The Montserrat Accreditation Council (MAC) continues to improve the
            delivery of its quality assurance services through transparency,
            efficiency, and a strong commitment to national development.
          </p>

          <ul className={styles.list}>
            <li>
              <FaCheck className={styles.icon} /> We Are Committed To Quality
            </li>
            <li>
              <FaCheck className={styles.icon} /> We’re Flexible, Agile &amp;
              Cost-effective
            </li>
            <li>
              <FaCheck className={styles.icon} /> We Deliver More Than Just A
              Service
            </li>
          </ul>

          <button className={styles.button}>Learn More</button>
        </div>

        <div className={styles.right}>
          <img
            className={styles.image}
            src="https://bac.gov.bb/wp-content/uploads/2023/04/meeting.jpeg"
            alt="MAC Team"
          />
        </div>
      </section>

      {/* ----- TESTIMONIALS SECTION ----- */}
      <section className={styles.testimonialSection}>
        <div className="text-center">
          <h1 className={styles.testimonialHeading}>What Clients Say?</h1>
          <p className={styles.testimonialSub}>
            What Does Quality Assurance Mean To You?
          </p>
        </div>

        <div className="container">
          <div className="row">

            {/* ------ Testimonial 1 ------ */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.card}>
                <p className={styles.quote}>
                  “Quality assurance means delivering more than what is expected.
                  When an organisation goes above and beyond, people notice,
                  appreciate, and trust the service you provide.”
                </p>

                <div className={styles.profile}>
                  <img
                    src="https://bac.gov.bb/wp-content/uploads/2020/11/radio-01-01.jpg"
                    alt="Radio Broadcasting"
                  />

                  <div>
                    <h4>Jeff Neil Weatherhead</h4>
                    <span>College of Radio Broadcasting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ------ Testimonial 2 ------ */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.card}>
                <p className={styles.quote}>
                  “Quality assurance ensures that programmes and courses meet or
                  exceed regional and international standards—a key requirement
                  for student success and institutional credibility.”
                </p>

                <div className={styles.profile}>
                  <img
                    src="https://bac.gov.bb/wp-content/uploads/2020/11/BIMAP.png"
                    alt="BIMAP"
                  />

                  <div>
                    <h4>Chevron Nesfield</h4>
                    <span>BIMAP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ------ Testimonial 3 ------ */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.card}>
                <p className={`${styles.quote}`}>
                  “High-quality medical education is essential for developing
                  competent professionals. Our institution focuses on innovative,
                  internationally aligned standards to produce well-trained
                  graduates.”
                </p>

                <div className={styles.profile}>
                  <img
                    src="https://bac.gov.bb/wp-content/uploads/2020/11/aubmed.png"
                    alt="AUB"
                  />

                  <div>
                    <h4>Azfal Mehdi</h4>
                    <span>American University of Barbados</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}


