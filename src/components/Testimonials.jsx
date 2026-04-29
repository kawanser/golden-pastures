import React, {useState, useRef} from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  useGSAP(() => {
    const cards = containerRef.current.children;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#working-area",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        snap: {
          snapTo: 0.1,
          directional: false,
          duration: 0.5,
          ease: "power1.inOut",
        },
      },
    });

    tl.fromTo(
      "#working-area h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
    )
      .fromTo(
        "#working-area .container",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      )
      .fromTo(
        cards,
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, ease: "power1.inOut" },
      )
      .fromTo(
        ".arrows",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, ease: "power1.inOut" },
        "<",
      );
  }, [currentIndex]);

  return (
    <section id="testimonials">
      <div id="working-area">
        <h1>THEIR EXPERIENCES</h1>
        <div className="container" ref={containerRef}>
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map(({ imgPath, testimonial, user, business }, index) => (
              <TestimonialCard
                key={index}
                imgPath={imgPath}
                testimonial={testimonial}
                user={user}
                business={business}
              />
            ))}
        </div>
        <div className="arrows">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <img
              src="/images/left-arrow.svg"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - 3}
          >
            <img
              src="/images/right-arrow.svg"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials