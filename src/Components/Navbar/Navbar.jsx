import React, { useState } from "react";
import styles from "./style.module.css";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

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
          <img src="/Logo.png" className={styles.logo} alt="MAC Logo" />

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={`${styles.navList} ${mobileMenuOpen ? styles.open : ""}`}
          >
            <li>
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>

            <li
              className={`${styles.dropdown} ${
                activeDropdown === "services" ? styles.active : ""
              }`}
            >
              <a
                href="service"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown("services");
                  }
                }}
              >
                Services ▾
              </a>
              <ul className={styles.dropdownMenu}>
                <li
                  className={`${styles.hasSubmenu} ${
                    activeSubmenu === "registration" ? styles.active : ""
                  }`}
                >
                  <a
                    href="registration"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleSubmenu("registration");
                      }
                    }}
                  >
                    Registration ▸
                  </a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a
                        href="registrationform"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Registration Forms
                      </a>
                    </li>
                    <li>
                      <a
                        href="registrationproviders"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Registration Providers
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={`${styles.hasSubmenu} ${
                    activeSubmenu === "accreditation" ? styles.active : ""
                  }`}
                >
                  <a
                    href="accredition"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleSubmenu("accreditation");
                      }
                    }}
                  >
                    Accreditation ▸
                  </a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a
                        href="accreditionprovider"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Accredited Providers
                      </a>
                    </li>
                    <li>
                      <a
                        href="accreditedcandidates"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Candidates for Accreditation
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={`${styles.hasSubmenu} ${
                    activeSubmenu === "caricom" ? styles.active : ""
                  }`}
                >
                  <a
                    href="cariom"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleSubmenu("caricom");
                      }
                    }}
                  >
                    CARICOM Skills Certificate ▸
                  </a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a
                        href="howtoapply"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        How To Apply
                      </a>
                    </li>
                    <li>
                      <a
                        href="verification"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Verification Of Certificate
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={`${styles.hasSubmenu} ${
                    activeSubmenu === "recognition" ? styles.active : ""
                  }`}
                >
                  <a
                    href="recognisation"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleSubmenu("recognition");
                      }
                    }}
                  >
                    Recognition ▸
                  </a>
                  <ul className={styles.submenuRight}>
                    <li>
                      <a
                        href="recognisationofbudies"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Recognition Of Award Bodies
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="decisionappeal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Decision Appeal
                  </a>
                </li>
                <li>
                  <a
                    href="capacitybuilding"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Capacity Building
                  </a>
                </li>
                <li>
                  <a
                    href="programmeapproval"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programme Approval
                  </a>
                </li>
                <li>
                  <a href="fees" onClick={() => setMobileMenuOpen(false)}>
                    Fees for Services
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={`${styles.dropdown} ${
                activeDropdown === "info" ? styles.active : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 768) {
                    toggleDropdown("info");
                  }
                }}
              >
                Information Center ▾
              </a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a
                    href="recognisationofbudies"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Recognition Of Award Bodies
                  </a>
                </li>
                <li>
                  <a href="media" onClick={() => setMobileMenuOpen(false)}>
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="pressrelease"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    News Later
                  </a>
                </li>
                <li>
                  <a
                    href="capacitybuilding"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Capacity Building
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="downloadform" onClick={() => setMobileMenuOpen(false)}>
                Downloads & Forms
              </a>
            </li>

            <li
              className={`${styles.dropdown} ${
                activeDropdown === "about" ? styles.active : ""
              }`}
            >
              <a
                href="aboutus"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown("about");
                  }
                }}
              >
                About Us ▾
              </a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a
                    href="core-values"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Core Values
                  </a>
                </li>
                <li>
                  <a
                    href="functions-powers"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Functions & Powers
                  </a>
                </li>
                <li>
                  <a
                    href="quality-statements"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quality Statements
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contactus" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;