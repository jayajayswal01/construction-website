'use client';
import { useState, useEffect } from 'react';
import styles from './Testimonial.module.css';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Homeowner',
    image: '/testimonials/person1.jpg',
    quote: 'Achintya Enterprises transformed our dream home into reality. Their attention to detail and professional approach was outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: '/testimonials/person2.jpg',
    quote: `The team's expertise in commercial construction is unmatched. They completed our office complex ahead of schedule.`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Property Developer',
    image: '/testimonials/person3.jpg',
    quote: 'Their innovative solutions and quality workmanship make them our go-to construction partner for all projects.',
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.testimonialContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <NavigateBeforeIcon />
        </button>

        <div className={styles.testimonialSlider}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialCard} ${
                index === currentSlide ? styles.active : ''
              }`}
            >
              <div className={styles.quoteIcon}>
                <FormatQuoteIcon />
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorImage}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.authorDetails}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <NavigateNextIcon />
        </button>
      </div>

      <div className={styles.indicators}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;