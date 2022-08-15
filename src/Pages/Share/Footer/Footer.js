import React from 'react';
import '../../../Style/style.css';
const Footer = () => {
    return (
        <div className='mt-3 mb-5'>
            <hr/>
            <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <div className='col'>
                    <h5 className='mb-4'>Book Shoop</h5>
                    <small className=' icons'><i className="fas fa-phone-square"></i> 15807</small>
                    <p className=' icons'><i className="fas fa-envelope"></i> info@bookshoop.com</p>
                    <p className=' icons'><i className="fas fa-address-card"></i> Level: 14, 30/A VIP Road, Uttara, Dhaka</p>
                </div>
                <div className='col'>
                    <h5 className='mb-4'>Expliore BY</h5>
                    <p className='icons'>Category</p>
                    <p className='icons'>Author</p>
                    <p className=' icons'>Publisher</p>
                </div>
                <div className='col'>
                    <h5 className='mb-4'>Get To Know Us</h5>
                    <p className=' icons'>Contact Us</p>
                    <p className=' icons'>About Us</p>
                    <p className=' icons'>Blog</p>
                </div>
                <div className='col social'>
                    <h5>Stay Connected With Us</h5>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;