import React from 'react';
import './discoutn.scss';
import discountImage from '../../img/discount.png';
import {BiShoppingBag} from "react-icons/bi";

const Discount = () => {
    return (
        <section className='discount'>
            <div className="container">
                <div className="discount-content" data-aos="fade-right">
                    <h5>Immerse yourself in
                        your music
                    </h5>
                    <p>Get it now, up to 50% off.</p>
                    <a href="#products" className="btn">
                        <BiShoppingBag />
                        Shop Now
                    </a>
                </div>
                <img src={discountImage} alt="photo" data-aos="fade-left"/>
            </div>
        </section>
    );
};

export default Discount;