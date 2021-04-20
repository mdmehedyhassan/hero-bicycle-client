import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#e2dd95'}}>
            <div className="d-flex">
                <div className="col-3">
                    <h5>Location</h5>
                    <p>Hero Bicycle -35/3, North Kamalapur Bazar Rd</p>
                    <p>Kamalapur, Dhaka, Bangladesh</p>
                </div>
                <div className="col-3 ">
                    <h5>Company</h5>
                    <p> About</p>
                    <p>Our Product</p>
                    <p>Our Team</p>
                    <p>Contact</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-3">
                    <h5>quick Links</h5>
                    <p>Quick Links</p>
                    <p>Rentals</p>
                    <p>Sales</p>
                    <p>Contact</p>
                    <p>Our blog</p>
                </div>
                <div className="col-3">
                    <h5>About us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui, doloribus eaque modi blanditiis velit.</p>
                    <h4><span className='p-2 text-primary'><FontAwesomeIcon icon={faFacebook} /></span><span className='p-2 text-danger'><FontAwesomeIcon icon={faInstagram} /></span><span className='p-2 text-danger'><FontAwesomeIcon icon={faYoutube} /></span><span className='p-2 text-primary'><FontAwesomeIcon icon={faTwitter} /></span><span className='p-2 text-primary'><FontAwesomeIcon icon={faLinkedinIn} /></span></h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;