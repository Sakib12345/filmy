import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../Header/Header';
import Porfolio from '../Porfolio/Porfolio';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Porfolio></Porfolio>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;