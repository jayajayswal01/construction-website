'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={`${styles.footerSection} ${styles.animate}`}>
            <h3>Achintya Enterprises</h3>
            <p>Building dreams into reality with quality and innovation since 2010.</p>
             <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            </div>
           
          </div>

          <div className={`${styles.footerSection} ${styles.animate}`}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={`${styles.footerSection} ${styles.animate}`}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/residential">Residential Construction</Link></li>
              <li><Link href="/services/commercial">Commercial Construction</Link></li>
              <li><Link href="/services/renovation">Renovation</Link></li>
              <li><Link href="/services/interior">Interior Design</Link></li>
              <li><Link href="/services/consultation">Consultation</Link></li>
            </ul>
          </div>

          <div className={`${styles.footerSection} ${styles.animate}`}>
            <h4>Contact Info</h4>
            <ul className={styles.contactInfo}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                123 Construction Ave, Building City, ST 12345
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +1 (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@achintya-enterprises.com
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.footerBottom} ${styles.animate}`}>
          <p>&copy; {new Date().getFullYear()} Achintya Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;