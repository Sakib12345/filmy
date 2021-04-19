import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (


    <section class="reviews">
      <h1 class="reviews-header text-uppercase text-center">Testimonial</h1>
      <div class=" my-4 py-4 text-center">
        <div class="row">
              
              {
                reviews.map(reviewInfo => <TestimonialDetails reviewInfo={reviewInfo}></TestimonialDetails>)
              }
              
            </div>
        </div>
    </section>


  );
};

export default Testimonial;