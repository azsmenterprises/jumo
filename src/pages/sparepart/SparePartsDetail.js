import React from 'react'
import Header from '../../components/Header'
import Product4Slider from '../../components/Product4Slider'
import Button from 'react-bootstrap/Button';
import ProductDetailSliderWithThumb from '../../components/ProductDetailSliderWithThumb';
import { IoHeartCircle } from 'react-icons/io5';
import Img4 from '../../assets/images/parts-s-4.jpg';
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
import SparePartsDetailThumnail from './SparePartsDetailThumnail';
import BreadcrumbComp from './BreadcrumbComp';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';


function SparePartsDetail() {
    return (
        <>
            <Header />

            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <BreadcrumbComp />
                    <Row className='g-3'>
                        <Col lg={7}>
                            <Card className='card-single-theme bg-dark'>
                                <SparePartsDetailThumnail />
                            </Card>
                            <div className='box mt-3'>
                                <h3 className='h5 text-light'>Car Overview</h3>
                                <Card className='card-single-theme bg-dark'>
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
                                <Card className='card-single-theme bg-dark'>
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
                                <Card className='card-single-theme bg-dark'>
                                    <Card.Body>
                                        <Card.Text>
                                            <Row className='justify-content-end'>
                                                <Col xs={10}>
                                                    <Card.Title className='h6 mb-0'>Nonstick Dishwasher PFOA</Card.Title>
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
                                            <Col md="12" className='mb-2'>
                                                 <Button variant='outline-warning' className=" px-2 py-2 outline-btn me-2">
                                                    <FaShoppingCart className='me-2' size={25} /> Buy Now
                                                </Button>
                                                <Button variant='outline-warning' className=" px-2 py-2 outline-btn">
                                                    <FaShoppingCart className='me-2' size={25} /> Add To Cart
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button variant='outline-warning' className=" px-2 py-3 outline-btn w-100 ">
                                                    <IoCall size={25} /> Call Us
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
                                                    <FaShareSquare size={25} /> Share
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
            <section className='py-5 bg-black'>
                <div className='container'>
                    <div className='section-title text-center mb-4'>
                        <h2>You May also Like</h2>
                    </div>
                    <Row>
                        <Col lg={3}>
                            <Card className='card-single-theme bg-dark'>
                                <a to="/spareparts-detail">
                                    <Card.Img variant="top" src={Img4} />
                                </a>
                                <div className='wishlist'>
                                    <IoHeartCircle size={30} fill='#ffd000' />
                                </div>
                                <Card.Body className='bg-dark'>
                                    <Card.Text to="/spareparts-detail">
                                        <Row className='justify-content-end'>
                                            <Col xs={12}>
                                                <Card.Title className='h6 mb-0'>Nonstick Dishwasher PFOA</Card.Title>
                                                <small>Creative MT Dual Tone</small>
                                            </Col>
                                            <Col xs={12} className='text-left'>
                                                <strong className='mb-0'>
                                                    4.54 Lakh
                                                </strong>
                                                <small> From ₹8,263/m</small>
                                                <div className='rating'>
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <p>
                                        JBL Flip 3 Splasroof Portable Bluetooth 2
                                    </p>
                                    <div className='text-end'>
                                        <Button className='me-2'>
                                            <FaHeart size={16} />
                                        </Button>
                                        <Button>
                                            <FaShoppingCart size={16} />
                                        </Button>
                                    </div>
                                </Card.Body>
                                <footer className='bg-dark'>
                                    <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                                </footer>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='card-single-theme bg-dark'>
                                <a to="/spareparts-detail">
                                    <Card.Img variant="top" src={Img4} />
                                </a>
                                <div className='wishlist'>
                                    <IoHeartCircle size={30} fill='#ffd000' />
                                </div>
                                <Card.Body className='bg-dark'>
                                    <Card.Text to="/spareparts-detail">
                                        <Row className='justify-content-end'>
                                            <Col xs={12}>
                                                <Card.Title className='h6 mb-0'>Nonstick Dishwasher PFOA</Card.Title>
                                                <small>Creative MT Dual Tone</small>
                                            </Col>
                                            <Col xs={12} className='text-left'>
                                                <strong className='mb-0'>
                                                    4.54 Lakh
                                                </strong>
                                                <small> From ₹8,263/m</small>
                                                <div className='rating'>
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <p>
                                        JBL Flip 3 Splasroof Portable Bluetooth 2
                                    </p>
                                    <div className='text-end'>
                                        <Button className='me-2'>
                                            <FaHeart size={16} />
                                        </Button>
                                        <Button>
                                            <FaShoppingCart size={16} />
                                        </Button>
                                    </div>
                                </Card.Body>
                                <footer className='bg-dark'>
                                    <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                                </footer>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='card-single-theme bg-dark'>
                                <a to="/spareparts-detail">
                                    <Card.Img variant="top" src={Img4} />
                                </a>
                                <div className='wishlist'>
                                    <IoHeartCircle size={30} fill='#ffd000' />
                                </div>
                                <Card.Body className='bg-dark'>
                                    <Card.Text to="/spareparts-detail">
                                        <Row className='justify-content-end'>
                                            <Col xs={12}>
                                                <Card.Title className='h6 mb-0'>Nonstick Dishwasher PFOA</Card.Title>
                                                <small>Creative MT Dual Tone</small>
                                            </Col>
                                            <Col xs={12} className='text-left'>
                                                <strong className='mb-0'>
                                                    4.54 Lakh
                                                </strong>
                                                <small> From ₹8,263/m</small>
                                                <div className='rating'>
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <p>
                                        JBL Flip 3 Splasroof Portable Bluetooth 2
                                    </p>
                                    <div className='text-end'>
                                        <Button className='me-2'>
                                            <FaHeart size={16} />
                                        </Button>
                                        <Button>
                                            <FaShoppingCart size={16} />
                                        </Button>
                                    </div>
                                </Card.Body>
                                <footer className='bg-dark'>
                                    <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                                </footer>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='card-single-theme bg-dark'>
                                <a to="/spareparts-detail">
                                    <Card.Img variant="top" src={Img4} />
                                </a>
                                <div className='wishlist'>
                                    <IoHeartCircle size={30} fill='#ffd000' />
                                </div>
                                <Card.Body className='bg-dark'>
                                    <Card.Text to="/spareparts-detail">
                                        <Row className='justify-content-end'>
                                            <Col xs={12}>
                                                <Card.Title className='h6 mb-0'>Nonstick Dishwasher PFOA</Card.Title>
                                                <small>Creative MT Dual Tone</small>
                                            </Col>
                                            <Col xs={12} className='text-left'>
                                                <strong className='mb-0'>
                                                    4.54 Lakh
                                                </strong>
                                                <small> From ₹8,263/m</small>
                                                <div className='rating'>
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                    <FaStar fill='#ffd000' size={22} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <p>
                                        JBL Flip 3 Splasroof Portable Bluetooth 2
                                    </p>
                                    <div className='text-end'>
                                        <Button className='me-2'>
                                            <FaHeart size={16} />
                                        </Button>
                                        <Button>
                                            <FaShoppingCart size={16} />
                                        </Button>
                                    </div>
                                </Card.Body>
                                <footer className='bg-dark'>
                                    <img src={IcoMap} alt='icomap' /> Someone famous in Bengaluru location
                                </footer>
                            </Card>
                        </Col>
                    </Row>
                    <div className='text-center mt-3'>
                        <Button variant='warning' className="px-lg-5 px-4 py-3 btn-theme ">Browse more</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SparePartsDetail