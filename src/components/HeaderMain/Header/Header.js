import React from 'react';
import './Header.css'
import headerPic from '../../../Illustration/16 [Converted]@2x.png'
const Header = () => {
    return (
        <div className="container pt-5 mt-3">
            <div className="row headerPart">
                <div className="col-md-5">
                <h2>Florence<br/>
                agency</h2><br/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br/>
                <a className="nav-link pr-4 btn text-white" href="">See Pricing</a>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src={headerPic} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;