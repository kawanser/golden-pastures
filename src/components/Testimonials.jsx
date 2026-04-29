import React, {useState} from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../constants'

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section id="testimonials">
      <div id="working-area">
        <h1>THEIR EXPERIENCES</h1>
        <div className="container">
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
            <img src="/images/left-arrow.svg" />
          </button>
          <button onClick={handleNext} disabled={currentIndex >= testimonials.length - 3}>
            <img src="/images/right-arrow.svg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials