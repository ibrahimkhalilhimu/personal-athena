import React from 'react';
import './DedicatedTeam.css'
const DedicatedTeam = () => {
    return (
        <div className="container pt-5 mt-5">
            <div className="team text-center">
            <h3>CHOOSE YOUR DEDICATED TEAM</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="teamCard mt-5">
                        <h1> <b>$199 </b></h1>
                        <p>For Basic</p>
                        <ul>
                            <li>Homepage </li>
                            <li>No Inner Page</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button className="btn text-white mt-3">Order Now</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="teamCard mt-5">
                        <h1 ><b>$399</b></h1>
                        <p>For Basic</p>
                        <ul>
                            <li>Homepage </li>
                            <li>4 Inner Page</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>20 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button className="btn text-white mt-3">Order Now</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="teamCard mt-5">
                        <h1 ><b>$599</b></h1>
                        <p>For Basic</p>
                        <ul>
                            <li>Homepage </li>
                            <li>8 Inner Page</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>30 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button  className="btn text-white mt-3">Order Now</button>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default DedicatedTeam;