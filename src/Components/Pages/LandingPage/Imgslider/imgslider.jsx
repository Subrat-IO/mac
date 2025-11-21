import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "/manspects.jpeg",
    title: "Get Accredited With Us!",
    text: "We will assess your Programme or Institution based on quality standards to help you gain official recognition.",
    button: "Learn More",
  },
  {
    image: "/womansuit.jpeg",
    title: "Quality Assurance Guaranteed",
    text: "Our team ensures your organisation meets all required benchmarks.",
    button: "Explore Services",
  },
  {
    image: "/womanheadphone.jpeg",
    title: "Trusted by Institutions Worldwide",
    text: "Join thousands of clients who improved their credibility with us.",
    button: "Contact Us",
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const auto = setInterval(nextSlide, 5000);
    return () => clearInterval(auto);
  }, [index]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      distance > 0 ? nextSlide() : prevSlide();
    }
  };

  const styles = {
    sliderWrapper: {
      width: "100%",
      overflow: "hidden",
    },
    sliderContainer: {
      position: "relative",
      width: "100%",
      height: "550px",
      marginTop: "4rem",
    },
    slideBackground: {
      position: "absolute",
      inset: "0",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
      transition: "all 0.7s ease",
      backgroundImage: `url(${slides[index].image})`,
    },
    overlay: {
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.1) 100%)",
    },
    contentContainer: {
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 1.5rem",
    },
    content: {
      maxWidth: "76rem",
      zIndex: 5,
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#f4a51c",
      marginBottom: "0.75rem",
      lineHeight: "1",
      opacity: 0,
      animation: "fadeUp 1.1s ease forwards 0.3s",
    },
    text: {
      fontSize: "0.875rem",
      color: "white",
      marginBottom: "1.25rem",
      maxWidth: "72rem",
      lineHeight: "1.6",
      opacity: 0,
      animation: "fadeUp 1.1s ease forwards 0.5s",
    },
    button: {
      background: "#002d62",
      color: "#eab308",
      padding: "0.5rem 1.25rem",
      fontSize: "0.875rem",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      opacity: 0,
      animation: "fadeUp 1.1s ease forwards 0.7s",
    },
    arrow: {
      display: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "white",
      fontSize: "2rem",
      opacity: "0.75",
      background: "rgba(0, 0, 0, 0.2)",
      width: "2.5rem",
      height: "2.5rem",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
      transition: "all 0.3s ease",
    },
    arrowLeft: {
      left: "0.75rem",
    },
    arrowRight: {
      right: "0.75rem",
    },
    dotsContainer: {
      position: "absolute",
      bottom: "1.5rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "0.5rem",
      zIndex: 10,
    },
    dot: {
      width: "0.625rem",
      height: "0.625rem",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.5)",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    activeDot: {
      background: "#eab308",
      transform: "scale(1.25)",
    },
    yellowLine: {
      width: "100%",
      height: "1rem",
      background: "#eab308",
    },
  };

  return (
    <>
      <div style={styles.sliderWrapper}>
        <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .arrow-hover:hover {
          opacity: 1 !important;
          background: rgba(0, 0, 0, 0.4) !important;
        }

        .button-hover:hover {
          background: #003f8c !important;
        }

        .dot-hover:hover {
          background: rgba(255, 255, 255, 0.75) !important;
        }

        @media (min-width: 640px) {
          .slider-container {
            height: 550px !important;
            margin-top: 5rem !important;
          }
          .content-container {
            padding: 0 2rem !important;
          }
          .title {
            font-size: 3.75rem !important;
          }
          .text {
            font-size: 1rem !important;
          }
          .button {
            font-size: 1rem !important;
            padding: 0.5rem 1.5rem !important;
          }
          .arrow {
            display: flex !important;
          }
        }

        @media (min-width: 768px) {
          .slider-container {
            height: 600px !important;
            margin-top: 6rem !important;
          }
          .content-container {
            padding: 0 3rem !important;
          }
          .title {
            font-size: 4.5rem !important;
            margin-bottom: 1rem !important;
          }
          .text {
            font-size: 1.125rem !important;
            margin-bottom: 1.5rem !important;
          }
          .button {
            font-size: 1.125rem !important;
            padding: 0.75rem 2rem !important;
          }
          .arrow {
            font-size: 2.25rem !important;
            width: 3rem !important;
            height: 3rem !important;
          }
          .arrow-left {
            left: 1.5rem !important;
          }
          .arrow-right {
            right: 1.5rem !important;
          }
          .dots-container {
            bottom: 2rem !important;
            gap: 0.75rem !important;
          }
          .dot {
            width: 0.75rem !important;
            height: 0.75rem !important;
          }
          .yellow-line {
            height: 1.5rem !important;
          }
        }

        @media (min-width: 1024px) {
          .slider-container {
            height: 650px !important;
          }
          .content {
            max-width: 42rem !important;
          }
          .content-container {
            padding: 0 4rem !important;
          }
          .title {
            font-size: 5.5rem !important;
          }
          .arrow {
            font-size: 2.5rem !important;
          }
        }

        @media (min-width: 1280px) {
          .slider-container {
            height: 700px !important;
          }
          .content-container {
            padding: 0 6rem !important;
          }
          .title {
            font-size: 6rem !important;
          }
        }
      `}</style>

        <div
          className="slider-container"
          style={styles.sliderContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div style={styles.slideBackground}>
            <div style={styles.overlay}></div>
          </div>

          <div className="content-container" style={styles.contentContainer}>
            <div className="content" style={styles.content} key={index}>
              <h1 className="title" style={styles.title}>
                {slides[index].title}
              </h1>

              <p className="text" style={styles.text}>
                {slides[index].text}
              </p>

              <button className="button button-hover" style={styles.button}>
                {slides[index].button}
              </button>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="arrow arrow-left arrow-hover"
            style={{ ...styles.arrow, ...styles.arrowLeft }}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="arrow arrow-right arrow-hover"
            style={{ ...styles.arrow, ...styles.arrowRight }}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="dots-container" style={styles.dotsContainer}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="dot dot-hover"
                style={
                  index === i
                    ? { ...styles.dot, ...styles.activeDot }
                    : styles.dot
                }
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="yellow-line" style={styles.yellowLine}></div>
    </>
  );
}

export default HeroSlider;
