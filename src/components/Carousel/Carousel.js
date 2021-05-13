import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.jpg';
import Img3 from '../../assets/images/3.jpg';
import Img4 from '../../assets/images/4.jpg';



export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    };
  return (
    <Slider {...settings}>
         <div>
        <img src={Img1} />
      </div>
      <div>
      <img src={Img2} />
      </div>
      <div>
      <img src={Img3} />
      </div>
      <div>
      <img src={Img4} />
      </div>
      
    
     </Slider>
  );
}
