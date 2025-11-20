import React from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import sliderImage1 from "/slider.jpeg";
import sliderImage2 from "/slider1.jpeg";

import "swiper/css";
import "swiper/css/pagination";

function Tertiary() {
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
              src="/man-7895205.jpg"
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
    <SwiperSlide>
      <img src={sliderImage1} className={styles.logo} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={sliderImage2} className={styles.logo} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={sliderImage1} className={styles.logo} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={sliderImage2} className={styles.logo} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={sliderImage1} className={styles.logo} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={sliderImage2} className={styles.logo} />
    </SwiperSlide>
  </Swiper>
</div>


      {/* -------- FOUR VIDEO GRID SECTION --------
      <div className={`my-5 ${styles.experincesection}`}>
        <div className="row gy-5">

          <div className="col-md-6">
            <h4 className={styles.videoTitle}>Introduction to Recognition Services</h4>
            <div className={styles.videoWrapperSmall}>
              <iframe
                src="https://www.youtube.com/embed/gbKeKIyC-i0"
                title="Recognition Services Intro"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className={styles.videoTitle}>Recognition of Qualifications</h4>
            <div className={styles.videoWrapperSmall}>
              <iframe
                src="https://www.youtube.com/embed/gbKeKIyC-i0"
                title="Recognition of Qualifications"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className={styles.videoTitle}>Verification of Qualifications</h4>
            <div className={styles.videoWrapperSmall}>
              <iframe
                src="https://www.youtube.com/embed/gbKeKIyC-i0"
                title="Verification of Qualifications"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className={styles.videoTitle}>Programme Recognition</h4>
            <div className={styles.videoWrapperSmall}>
              <iframe
                src="https://www.youtube.com/embed/gbKeKIyC-i0"
                title="Programme Recognition"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div> */}
    </div>
  );
}

export default Tertiary;
