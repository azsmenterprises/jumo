import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Img1 from '../../assets/images/parts-s-1.jpg';
import Img2 from '../../assets/images/parts-s-2.jpg';
import Img3 from '../../assets/images/parts-s-3.jpg';
import Img4 from '../../assets/images/parts-s-4.jpg';
import IcoMap from '../../assets/icons/map-ico.svg';
import { Link } from 'react-router-dom';
import { IoHeartCircle } from 'react-icons/io5';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

function SparePartListing() {
    return (
        <>

            <Row className='g-3'>
                <Col lg={3}>
                    <Card className='card-single-theme bg-dark'>
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img4} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img2} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img3} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img4} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                            <FaShoppingCart fill='#ffd000' style={{ cursor: 'pointer' }} />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img1} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img2} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img3} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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
                        <Link to="/spareparts-detail">
                            <Card.Img variant="top" src={Img4} />
                        </Link>
                        <div className='wishlist'>
                            <IoHeartCircle size={30} fill='#ffd000' />
                        </div>
                        <Card.Body className='bg-dark'>
                            <Card.Text as={Link} to="/spareparts-detail">
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

        </>
    )
}

export default SparePartListing