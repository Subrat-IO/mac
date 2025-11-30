import React from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import logo1 from "/src/assets/slider1.jpeg";
import logo3 from "/src/assets/college2.jpeg";
import logo4 from "/src/assets/college3.jpeg";
import logo5 from "/src/assets/college4.jpeg";
import logo6 from "/src/assets/college5.jpeg";
import logo7 from "/src/assets/college6.jpeg";

import "swiper/css";
import "swiper/css/pagination";

function Tertiary() {
  const logos = [logo1,  logo3, logo4, logo5, logo6, logo7];

  return (
    <div className={`container ${styles.container}`}>
      <div className="row align-items-center justify-content-center">
        {/* LEFT TEXT SECTION */}
        <div className={`col-md-5 ${styles.leftsection}`}>
          <p className={styles.experince}>20 Years of Experience</p>
          <h3 className={styles.whatwedo}>What We Do</h3>

          <p>
            The Montserrat Accreditation Council (MAC) marked its 20th
            Anniversary on November 15th, 2024.
          </p>

          <p>
            The Executive Director of the MAC reflected on the remarkable
            development of the Council—from strengthening accreditation and
            quality assurance across tertiary education to its expanding role in
            supporting the recognition and movement of skilled professionals
            within the CARICOM region. The 20th Anniversary theme was:
            ‘Reflection • Appreciation • Celebration!’
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-md-5">
          <div className={styles.videoWrapper}>
            <img
              src="/src/assets/portrait-businessman-smiling.jpg"
              alt="MAC 20th Anniversary"
              className={styles.responsiveImage}
            />
          </div>
        </div>
      </div>

      {/* -------- LOGO SLIDER SECTION -------- */}
      <div className={`mx-auto text-center mb-5 mt-5 ${styles.sliderSection}`}>
        <h4 className={styles.logoTitle}>
          List of Tertiary Education and Training Providers
        </h4>

        <Swiper
          className={styles.swiperBox}
          modules={[Autoplay, Pagination]}
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  padding: "5px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Tertiary;
