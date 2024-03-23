import React from 'react'
import Header from '../../components/Header'
import { Button, Col, Row } from 'react-bootstrap'


function RegisterPage() {
    return (
        <>
            <Header />
            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <div className='register-bx' style={{ padding: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', background: '#282a27e3', borderRadius: '5px' }}>
                                <div className='section-title text-center mb-3'>
                                    <h2>Create Your Account</h2>
                                </div>
                                <form>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Full Name*</label>
                                        <input type='text' placeholder='Enter your Fullname here..' className='form-control st-int' />
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Mobile Number*</label>
                                        <input type='number' placeholder='Enter your Mobile Number here..' className='form-control st-int' />
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Email ID*</label>
                                        <input type='email' placeholder='Enter your Email ID here..' required className='form-control st-int' />
                                        <small className='--color-text'>please enter valid Email ID</small>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>User Type*</label>
                                        <select className='form-control'>
                                             <option>--Select--</option>
                                             <option value='seller'>
                                               Seller
                                             </option>
                                             <option value='buyer'>
                                               Buyer
                                             </option>
                                             <option value='buyer'>
                                               Dealer
                                             </option>
                                             <option value='buyer'>
                                               Spareparts Seller
                                             </option>
                                        </select>
                                    </div>
                                    <Button href='/login' className='btn btn-theme mt-4'>
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </div>
            </section>
        </>

    )
}

export default RegisterPage