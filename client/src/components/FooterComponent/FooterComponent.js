import React from 'react';
import { Link } from 'react-router-dom';
const Footer = props => (
    <div className="footer mt-5">
        <div className="container">

            <div className="row justify-content-center align-items-baseline">
                <div className="col-md-3 col-12 text-center">
                    <Link to="/" className="footer-logo"><h4><span className="fa fa-home fa-lg"> Real Estate</span></h4></Link>
                </div>
                <div className="col-md-9 col-12 text-center">
                    © Copyright 2018 Geek's Crew
                </div>
            </div>
        </div>
    </div>
);

export default Footer;