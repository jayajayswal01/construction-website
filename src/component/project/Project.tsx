'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Project.module.css';
import ProImage1 from "../../assets/project/pro1.jpg";
import ProImage2 from "../../assets/project/pro3.jpg";
import ProImage3 from "../../assets/project/pro2.jpg";
import ProImage5 from "../../assets/project/pro4.jpg";
import ProImage4 from "../../assets/project/pro5.jpg";
import ProImage6 from "../../assets/project/pro6.jpg";      

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: ProImage1,
      description: 'State-of-the-art office building with sustainable features'
    },
    {
      id: 2,
      title: 'Luxury Apartments',
      category: 'residential',
      image: ProImage2,
      description: 'High-end residential complex with premium amenities'
    },
    {
      id: 3,
      title: 'Manufacturing Plant',
      category: 'industrial',
      image: ProImage3,
      description: 'Large-scale industrial facility with modern infrastructure'
    },
    {
      id: 4,
      title: 'Shopping Mall',
      category: 'commercial',
      image: ProImage4,
      description: 'Multi-level shopping complex with entertainment zones'
    },
    {
      id: 5,
      title: 'Smart Homes',
      category: 'residential',
      image: ProImage5,
      description: 'Technology-integrated residential development'
    },
    {
      id: 6,
      title: 'Warehouse Facility',
      category: 'industrial',
      image: ProImage6,
      description: 'Advanced logistics and storage facility'
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

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.animate}`}>Our Projects</h2>
        <p className={`${styles.subtitle} ${styles.animate}`}>
          Discover our latest construction masterpieces
        </p>

        <div className={`${styles.categories} ${styles.animate}`}>
          <button 
            className={`${styles.categoryBtn} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
          <button 
            className={`${styles.categoryBtn} ${activeCategory === 'commercial' ? styles.active : ''}`}
            onClick={() => setActiveCategory('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`${styles.categoryBtn} ${activeCategory === 'residential' ? styles.active : ''}`}
            onClick={() => setActiveCategory('residential')}
          >
            Residential
          </button>
          <button 
            className={`${styles.categoryBtn} ${activeCategory === 'industrial' ? styles.active : ''}`}
            onClick={() => setActiveCategory('industrial')}
          >
            Industrial
          </button>
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${styles.animate}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className={styles.viewProject}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;