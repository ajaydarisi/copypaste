import React from 'react';
import Nav from './Navbar/Nav';
import Body from './Body/Body.js';
import Footer from './Footer/Footer.js'
import './MainPage.css'


function MainPage() {
  return (
    <div className="mainpage">
        <div className="nav">
            <Nav />
        </div>
        <div className="body">
            <Body />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default MainPage