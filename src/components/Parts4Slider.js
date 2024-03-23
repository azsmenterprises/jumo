import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Img1 from '../assets/images/parts-s-1.jpg';
import Img2 from '../assets/images/parts-s-2.jpg';
import Img3 from '../assets/images/parts-s-3.jpg';
import Img4 from '../assets/images/parts-s-4.jpg';

import IcoMap from '../assets/icons/map-ico.svg';
import { IoHeartCircle } from 'react-icons/io5';


function Parts4Slider() {
    return (
        <>
            <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
                slidesPerView={1}

                navigation={true}
                pagination={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                }}
                modules={[Navigation, Pagination]}
                className="car-list-slider">
                <SwiperSlide>
                    <Card className='w-100 card-single-theme'>
                        <Card.Img variant="top" src={Img1} />
                        <div className='wishlist'>
                             <IoHeartCircle size={35} fill='#ffd000'/>
                        </div>
                        <Card.Body>
                            <Card.Text as={Link} to="/product-details">
                                <Row className='justify-content-end'>
                                    <Col xs={7}>
                                        <Card.Title className='h6 mb-0'>2017 Honda Amaze 1.2L S</Card.Title>
                                        <small>Creative MT Dual Tone</small>
                                    </Col>
                                    <Col xs={5} className='text-end'>
                                        <strong className='mb-0'>
                                            4.54 Lakh
                                        </strong>
                                        <small> From ₹8,263/m</small>
                                    </Col>
                                </Row>

                            </Card.Text>
                            <div className='tags'>
                                <small> 83, 500 km </small>
                                <small> Petrol</small>
                                <small> Manual</small>
                                <small> DL3C</small>
                            </div>
                        </Card.Body>
                        <footer>
                             <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                        </footer>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='w-100 card-single-theme'>
                        <Card.Img variant="top" src={Img2} />
                        <div className='wishlist'>
                             <IoHeartCircle size={35} fill='#ffd000'/>
                        </div>
                        <Card.Body>
                            <Card.Text as={Link} to="/product-details">
                                <Row className='justify-content-end'>
                                    <Col xs={7}>
                                        <Card.Title className='h6 mb-0'>2017 Honda Amaze 1.2L S</Card.Title>
                                        <small>Creative MT Dual Tone</small>
                                    </Col>
                                    <Col xs={5} className='text-end'>
                                        <strong className='mb-0'>
                                            4.54 Lakh
                                        </strong>
                                        <small> From ₹8,263/m</small>
                                    </Col>
                                </Row>

                            </Card.Text>
                            <div className='tags'>
                                <small> 83, 500 km </small>
                                <small> Petrol</small>
                                <small> Manual</small>
                                <small> DL3C</small>
                            </div>
                        </Card.Body>
                        <footer>
                            <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                        </footer>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='w-100 card-single-theme'>
                        <Card.Img variant="top" src={Img3} />
                        <div className='wishlist'>
                             <IoHeartCircle size={35} fill='#ffd000'/>
                        </div>
                        <Card.Body>
                            <Card.Text as={Link} to="/product-details">
                                <Row className='justify-content-end'>
                                    <Col xs={7}>
                                        <Card.Title className='h6 mb-0'>2017 Honda Amaze 1.2L S</Card.Title>
                                        <small>Creative MT Dual Tone</small>
                                    </Col>
                                    <Col xs={5} className='text-end'>
                                        <strong className='mb-0'>
                                            4.54 Lakh
                                        </strong>
                                        <small> From ₹8,263/m</small>
                                    </Col>
                                </Row>

                            </Card.Text>
                            <div className='tags'>
                                <small> 83, 500 km </small>
                                <small> Petrol</small>
                                <small> Manual</small>
                                <small> DL3C</small>
                            </div>
                        </Card.Body>
                        <footer>
                            <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                        </footer>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='w-100 card-single-theme'>
                        <Card.Img variant="top" src={Img4} />
                        <div className='wishlist'>
                             <IoHeartCircle size={35} fill='#ffd000'/>
                        </div>
                        <Card.Body>
                            <Card.Text as={Link} to="/product-details">
                                <Row className='justify-content-end'>
                                    <Col xs={7}>
                                        <Card.Title className='h6 mb-0'>2017 Honda Amaze 1.2L S</Card.Title>
                                        <small>Creative MT Dual Tone</small>
                                    </Col>
                                    <Col xs={5} className='text-end'>
                                        <strong className='mb-0'>
                                            4.54 Lakh
                                        </strong>
                                        <small> From ₹8,263/m</small>
                                    </Col>
                                </Row>

                            </Card.Text>
                            <div className='tags'>
                                <small> 83, 500 km </small>
                                <small> Petrol</small>
                                <small> Manual</small>
                                <small> DL3C</small>
                            </div>
                        </Card.Body>
                        <footer>
                            <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                        </footer>
                    </Card>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Parts4Slider