import React from 'react';
import './NewTestimonial.css';

const testimonials = [
  { id: 1, src: '/assets/teen_program_testimonials_1.png' },
  { id: 2, src: '/assets/teen_program_testimonials_2.png' },
  { id: 3, src: '/assets/teen_program_testimonials_3.png' },
  { id: 4, src: '/assets/teen_program_testimonials_4.png' },
  { id: 5, src: '/assets/teen_program_testimonials_5.png' },
  { id: 6, src: '/assets/teen_program_testimonials_6.png' },
  { id: 7, src: '/assets/teen_program_testimonials_7.png' },
  { id: 8, src: '/assets/teen_program_testimonials_8.png' },

];

const NewTestimonial = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((item, index) => (
        <img
          key={item.id}
          src={item.src}
          alt={`Testimonial ${item.id}`}
          className={`testimonial-img tilt-${index % 2 === 0 ? 'left' : 'right'}`}
        />
      ))}
    </div>
  );
};

export default NewTestimonial;
