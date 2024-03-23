import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import HomeTopBanner from '../../components/HomeTopBanner'
import HowIsWorkSec from '../../components/HowIsWorkSec'
import BodyTypeSec from '../../components/BodyTypeSec'
import Button from 'react-bootstrap/Button';
import Faqs from '../../components/FaqsSec'
import Parts4Slider from '../../components/Parts4Slider'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BreadcrumbComp from './BreadcrumbComp'
import IcoCar from '../../assets/icons/car.png'

function PricePlan() {
    return (
        <>
            <Header />
            <HeaderBottom />
            <section className='py-5 bg-dark-theme'>
                <div className='container'>
                    <BreadcrumbComp />
                    <div className='section-title text-center mb-5'>
                        <h2>Our Pricing Plan</h2>
                        <p className='text-light'>You won't just love our cars, you'll love the way you buy them.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='pricing-item'>
                                <div className='pricing-header'>
                                    <div className='pricing-icon'>
                                        <img src={IcoCar} className="img-fluid m-auto" alt='jumocar' width={50} />

                                        <i class="fa fa-car" aria-hidden="true"></i>

                                    </div>
                                    <div className='pricing-header-content'>
                                        <h4 className='gradient-text'>Basic Plan</h4>
                                        <p style={{ color: '#c9cdd0' }}>Duration: 1 Month
                                        </p>
                                        <h1 className='gradient-text' >₹3,000</h1>
                                    </div>
                                    <div className='pricing-feature'>
                                        <ul>
                                            <li style={{ color: '#c9cdd0' }}>  Search All Listings</li>
                                            <li style={{ color: '#c9cdd0' }}>Get Full Listing Info</li>
                                            <li style={{ color: '#c9cdd0' }}>Create Favorite List</li>
                                            <li style={{ color: '#c9cdd0' }}> 24/7 Online Support</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-warning">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='pricing-item'>
                                <div className='pricing-header'>
                                    <div className='pricing-icon'>
                                        <img src={IcoCar} className="img-fluid m-auto" alt='jumocar' width={50} />
                                    </div>
                                    <div className='pricing-header-content'>
                                        <h4 className='gradient-text'>Regular Plan</h4>
                                        <p style={{ color: '#c9cdd0' }}>Duration: 6 Months</p>
                                        <h1 className='gradient-text' >₹10,000</h1>
                                    </div>
                                    <div className='pricing-feature'>
                                        <ul>
                                            <li style={{ color: '#c9cdd0' }}>Search All Listings</li>
                                            <li style={{ color: '#c9cdd0' }}>Get Full Listing Info</li>
                                            <li style={{ color: '#c9cdd0' }}>Create Favorite List</li>
                                            <li style={{ color: '#c9cdd0' }}>24/7 Online Support</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-warning">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='pricing-item'>
                                <div className='pricing-header'>
                                    <div className='pricing-icon'>
                                        <img src={IcoCar} className="img-fluid m-auto" alt='jumocar' width={50} />
                                    </div>
                                    <div className='pricing-header-content'>
                                        <h4 className='gradient-text'>Popular Plan</h4>
                                        <p style={{ color: '#c9cdd0' }}>Duration: 12 Months</p>
                                        <h1 className='gradient-text' >₹15,000</h1>
                                    </div>
                                    <div className='pricing-feature'>
                                        <ul>
                                            <li style={{ color: '#c9cdd0' }}>Search All Listings</li>
                                            <li style={{ color: '#c9cdd0' }}>Get Full Listing Info</li>
                                            <li style={{ color: '#c9cdd0' }}>Create Favorite List</li>
                                            <li style={{ color: '#c9cdd0' }}>24/7 Online Support</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-warning">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='pricing-item'>
                                <div className='pricing-header'>
                                    <div className='pricing-icon'>
                                        <img src={IcoCar} className="img-fluid m-auto" alt='jumocar' width={50} />
                                    </div>
                                    <div className='pricing-header-content'>
                                        <h4 className='gradient-text'>Premium Plan</h4>
                                        <p style={{ color: '#c9cdd0' }} >Duration: Unlimited Posting</p>
                                        <h1 className='gradient-text' >₹25,000</h1>
                                    </div>
                                    <div className='pricing-feature'>
                                        <ul>
                                            <li style={{ color: '#c9cdd0' }}>Search All Listings</li>
                                            <li style={{ color: '#c9cdd0' }}>Get Full Listing Info</li>
                                            <li style={{ color: '#c9cdd0' }}>Create Favorite List</li>
                                            <li style={{ color: '#c9cdd0' }}>24/7 Online Support</li>
                                        </ul>
                                    </div>
                                    <button type="button" className=" btn btn-warning">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Faqs />


        </>

    )
}

export default PricePlan