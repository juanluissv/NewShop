import React from 'react'
import { Col, Row, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Banner = () => {
  return (
    <div>
        <section id="billboard" className="position-relative  bg-light-blue banner2">
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-3 text-uppercase text-dark pb-5">don't miss today's Deals</h1>
                        <span   className="btn btn-medium btn-dark text-uppercase btn-rounded-none shopBtn2">
                        <LinkContainer to='/product/65b2a1ec7f7abaa7ab4e6ee5'>
                          <Nav.Link>
                            <span className='shopBtn'>Shop Product</span>
                            </Nav.Link>
                        </LinkContainer>
                          </span>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <Image src="../images/banner-image.png" alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
          </div>
        </section>      
    </div>
  )
}

export default Banner
