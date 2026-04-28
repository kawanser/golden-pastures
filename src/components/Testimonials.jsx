import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../constants'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div id="working-area">
        <h1>THEIR EXPERIENCES</h1>
        <div className="container">
          {testimonials.map(
            ({ imgPath, testimonial, user, business }, index) => {
              if (index === 3) return null;
              
              return (
                <TestimonialCard
                  key={index}
                  imgPath={imgPath}
                  testimonial={testimonial}
                  user={user}
                  business={business}
                />
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials