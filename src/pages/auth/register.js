import React from 'react'
import Header from '../../components/Header'
import { Button, Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import { axiosWithoutToken } from '../../app/auth'

function RegisterPage() {
    const http = axiosWithoutToken();
    const [roles, setRoles] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});
    const [apiRequestMade, setApiRequestMade] = useState(false);

    const fetchRole = () => {
        http.post("role")
            .then((response) => {
                console.log("role response: ", response);
                if (response.status === 200) {
                    setRoles(response.data.role);
                }
            })
            .catch((error) => {
                console.error("Error fetching role data:", error);
                setErrors(prevErrors => ({
                    ...prevErrors,
                    role: "Failed to fetch roles. Please try again."
                }));
            });
    }


    useEffect(() => {
        if (!apiRequestMade) {
            setApiRequestMade(true);
            fetchRole();
        }
    }, [apiRequestMade]);

    const validateInputs = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Name is required.";
        }

        if (!mobile.trim()) {
            errors.mobile = "Mobile number is required.";
        }

        if (!email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid.";
        }

        if (!password.trim()) {
            errors.password = "Password is required.";
        }

        if (!role) {
            errors.role = "User type is required.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (validateInputs()) {
            http.post("auth", { name, mobile, email, password, user_type: role })
                .then((response) => {
                    console.log("response: ", response);
                    if (response.status === 200) {
                        const user = response.data.data;
                        login(user.token, user);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        general: "User registration failed. Please try again."
                    }));
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
                                    <h2>Create Your Account</h2>
                                </div>
                                <form onSubmit={handleRegister}>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Full Name*</label>
                                        <input type='text' placeholder='Enter your Full name here..' className={`form-control st-int ${errors.name ? 'is-invalid' : ''}`} value={name} onChange={(e) => setName(e.target.value)} />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Mobile Number*</label>
                                        <input type='text' placeholder='Enter your Mobile Number here..' className={`form-control st-int ${errors.mobile ? 'is-invalid' : ''}`} value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Email ID*</label>
                                        <input type='email' placeholder='Enter your Email ID here..' className={`form-control st-int ${errors.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>Password*</label>
                                        <input type='password' placeholder='Enter your Password..' className={`form-control st-int ${errors.password ? 'is-invalid' : ''}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>
                                    <div className='mt-3'>
                                        <label className='st-int-label'>User Type*</label>
                                        <select className={`form-control ${errors.role ? 'is-invalid' : ''}`} value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="">--Select--</option>
                                            {roles && roles.map((role) => (
                                                <option key={role.id} value={role.id}>
                                                    {role.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                                    </div>
                                    <Button type='submit' className='btn btn-theme mt-4'>
                                        Submit
                                    </Button>
                                    {errors.general && <div className="text-danger mt-3">{errors.general}</div>}
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