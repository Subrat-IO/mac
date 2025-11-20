import React from "react";
import styles from "./style.module.css";
import { FaPlane } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoNote } from "react-icons/go";
import { GiGavel } from "react-icons/gi";
import { MdAutorenew, MdCheck } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaThumbsUp, FaChartLine } from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaRegCheckCircle />,
    title: "Accreditation",
    detail: "As the quality assurance body for tertiary education & training in Barbados, we establish guidelines.",
    link: "#"
  },
  {
    icon: <GoNote />,
    title: "Registration",
    detail: "The goal of registration is to certify that a provider meets the requirements established by.",
    link: "#"
  },
  {
    icon: <FaPlane />,
    title: "CARICOM Skills Certificate",
    detail: "The free movement of skills/labour entails the right of a CARICOM National to seek work.",
    link: "#"
  },
  {
    icon: <FaHandshake />,
    title: "Programme Approval",
    detail: "Programme approval is a quality assurance process which ensures programmes have learning outcomes and assessment.",
    link: "#"
  },
  {
    icon: <GiGavel />,
    title: "Appeals",
    detail: "Are you dissatisfied with a decision made by the Council? An Appeal can be made.",
    link: "#"
  },
  {
    icon: <MdAutorenew />,
    title: "Recognition of Qualifications",
    detail: "Determine if a particular programme of study or course has attained a comparable recognized standard.",
    link: "#"
  },
  {
    icon: <PiStudentFill />,
    title: "Recognition of Awarding Bodies",
    detail: "Post-secondary institutions in Barbados can be recognized as awarding bodies.",
    link: "#"
  },
  {
    icon: <MdCheck />,
    title: "Recognition and Verification of Qualifications",
    detail: "Through this function, the BAC provides the opportunity for a customer to get their qualifications verified.",
    link: "#"
  },
  {
    icon: <FaThumbsUp />,
    title: "Recognition of Institutions/Programmes",
    detail: "Find out if an institution and/or programme you are enrolled in, or thinking of enrolling in, is reputable.",
    link: "#"
  },
  {
    icon: <FaChartLine />,
    title: "Capacity Building",
    detail: "We provide detailed, reliable and accessible information to organizations, stakeholders and the community.",
    link: "#"
  }

];

function ServicesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.grid}>
        {SERVICES.map((svc, idx) => (
          <div className={styles.serviceCard} style={{ animationDelay: `${idx * 0.15}s` }} key={svc.title}>
            <div className={styles.icon}>{svc.icon}</div>
            <div>
              <h3 className={styles.heading}>{svc.title}</h3>
              <p className={styles.detail}>{svc.detail}</p>
            </div>
            <a className={styles.link} href={svc.link}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
