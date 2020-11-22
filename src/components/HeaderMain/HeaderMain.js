import React from 'react';
import './HeaderMain.css'
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const HeaderMain = () => {
    return (
        <div className="headerMain">
            <Navbar/>
            <Header/>
        </div>
    );
};

export default HeaderMain;