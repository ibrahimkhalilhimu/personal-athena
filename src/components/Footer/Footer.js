import React from 'react';
import './Footer.css'
import group86 from '../../Illustration/Group 86.png'
import facebook from '../../Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../Illustration//twitter (4)@2x.png'
import linkedin from '../../Illustration/linkedin (2)@2x.png'
import dribbble from '../../Illustration/dribbble (1)@2x.png'

const Footer = () => {
    return (
        <div className="container pt-5 ">
            <div className="footer row">
                <div className="col-md-5">
                    <img src={group86} alt=""/>
                    <div className="social pt-3">
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={linkedin} alt=""/>
                    <img src={dribbble} alt=""/>
                    </div>
                   
                </div>
                <div className="list-item  col-md-7">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list">
                            <li>Feature</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                </div>
                <div className="list col-md-4">
                    <ul className="list">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact US</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list">
                        <li>About US</li>
                        <li>Terms of Service</li>
                        <li>Security</li>
                        <li>Login</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;