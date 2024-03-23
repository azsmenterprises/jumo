import React, { useState } from 'react';
import Header from '../../components/Header'
import { Button, Col, Row } from 'react-bootstrap'
function LoginPage() {

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
                                    <h2>Login to view Account</h2>
                                </div>
                                <form>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Email ID*</label>
                                        <input type='email' placeholder='Enter your Email ID here..' required className='form-control st-int' />
                                        <small className='--color-text'>please enter valid Email ID</small>
                                    </div>
                                    <Button href='/otp' className='btn btn-theme mt-3'>
                                        Generate OTP
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

export default LoginPage