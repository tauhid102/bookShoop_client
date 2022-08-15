import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import banner1 from '../../../images/slider/slider1.jpg'
import banner2 from '../../../images/slider/slider2.jpg'
import banner3 from '../../../images/slider/slider3.jpg'
const Slider = () => {
    return (
        <div className='container mt-5 slider'>
        <div className="row row-cols-1 row-cols-md-2">
                <div className="col d-flex justify-content-center align-items-center">
                    <h1>Books For Every Book Worm</h1>
                </div>
                <div className="col">
                    <Carousel>
                        <Carousel.Item className="banner" >
                            <img
                                className="d-block w-100 rounded-pill"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="banner">
                            <img
                                className="d-block w-100 rounded-pill h-100"
                                src={banner2}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="banner">
                            <img
                                className="d-block w-100 rounded-pill h-100"
                                src={banner3}
                                alt="Third slide"
                            />

                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel></div>
            </div>
            
        </div>
    );
};

export default Slider;
