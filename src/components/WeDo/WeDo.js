import React from 'react';
import './WeDo.css'
import Group65 from '../../Illustration/Group 65@2x.png'
import Group66 from '../../Illustration/Group 66@2x.png'
import Group69 from '../../Illustration/Group 69@2x.png'
import Group72 from '../../Illustration/Group 72@2x.png'
const WeDo = () => {
    return (
        <div className="container pt-5 mt-5">
            <div className="text-center DoPart">
                <h2>What we do</h2>
                <p>Our main focus is to make the User Experience very<br/> 
                simple and easy. Simplicity is our Strength.</p>
                <div className="card-deck row pt-5">
      <div className="card d-flex align-items-center col-md-3 col-sm-6">
        <img className="card-img-top img-fluid" src={Group65} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Experience Design</h5>
          <p className="card-text"> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
          
        </div>
      </div>

      <div className=" card d-flex align-items-center col-md-3 col-sm-6">
        <img className="card-img-top img-fluid" src={Group66} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Interface Design </h5>
          <p className="card-text"> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
          
        </div>
      </div>
      <div className="card d-flex align-items-center col-md-3 col-sm-6">
        <img className="card-img-top img-fluid" src={Group69} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Prototyping</h5>
          <p className="card-text"> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
          
        </div>
      </div>

      <div className="card d-flex align-items-center col-md-3 col-sm-6">
        <img className="card-img-top" src={Group72} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Illustration</h5>
          <p className="card-text"> The point of using Lorem Ipsum is that it has a more-or-less normal. </p>
          
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default WeDo;