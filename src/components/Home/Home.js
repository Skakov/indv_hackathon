import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Baner from '../Baner/Baner';
import Gifka from '../Gifka/Gifka';
import MainScreen from '../MainScreen/MainScreen';


const Home = () => {
    return (
        <div>
            <MainScreen/>
            <Carousel />
            <Baner/>
            <Gifka/>
        </div>
    );
};

export default Home;