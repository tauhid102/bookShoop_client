import React from 'react';
import Header from '../../Share/Header/Header';
import Slider from '../Slider/Slider';
import Services from '../../Home/Services/Services';
import ShowReview from '../ShowReview/ShowReview';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;