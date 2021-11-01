import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css';
// import { Link } from 'react-router-hash-link';

const Header = () => {

    const { user, logOut } = useAuth();
    return (

        <Navbar collapseOnSelect expand="lg" className="header-container bg-color-design" sticky="top">
            <Container >

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">

                        <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/tourplace">Tour Place</Nav.Link>

                        <Nav.Link className="text-light" as={Link} to="/users">Existing booking</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/users/add">Booking Service</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/review">Review </Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/contactus">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            !user?.email ?
                                <div className="d-flex">
                                    <Nav.Link className="text-light btn-color " as={Link} to="/login"> Login </Nav.Link>
                                    <Nav.Link className="text-light btn-login px-3 btn-color signup-right" as={Link} to="/signup"> Signup </Nav.Link>

                                </div>
                                :
                                <div className="d-flex">
                                    <img src={user?.photoURL} className="profile-image" alt="profile" />
                                    <p className="text-light mx-2">{user?.displayName}</p>
                                    <Button onClick={logOut} className="btn-login px-3 me-3 btn-color">Logout</Button>

                                </div>
                        }






                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >





    );
};

export default Header;