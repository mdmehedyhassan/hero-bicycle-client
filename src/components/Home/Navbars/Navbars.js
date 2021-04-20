import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                    <h1 className="text-success"><FontAwesomeIcon icon={faBicycle} /> Hero Bicycle</h1>
                </div>
                <div className="col-6 justify-content-end ">
                    <Navbar className="justify-content-end  " expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto " activeKey="/home">
                                <Link className="p-2" to="/home">Home</Link>
                                <Link className="p-2" to="/user">User</Link>
                                <Link className="p-2" to="/">Our Team</Link>
                                <Link className="p-2" to="/">Contact Us</Link>
                                <Link className="p-2" to="/admin">Admin</Link>
                                <Link className="p-2" to="/login"><button className="btn btn-success">Login</button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        </div>
    );
};

export default Navbars;