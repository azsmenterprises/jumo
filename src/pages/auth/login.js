import React, { useState } from 'react';
import Header from '../../components/Header'
import { Button, Col, Row } from 'react-bootstrap'
import { AuthContext } from '../../app/context';
import { useContext } from 'react';
import { axiosWithoutToken } from '../../app/auth';
function LoginPage() {
    const { login } = useContext(AuthContext);

    const http = axiosWithoutToken();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Resetting previous errors
        setEmailError("");
        setPasswordError("");

        // Simple validation
        let isValid = true;
        if (!email.trim()) {
            setEmailError("Email is required.");
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError("Password is required.");
            isValid = false;
        }

        if (isValid) {
            http.post("auth", { email: email, password: password })
                .then((response) => {
                    console.log("response: ", response);
                    if (response.status === 200) {
                        const user = response.data.data;
                        login(user.token, user, true);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setEmailError("Error fetching user data.");
                    // Handle error here, if required
                });
        }
    };

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
                                <form onSubmit={handleLogin}>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Email ID*</label>
                                        <input type='email' placeholder='Enter your Email ID here..' onChange={(e) => setEmail(e.target.value)} value={email} required className={`form-control st-int ${emailError ? 'is-invalid' : ''}`} />
                                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Password*</label>
                                        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your Password..' required className={`form-control st-int ${passwordError ? 'is-invalid' : ''}`} />
                                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                    </div>
                                    <Button type='submit' className='btn btn-theme mt-3'>
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

export default LoginPage