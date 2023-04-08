import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './iconslider.css';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500
    };
    return (
      <div class="iconslider">
        <p class="slider-text">Services SWAD have</p>
        <Slider {...settings}>
         
          <div>
          <img src={logo1} alt="React Image" />
          <p className="text">Web</p>
          </div>
          <div>
          <img src={logo2} alt="React Image" />
          <p className="text">Data Management</p>
          </div>
          <div>
          <img src={logo3} alt="React Image" />
          <p className="text">Cloud Software</p>
          </div>
          <div>
          <img src={logo4} alt="React Image" />
          <p className="text">App</p>
          </div>
          <div>
          <img src={logo5} alt="React Image" />
          <p className="text">Storage & Hosting</p>
          </div>
          <div>
          <img src={logo6} alt="React Image" />
          <p className="text">Hardware</p>
          </div>
          
          
          
        </Slider>
      </div>
    );
  }
}