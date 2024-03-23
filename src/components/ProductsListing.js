import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Img1 from '../assets/images/car-s-1.jpg';
import Img2 from '../assets/images/car-s-2.jpg';
import Img3 from '../assets/images/car-s-3.jpg';
import Img4 from '../assets/images/car-s-4.jpg';
import IcoMap from '../assets/icons/map-ico.svg';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from 'react-icons/io5';

function ProductListing() {
    return (
        <>

            <Row className='g-3'>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img1} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img2} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img3} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link>
                           <Card.Img variant="top" src={Img4} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img3} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img2} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img1} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
                        <Link to="/product-details">
                            <Card.Img  variant="top" src={Img1} />
                        </Link>
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
                </Col>
                <Col lg={4}>
                    <Card className='card-single-theme'>
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
                </Col>

            </Row>

        </>
    )
}

export default ProductListing