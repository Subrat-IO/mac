import React from "react";
import styles from "./style.module.css";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  
  return (
    <>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.barContent}>
          <div className={styles.leftInfo}>
            <span>$ Currency: USD</span>
            <span>|</span>
            <span>
              <MdEmail size={18} color="#e8e3d4ff" /> info@macgov.net
            </span>
            <span>|</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <a href="/">
            <img
              src="/Logo.png"
              className={styles.logo}
              alt="MAC Logo"
            />
          </a>
          <ul className={styles.navList}>
            <li>
              <a href="/">Home</a>
            </li>

            <li className={styles.dropdown}>
              <a href="service">Services ▾</a>
              <ul className={styles.dropdownMenu}>
                {/* Example of a RIGHT-SIDE submenu */}
                <li className={styles.hasSubmenu}>
                  <a href="registration">Registration ▸</a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a href="registrationform">Registration Forms</a>
                    </li>
                    <li>
                      <a href="registrationproviders">Registration Providers</a>
                    </li>
                  </ul>
                </li>

                <li className={styles.hasSubmenu}>
                  <a href="accredition">Accreditation ▸</a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a href="accreditionprovider">Accredited Providers</a>
                    </li>
                    <li>
                      <a href="accreditedcandidates">
                        Candidates for Accreditation
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={styles.hasSubmenu}>
                  <a href="cariom">CARICOM Skills Certificate ▸</a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a href="howtoapply">How To Apply</a>
                    </li>
                    <li>
                      <a href="verification">Verification Of Certificate</a>
                    </li>
                  </ul>
                </li>

                <li className={styles.hasSubmenu}>
                  <a href="recognisation">Recognition ▸</a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a href="recognisationofbudies">
                        Recognition Of Award Bodies
                      </a>
                    </li>
                    
                  </ul>
                </li>

                <li>
                  <a href="goals">Decision Appeal</a>
                </li>
                <li>
                  <a href="capacitybuilding">Capacity Building</a>
                </li>
                <li>
                  <a href="programmeapproval">Programme Approval</a>
                </li>
                <li>
                  <a href="fees">Fees for Services</a>
                </li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <a href="#">Information Center ▾</a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="recognisationofbudies">Recognition Of Award Bodies</a>
                </li>
                <li>
                  <a href="media">
                   media                  </a>
                </li>
                <li>
                  <a href="pressrelease">News Later</a>
                </li>
                <li>
                  <a href="capacitybuilding">Capacity Building</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="downloadform">Downloads & Forms</a>
            </li>

            {/* UPDATED ABOUT US */}
            <li className={styles.dropdown}>
              <a href="aboutus">About Us ▾</a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="core-values">Core Values</a>
                </li>
                <li>
                  <a href="functions-powers">Functions & Powers</a>
                </li>
                <li>
                  <a href="quality-statements">Quality Statements</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
