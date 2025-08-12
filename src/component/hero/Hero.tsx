'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Hero1 from "../../assets/hero/hero1.jpg";
import Hero2 from "../../assets/hero/hero2.jpg";
import Hero3 from "../../assets/hero/hero3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: Hero1,
      title: 'Building Dreams Into Reality',
      description: 'Excellence in Construction & Engineering Services'
    },
    {
      image: Hero2,
      title: 'Quality & Innovation',
      description: 'Leading the Way in Modern Construction'
    },
    {
      image: Hero3,
      title: 'Expert Solutions',
      description: 'Your Trusted Construction Partner'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (

<div
  key={index}
  className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
  style={{ 
    backgroundImage: `url(${slide.image.src})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' 
  }}
>
            <div className={styles.content}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className={styles.cta}>Get Started</button>
            </div>
          </div>
        ))}

      </div>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;