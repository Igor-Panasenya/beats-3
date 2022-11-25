import React from 'react';
import './footer.scss';
import { useForm } from "react-hook-form";
import {RiSendPlaneLine} from "react-icons/ri";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {SiBeatsbydre} from "react-icons/si";
import {Link} from "react-router-dom";

const Footer = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data);
    }

    return (
        <footer className='footer'>
            <div className="container">
                <a className="footer-logo" href="#home" data-aos="fade-down" data-aos-delay="250"><SiBeatsbydre size={30} /></a>

                <div className="footer-column products" data-aos="fade-down" data-aos-delay="350">
                    <h6 className="footer-column-title">Products</h6>

                    <Link to='/headphones' onClick={() => window.scroll(0,0)} className="footer-column-link">Headphones</Link>
                    <Link to='/earphones' onClick={() => window.scroll(0,0)} className="footer-column-link">Earphones</Link>
                    <Link to='/earbuds' onClick={() => window.scroll(0,0)} className="footer-column-link">Earbuds</Link>
                    <Link to='/accesories' onClick={() => window.scroll(0,0)} className="footer-column-link">Accesories</Link>
                </div>
                <div className="footer-column supports" data-aos="fade-down" data-aos-delay="450">
                    <h6 className="footer-column-title">Product help</h6>

                    <Link to='/register' onClick={() => window.scroll(0,0)} className="footer-column-link">Register</Link>
                    <Link to='/updates' onClick={() => window.scroll(0,0)} className="footer-column-link">Updates</Link>
                    <Link to='/provides' onClick={() => window.scroll(0,0)} className="footer-column-link">Provides</Link>
                </div>
                <div className="subscribe-box" data-aos="fade-down" data-aos-delay="550">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>
                            <input className='input' placeholder="E-mail" {...register('email', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                                pattern: {
                                    value: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                                    message: "Invalid E-mail."
                                }
                            })} />
                            <div>{errors?.email && <p style={{color: 'red', fontSize: '14px', position: 'absolute'}}>{errors.email.message} </p>}</div>
                        </label>

                        <input className='btn submit' type="submit" value='Subscribe' />
                        <RiSendPlaneLine size={20} className='submit-icon'/>
                    </form>
                    <div className="footer-socials">
                        <a href='https://ru-ru.facebook.com/' target='_blank' className="socials-item"><FaFacebookF /></a>
                        <a href='https://www.instagram.com/' target='_blank' className="socials-item"><BsInstagram /></a>
                        <a href='https://twitter.com/?lang=ru' target='_blank' className="socials-item"><FiTwitter /></a>
                    </div>

                </div>
            </div>
            <p className="copyright">Developer: <a href="https://portfolio-panasenya-igor.vercel.app/" target='_blank'>Igor Panasenia</a></p>
        </footer>
    );
};

export default Footer;