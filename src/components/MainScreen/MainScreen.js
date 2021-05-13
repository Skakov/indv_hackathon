import React from 'react';
import './MainScreen.css';
import Video from 'react-responsive-video';
import videoSrc from '../../assets/video/Video1.mp4';
import { Link } from 'react-router-dom';

const MainScreen = () => {
    return (
        <>
        <Link to="/shop" style={{color: 'black'}}>
            <div className="video">
            <Video 
            className="video"
            mp4={videoSrc}
            objectFit={"cover"}
            />
            </div>
        </Link>
            
        <div className="text">
            <Link to="/shop" style={{color: 'white'}}>
                {/* <h1 className="text__title1">Release your Dream </h1> 
                <h3 className="text__title2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla sit dolor aliquid quisquam tenetur debitis ea inventore, molestiae at quidem assumenda deserunt illum deleniti perspiciatis a fugiat. Deserunt, nesciunt. <br/> Dream</h3> */}
            </Link>
            <Link to="/shop">
                <button className="shop">Shop</button>
            </Link>    
        </div>

        </>
    );
};

export default MainScreen;