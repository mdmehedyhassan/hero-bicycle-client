import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import MoreArticles from '../MoreArticles/MoreArticles';

const Home = () => {
    return (
        <div style={{backgroundColor: 'rgba(230, 190, 238, 0.2)'}} className="container">
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <MoreArticles></MoreArticles>
        </div>
    );
};

export default Home;