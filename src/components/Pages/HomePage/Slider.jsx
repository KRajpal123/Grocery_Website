import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ width: "100%", margin: "auto",padding:"60px", backgroundColor:"#f4eab4"
     }}>
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="content">
                <p className="p">100% genuine products</p>
                <h1>
                  Tasty & Healthy <br />
                  Organic Food
                </h1>
              </div>
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22p_1uCnnEPX0lcsB5NINRtbxaAmuMTfbJw&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
