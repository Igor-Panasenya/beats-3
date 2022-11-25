import React from 'react';
import './banner.scss';
import imageBeats from '../../img/home.png';
import {BiShoppingBag} from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1500,
});

const Banner = () => {

    return (
        <section id='home' className='banner'>
            <div className="container">
                <img src={imageBeats} alt="beats3" className='main-image' data-aos="fade-down" />
                <div className="banner-content">
                    <h1 data-aos="fade-up" >On ear</h1>
                    <h2 data-aos="fade-up" data-aos-delay="150">Beats 3</h2>
                    <h4 data-aos="fade-up" data-aos-delay="250">Overview</h4>
                    <p className='banner-text' data-aos="fade-up" data-aos-delay="350">
                        Enjoy award-winning Beats sound with wireless listening freedom and a sleek,
                        streamlined design with comfortable padded earphones, delivering first-rate playback.
                    </p>
                    <a href="#products" className='btn' data-aos="fade-up" data-aos-delay="450">
                        <BiShoppingBag />
                        Add to Bag
                        <span className="price">$249</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;