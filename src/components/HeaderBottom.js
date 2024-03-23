import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';



function HeaderBottom() {
   
    return (
        <header className='d-none d-lg-block'>
            <Navbar expand="lg" className="main-menu">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='m-lg-auto'>
                            <Nav.Link href="javascript:void(0)" className='btn' disabled>Explore By </Nav.Link>

                            <NavDropdown title="Price Range" id="dropdown-more">
                                <NavDropdown.Item as={Link} to="/products-listing">2 Lac</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">3 Lac</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Make & Model" id="dropdown-more-2">
                                <NavDropdown.Item as={Link} to="products-listing">Hyundai</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Renault</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Tata</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Renault</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Maruti Suzuki</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Honda</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Mahindara</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Year" id="dropdown-more-3">
                                <NavDropdown.Item as={Link} to="products-listing">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Login/Register</NavDropdown.Item>
                              
                            </NavDropdown>
                            <NavDropdown title="Fuel" id="dropdown-more-4">
                                <NavDropdown.Item as={Link} to="products-listing">Your Account</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Km Driven" id="dropdown-more-5">
                                <NavDropdown.Item as={Link} to="products-listing">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Login/Register</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Body Type" id="dropdown-more-6">
                                <NavDropdown.Item as={Link} to="products-listing">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Login/Register</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Transmission" id="dropdown-more-7">
                                <NavDropdown.Item as={Link} to="products-listing">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products-listing">Login/Register</NavDropdown.Item>
                            
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default HeaderBottom;