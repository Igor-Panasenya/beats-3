import React from 'react';
import './specs.scss';
import imageSpecs from '../../img/specs.png';
import {FaBluetoothB} from "react-icons/fa";
import {RiBatteryChargeLine, RiPlugLine} from "react-icons/ri";
import {BiMicrophone} from "react-icons/bi";

const Specs = () => {
    return (
        <section id='specs' className='specs'>
            <div className="container">
                <h3 data-aos="fade-up">Specs</h3>
                <div className="specs-content">
                    <div className="specs-items">
                        <div className="specs-item" data-aos="fade-right" data-aos-delay="250" >
                            <FaBluetoothB />
                            <p className="specs-title">Connection</p>
                            <p className="specs-body">Bluetooth v5.2</p>
                        </div>
                        <div className="specs-item" data-aos="fade-right" data-aos-delay="400" >
                            <RiBatteryChargeLine />
                            <p className="specs-title">Battery</p>
                            <p className="specs-body">Duration 40h</p>
                        </div>
                        <div className="specs-item" data-aos="fade-right" data-aos-delay="400" >
                            <RiPlugLine />
                            <p className="specs-title">Load</p>
                            <p className="specs-body">Fast charge 4.2-AAC</p>
                        </div>
                        <div className="specs-item" data-aos="fade-right" data-aos-delay="250" >
                            <BiMicrophone />
                            <p className="specs-title">Microphone</p>
                            <p className="specs-body">Supports Apple Siri
                                and Google</p>
                        </div>
                    </div>
                    <img src={imageSpecs} alt="photo" data-aos="fade-left" data-aos-delay="250" />
                </div>
            </div>
        </section>
    );
};

export default Specs;