import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import CustomNextArrow from "./customArrows/nextArrow";
import CustomPrevArrow from "./customArrows/prevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondaryButton from "../../buttons/SecondaryButton";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
          padding: "60px",
          backgroundColor: "#f9f4d9",
        }}
      >
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="content">
                <p className="p">100% genuine products</p>
                <h1>
                  Tasty & Healthy <br />
                  Organic Food
                </h1>
             <div style={{marginTop:"80px"}}>
             <SecondaryButton >
                Explore Products
              </SecondaryButton>
             </div>
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
            <div className="container">
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22p_1uCnnEPX0lcsB5NINRtbxaAmuMTfbJw&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="content-right">
                <p className="p">100% genuine products</p>
                <h1>
                 Our Garden's Most <br />
                  Favorite Food
                </h1>
                <div style={{marginTop:"60px"}}>
               <SecondaryButton>
                Explore Products
               </SecondaryButton>
                <span style={{marginLeft:"20px"}}>
                <SecondaryButton>
                  Learn More
                </SecondaryButton>
                </span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
