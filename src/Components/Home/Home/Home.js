import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Tesimonials from '../Testimonials/Tesimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Tesimonials></Tesimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;