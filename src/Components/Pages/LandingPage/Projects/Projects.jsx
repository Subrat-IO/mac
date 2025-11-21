import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const DashboardSection = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  // Counter function
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;
      let start = 0;
      const totalDuration = 1200; // total 1.2s
      const increment = end / (totalDuration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [startCount, end]);

    return <span className={styles.statNumber}>{count}+</span>;
  };

  return (
    <section className={styles.dashboardSection}>
      {/* ---- HEADER ---- */}
      <div className={styles.dashboardHeader}>
        <h2>
          We are the sole authority responsible for <br />
          upholding the quality and integrity <span>“ ”</span>
          <br />
          of <span className={styles.highlight}>post-secondary</span> and{" "}
          <span className={styles.highlight}>tertiary</span> education and{" "}
          <br />
          training in Montserrat.
        </h2>
      </div>

      {/* ---- GRID ---- */}
      {/* (your grid code remains unchanged) */}

      {/* ---- BOTTOM STATS ---- */}
      <div className={styles.dashboardStatsBar} ref={statsRef}>
        <div>
          <Counter end={29} />
          <div className={styles.statLabel}>Registered Institutions</div>
        </div>

        <div>
          <Counter end={3} />
          <div className={styles.statLabel}>Accredited Institutions</div>
        </div>

        <div>
          <Counter end={2500} />
          <div className={styles.statLabel}>CARICOM Skills Certificates</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
