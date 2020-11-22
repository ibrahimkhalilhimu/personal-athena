import React from 'react';
import './Project.css'
import cover from '../../Illustration/20 [Converted]@2x.png'
const Project = () => {
    return (
        <div className='container'>
           <div className="row project">
               <div className="col-md-6">
                <img className="img-fluid" src={cover} alt=""/>
               </div>
               <div className="col-md-6 projectDetails">
                <h2>STAY RUNNING & Project</h2><br/>
                <p>It is a long established fact that a reader will be distracted by the <br/>readable content of a page when looking at its layout. The point of<br/> using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p><br/>
                <a className="nav-link pr-4 btn text-white" href="">Contact Us</a>
               </div>
               </div> 
        </div>
    );
};

export default Project;