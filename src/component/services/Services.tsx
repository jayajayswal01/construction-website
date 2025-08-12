'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import servImage1 from "../../assets/services/serv1.jpg";
import servImage2 from "../../assets/services/serv2.jpg";
import servImage3 from "../../assets/services/serv3.jpg";
import servImage4 from "../../assets/services/serv4.jpg";
import servImage5 from "../../assets/services/serv5.jpg";
import servImage6 from "../../assets/services/serv6.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: servImage1,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and renovations tailored to your needs with premium quality craftsmanship.'
    },
    {
      id: 2,
      icon: servImage2,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and industrial facilities built to the highest standards.'
    },
    {
      id: 3,
      icon:  servImage3,
      title: 'Renovation Services',
      description: 'Transform your existing space with our expert renovation and remodeling services.'
    },
    {
      id: 4,
      icon: servImage4,
      title: 'Project Planning',
      description: 'Comprehensive project planning and management from concept to completion.'
    },
    {
      id: 5,
      icon: servImage5,
      title: 'Interior Design',
      description: 'Creative interior design solutions that blend functionality with aesthetics.'
    },
    {
      id: 6,
      icon: servImage6,
      title: 'Construction Consultation',
      description: 'Expert advice and consultation for your construction projects.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.animate}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.animate}`}>Our Services</h2>
        <p className={`${styles.subtitle} ${styles.animate}`}>
          Comprehensive Construction Solutions for Every Need
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div 
              key={service.id}
              className={`${styles.serviceCard} ${styles.animate}`}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={150}
                  height={150}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;