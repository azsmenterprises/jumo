import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import IcoSearch from '../assets/icons/search.svg'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
function Header() {
    const [shortlistedCount, setShortlistedCount] = useState(2);
    const incrementCounter = () => {
        setShortlistedCount(shortlistedCount + 1);
    };
    return (
        <header >
            <Navbar expand="lg" className="header-dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} width={130} alt='log' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        <InputGroup>
                            <div className="search-bar">
                                <Button variant="warning" className='btn btn-location'>Delhi NCR</Button>
                                <Form.Control type='search' className='search-form' aria-label="Example text with two button addons" placeholder='Search By..' />
                                <Button variant="warning" className='btn btn-search border-start-0'><img src={IcoSearch} className='img-fluid' alt='IcoSearch' /></Button>
                            </div>
                        </InputGroup>
                    </Nav>
                    <Navbar.Collapse className='right-navbar-nav' id="right-navbar-nav">
                        <Nav className='ms-lg-auto'>
                            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                            <Nav.Link as={Link} to="/buy-car">Buy Car</Nav.Link>
                            <Nav.Link as={Link} to="/sell-car">Sell Car</Nav.Link>
                            <Nav.Link as={Link} to="/price-plan">Pricing Plan</Nav.Link>
                            <NavDropdown title="More" id="dropdown-more">
                                <NavDropdown.Item as={Link} to="/action/3.2">
                                    Your Account
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.2">
                                    About US
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item as={Link} to="/price-plan">
                                  Our Packages
                                </NavDropdown.Item> */}

                            </NavDropdown>
                            <Nav.Link as={Link} to="/short-listed" style={{ position: 'relative' }} onClick={incrementCounter}>
                                <HiViewGridAdd size={25} />
                                Shortlisted <span className='counter'>01</span>
                            </Nav.Link>
                            <NavDropdown id="dropdown-account" title={<><FaRegUserCircle size={25} /> Account</>}>
                                <NavDropdown.Item as={Link} to="/profile-page">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/action/3.4">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;