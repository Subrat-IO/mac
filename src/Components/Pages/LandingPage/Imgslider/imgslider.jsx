import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const slides = [
  {
    image: "https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_640.jpg",
    title: "Get Accredited With Us!",
    text: "We will assess your Programme or Institution based on quality standards to help you gain official recognition.",
    button: "Learn More",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_640.jpg",
    title: "Quality Assurance Guaranteed",
    text: "Our team ensures your organisation meets all required benchmarks.",
    button: "Explore Services",
  },
  {
   
    title: "Trusted by Institutions Worldwide",
    text: "Join thousands of clients who improved their credibility with us.",
    button: "Contact Us",
     image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
  },
];
function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () =>
    setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const auto = setInterval(nextSlide, 5000);
    return () => clearInterval(auto);
  }, [index]);

  return (
    <div className={styles.slider}>
      <div
        className={`${styles.slide} ${styles.zoomEffect}`}   // 🔥 zoom animation
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <div className={styles.content} key={index}>
          <h1 className={styles.fadeText}>{slides[index].title}</h1>
          <p className={styles.fadeText}>{slides[index].text}</p>
          <button className={styles.fadeBtn}>{slides[index].button}</button>
        </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
          &#10095;
        </button>

        {/* BOTTOM DOTS */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${index === i ? styles.activeDot : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
