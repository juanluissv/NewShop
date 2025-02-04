import React from 'react'

const Testimonial = () => {
  return (
    <section id="testimonials" class="position-relative section1">
    <div class="container">
      <div class="row">
        <div class="review-content position-relative">
          <div class="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
            <svg class="chevron-left">
              {/* <use xlink:href="#chevron-left" /> */}
            </svg>
          </div>
          <div class="swiper testimonial-swiper">
            <div class="quotation text-center">
              <svg class="quote">
                {/* <use xlink:href="#quote" /> */}
              </svg>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide text-center d-flex justify-content-center">
                <div class="review-item col-md-10">
                  <i class="icon icon-review"></i>
                  <blockquote>“The iphone Airpods  works great, it does what it needs to do.
                     It seems durable and connects to  the phone fast. It also works great on 
                     the MagSafe wireless charger. However, if you primarily put your 
                     phone in your pocket it is even better”
                    </blockquote>
                  <div class="rating">
                    <svg class="star star-fill">
                      {/* <use xlink:href="#star-fill"></use> */}
                    </svg>
                    <svg class="star star-fill">
                      {/* <use xlink:href="#star-fill"></use> */}
                    </svg>
                    <svg class="star star-fill">
                      {/* <use xlink:href="#star-fill"></use> */}
                    </svg>
                    <svg class="star star-half">
                      {/* <use xlink:href="#star-half"></use> */}
                    </svg>
                    <svg class="star star-empty">
                      {/* <use xlink:href="#star-empty"></use> */}
                    </svg>
                  </div>
                  <div class="author-detail">
                    <div class="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
            <svg class="chevron-right">
              {/* <use xlink:href="#chevron-right" /> */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial
