import React from 'react';
import './Achievement.css'
import happy from '../../Illustration/happy@2x.png'
import marketing from '../../Illustration/marketing@2x.png'
import surface from '../../Illustration/surface1@2x.png'
import traverse from '../../Illustration/transportation@2x.png'
const Achievement = () => {
    return (
        <div className="container"> 
            <div className="row achievementPart">
                <div className="col-md-6">
                <h3>Our Achievements</h3>
                <p>It is a long established fact that a reader will be distracted by<br/> 
the readable content of a page when looking at its layout. The <br />
point of using Lorem Ipsum is that it has a more-or-less normal <br />
distribution of letter. </p>
                </div>
                <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex happySymbol">
                            <img src={happy} alt=""/>
                            <div className=" pl-2">
                            <h4 className="pl-4"><b>700+</b></h4>
                            <h5>Happy Client</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex marketingSymbol">
                            <img src={marketing} alt=""/>
                            <div className="">
                            <h4 className="pl-4"><b>140+</b></h4>
                            <h6>Projects Completed</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                <div className="col-md-6">
                        <div className="d-flex surfaceSymbol">
                            <img src={surface} alt=""/>
                            <div className=" pl-2">
                            <h4 className="pl-4"><b>25+</b></h4>
                            <h5>Crazy Minds</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex traverseSymbol">
                            <img src={traverse} alt=""/>
                            <div className="">
                            <h4 className="pl-4"><b>75+</b></h4>
                            <h6>Running Projects</h6>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;