import React from 'react';
import man1 from '../../../images/Ellipse.png';
import man2 from '../../../images/Ellipse-2.png';
import man3 from '../../../images/Ellipse-3.png';
import man4 from '../../../images/Ellipse-4.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section class="reviews">
        <h1 class="reviews-header text-uppercase text-center">Testimonial</h1>
          <div class=" my-4 py-4 text-center">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div >
                  <div class="card-body shadow p-3 mb-5 bg-white rounded-3">
                    <img class="img-fluid rounded-circle w-50 mb-3" src={man1} alt=""/>
                    <h3>David</h3>
                    <p class="reviews-text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus."</p>
                    <div>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star unfilled"></i>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class=" ">
                  <div class="card-body shadow p-3 mb-5 bg-white rounded-3">
                    <img class="img-fluid rounded-circle w-50 mb-3" src={man2} alt=""/>
                    <h3>James</h3>
                    <p class="reviews-text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus."</p>
                    <div>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star unfilled"></i>
                      <i class="fas fa-star unfilled"></i>
                  </div>
                  </div>
                </div>
              </div><div class="col-lg-3 col-md-6">
                <div class=" ">
                  <div class="card-body shadow p-3 mb-5 bg-white rounded-3">
                    <img class="img-fluid rounded-circle w-50 mb-3" src={man3} alt=""/>
                    <h3>William</h3>
                    <p class="reviews-text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus."</p>
                    <div>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star unfilled"></i>
                  </div>
                  </div>
                </div>
              </div><div class="col-lg-3 col-md-6">
                <div class=" ">
                  <div class="card-body shadow p-3 mb-5 bg-white rounded-3">
                    <img class="img-fluid rounded-circle w-50 mb-3" src={man4} alt=""/>
                    <h3>Robert</h3>
                    <p class="reviews-text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus."</p>
                    <div>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
};

export default Testimonial;