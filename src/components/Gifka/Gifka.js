import React from 'react';
import gifka from '../../assets/video/gif.mp4';
import "./Gifka.css";
import Video from 'react-responsive-video';

const Gifka = () => {
   return (
      <div>
         <div className="gifka">
            <h4 className="gifka__title1">Dream are coming</h4>
            <h2 className="gifka__title1">Coming soon...</h2>
            <Video 
            className="gifka"
            mp4={gifka}
            objectFit={"cover"}
            style={{height: "450px"}}
            />
            </div>
      </div>
   );
};

export default Gifka;