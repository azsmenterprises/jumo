import React from 'react'
import Header from '../../components/Header'
import BreadcrumbComp from '../../components/BreadcrumbComp'
import Product4Slider from '../../components/Product4Slider'
import Button from 'react-bootstrap/Button';
import ProductDetailSliderWithThumb from '../../components/ProductDetailSliderWithThumb';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import IcoMap from '../../assets/icons/map-ico.svg';
import IcoLike from '../../assets/icons/heart.svg';
import Icofacebook from '../../assets/icons/facebook.svg';
import Icoinstagram from '../../assets/icons/instagram.svg';
import Icowhatsapp from '../../assets/icons/whatsapp.svg';
import Icotwitter from '../../assets/icons/twitter-x.svg';
import { IoCall } from 'react-icons/io5';
import { HiChat } from 'react-icons/hi';
import { FaShare, FaShareSquare } from 'react-icons/fa';


function ProductDetailPage() {
    return (
        <>
            <Header />

            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <BreadcrumbComp />
                    <Row className='g-3'>
                        <Col lg={7}>
                            <Card className='card-single-theme'>
                                <ProductDetailSliderWithThumb />
                            </Card>
                            <div className='box mt-3'>
                                <h3 className='h5 text-light'>Car Overview</h3>
                                <Card className='card-single-theme'>
                                    <Card.Body>
                                        <Card.Text className='mb-0'>
                                            <Row className='g-3 text-center'>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Registration Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>

                                            </Row>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='box mt-3'>
                                <h3 className='h5 text-light'>Inspection Report</h3>
                                <Card className='card-single-theme'>
                                    <Card.Body>
                                        <Card.Text className='mb-0'>
                                            <Row className='g-3 text-center'>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Registration Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>
                                                <Col xs={6} lg={3} className='border-bottom border-secondary pb-3'>
                                                    <Card.Title className='h6'>Aug 2018</Card.Title>
                                                    <span>Make Year</span>
                                                </Col>

                                            </Row>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='sticky-top'>
                                <Card className='card-single-theme'>
                                    <Card.Body>
                                        <Card.Text>
                                            <Row className='justify-content-end'>
                                                <Col xs={10}>
                                                    <Card.Title className='h6 mb-0'>2018 Hyundai Elite i20 Sportz 1.2</Card.Title>
                                                    <small>Creative MT Dual Tone</small>
                                                </Col>
                                                <Col xs={2} >
                                                    <div className='text-end'>
                                                        <img src={IcoLike} className="d-inline-block img-ld" alt='imge before Like' />
                                                        <img src={IcoLike} className='d-none img-ld' alt='imge after Like' />
                                                    </div>
                                                </Col>
                                                <div className='tags mt-3'>
                                                    <small> 83, 500 km </small>
                                                    <small> Petrol</small>
                                                    <small> Manual</small>
                                                    <small> DL3C</small>
                                                </div>
                                                <footer className='border-0'>
                                                    <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                                                </footer>
                                            </Row>

                                        </Card.Text>

                                    </Card.Body>

                                    <footer className='text-light'>
                                        <Row>
                                            <Col xs={7} className='text-start'>
                                                <h2 className='mb-0'>
                                                    ₹ 5.66 Lakh
                                                </h2>
                                                <small> Fixed on Road Price</small>
                                            </Col>
                                            <Col xs={5} className='text-end'>
                                                <strong className='mb-0 d-block'>
                                                    ₹ 10,302/m
                                                </strong>
                                                <a href='javascript:void(0)' className='text-warning'> View benefits</a>
                                            </Col>
                                        </Row>
                                    </footer>
                                    <footer>
                                        <Row>
                                            <Col>
                                                <Button variant='outline-warning' className=" px-2 py-3 outline-btn w-100 ">
                                                    <IoCall size={25}/> Call Us
                                                </Button>
                                                <small>Mon - Fri, 9AM to 4PM.</small>
                                            </Col>
                                            <Col>
                                                <Button variant='warning' className=" px-2 py-3 btn-theme w-100">
                                                    <HiChat size={25} /> Chat With US
                                                </Button>
                                                <small>Chat with in house team.</small>
                                            </Col>
                                            <Col>
                                                <Button variant='warning' className=" px-2 py-3 btn-theme w-100">
                                                    <FaShareSquare size={25}/> Share
                                                </Button>
                                            </Col>
                                            <Col xs={12}>
                                                <small>Note: 100% Refundable</small>
                                            </Col>
                                        </Row>
                                    </footer>

                                </Card>
                                <div className='text-center d-flex justify-content-center align-items-center text-light'>
                                    <span>Share with a friend:</span>
                                    <ul className='share-links-ul'>
                                        <li><a href='#'><img src={Icofacebook} width={20} /> </a></li>
                                        <li><a href='#'><img src={Icoinstagram} width={20} /> </a></li>
                                        <li><a href='#'><img src={Icotwitter} width={20} /> </a></li>
                                        <li><a href='#'><img src={Icowhatsapp} width={20} /> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='py-5 bg-white'>
                <div className='container'>
                    <div className='section-title text-center mb-4'>
                        <h2>You May also Like</h2>
                    </div>
                    <Product4Slider />
                    <div className='text-center mt-3'>
                        <Button variant='warning' className="px-lg-5 px-4 py-3 btn-theme ">Browse more</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage