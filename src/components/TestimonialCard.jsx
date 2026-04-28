import React from 'react'

const TestimonialCard = ({imgPath, testimonial, user, business}) => {
  return (
    <div id='testimonial-card'>
      <div className="testimonial-contents">
        <img src={imgPath} alt={`Image of ${user} from ${business}`} />
        <div className='text-area'>
          <p className='italic'>{testimonial}</p>
          <p className='font-semibold'>- {user}, {business}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard