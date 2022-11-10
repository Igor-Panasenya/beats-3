import React, {useState} from 'react';
import './case.scss';
import imageCase from "../../img/case.png";
import {FiInfo} from "react-icons/fi";
import {FaCheck} from "react-icons/fa";
import DarkBG from "../dark-bg/DarkBG";

const Case = () => {

    const [isVisibleCaseModal, setIsVisibleCaseModal] = useState(false);

    return (
        <section id='case' className='case'>
            <div className="container">
                <h3 data-aos="fade-up">Case</h3>
                <div className="case-content">
                    <img src={imageCase} alt="photo" data-aos="fade-down" data-aos-delay="250" />
                    <div className="case-text" data-aos="fade-up" data-aos-delay="250" >
                        <p>
                            With a comfortable and adaptable case so that you can store
                            it whenever you want, and keep your durability forever.
                        </p>
                        <button onClick={() => setIsVisibleCaseModal(true)} className="btn">
                            <FiInfo />
                            More info
                        </button>
                    </div>
                </div>
            </div>


            {/*Modal case*/}
            <div className={isVisibleCaseModal ? "modal-case visible" : "modal-case"} >
                <h2>In The Box</h2>

                <div className="modal-case-info">
                    <p className='inTheBox-item'>Beats Studio3 Wireless headphones</p>
                    <p className='inTheBox-item'>Carrying Case</p>
                    <p className='inTheBox-item'>3.5mm RemoteTalk cable</p>
                    <p className='inTheBox-item'>Universal USB charging cable</p>
                    <p className='inTheBox-item'>Quick Start Guide</p>
                    <p className='inTheBox-item'>Warranty Card</p>
                </div>

                <button onClick={() => setIsVisibleCaseModal(false)} className='btn'> <FaCheck /> Ok</button>
            </div>

            {isVisibleCaseModal && <DarkBG />}
        </section>
    );
};

export default Case;