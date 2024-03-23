import React, { useState } from 'react';
import Header from '../../components/Header'
import { Button, Col, Row } from 'react-bootstrap'
import OtpInput from 'react-otp-input';
function OtpPage() {
    const [otp, setOtp] = useState('');

    return (
        <>
            <Header />
            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            {/* OTP Screen start */}
                            <div className='register-bx' style={{ padding: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', background: '#282a27e3', borderRadius: '5px' }}>
                                <div className='section-title text-center mb-5'>
                                    <h2 clas>Enter OTP Here</h2>
                                </div>
                                <form>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} className='dff' />}
                                    />
                                    <div className='mt-5'>
                                        <Button className='btn btn-theme me-2 '>
                                            Verify OTP
                                        </Button>
                                        <Button className='btn btn-theme me-2 '>
                                            Clear
                                        </Button>
                                        <Button className='btn btn-theme '>
                                           Re-Generate OTP
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            {/* OTP Screen Close */}

                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </div>
            </section>
        </>

    )
}

export default OtpPage