'use client';
import { useEffect } from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import AboutImage from "../../assets/about.jpeg"

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.animate}`);
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={`${styles.title} ${styles.animate}`}>
            About Achintya Enterprises
          </h2>
          <p className={`${styles.subtitle} ${styles.animate}`}>
            Building Excellence Since 2010
          </p>
          <div className={`${styles.description} ${styles.animate}`}>
            <p>
              With over a decade of experience in the construction industry, 
              Achintya Enterprises has established itself as a leader in delivering 
              high-quality construction projects across residential, commercial, 
              and industrial sectors.
            </p>
            <p>
              Our team of skilled professionals combines innovative techniques 
              with traditional craftsmanship to create structures that stand 
              the test of time.
            </p>
          </div>
          <div className={`${styles.stats} ${styles.animate}`}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
        <div className={`${styles.imageSection} ${styles.animate}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={AboutImage}
              alt="Construction site"
              width={600}
              height={400}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;