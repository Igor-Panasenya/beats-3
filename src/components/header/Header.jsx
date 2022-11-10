import React, {useContext, useState} from 'react';
import './header.scss';
import {CgMenuGridR} from "react-icons/cg";
import {GrFormClose} from "react-icons/gr";
import {RiShoppingCartLine} from "react-icons/ri";
import {BsFillSunFill} from "react-icons/bs";
import {FaMoon} from "react-icons/fa";
import {VisibleCartContext} from "../../App";
import UseTheme from "../../use-theme/UseTheme";
import {SiBeatsbydre} from "react-icons/si";
import {useSelector} from "react-redux";
import {GoPrimitiveDot} from "react-icons/go";

const Header = ({scroll}) => {

    const cartList = useSelector(state => state.cart.items);

    const { setIsVisibleCart } = useContext(VisibleCartContext);

    const menuItems = ['home', 'specs', 'case', 'products'];

    const [isActiveMenuItem, setIsActiveMenuItem] = useState(0);
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const onClickMenuItem = (index) => {
        setIsVisibleMenu(false);
        setIsActiveMenuItem(index);
    }
    const onClickDarkMode = () => {
        setIsVisibleMenu(false);
        setDarkTheme(!darkTheme);
    }
    const onClickCart = () => {
        setIsVisibleMenu(false);
        setIsVisibleCart(true);
        window.scroll(0,0);
        document.body.classList.add('no-scroll');
    };
    const {darkTheme, setDarkTheme} = UseTheme();


    return (
        <header className={scroll > 50 ? 'header bg-visible' : 'header'}>

            <div className="container">
                <nav className='navbar'>
                    <a href="#" className='logo'><SiBeatsbydre size={30}/></a>
                    <div className={isVisibleMenu ? "menu visible" : "menu"}>

                        {menuItems.map((menuItem, index) =>
                            <a
                                key={menuItem}
                                onClick={() => onClickMenuItem(index)}
                                href={`#${menuItem}`}
                                className={isActiveMenuItem === index ? "menu-item active" : "menu-item"}>
                                {menuItem}
                            </a>
                        )}

                        {/*button open cart*/}
                        <button onClick={() => onClickCart()} className='btn-empty btn-cart'>
                            <RiShoppingCartLine size={75}/>
                            {cartList.length > 0 && <GoPrimitiveDot className='cartNoEmpty' data-aos="fade-down" data-aos-duration="200"/>}
                        </button>

                        {/*button theme dark/light*/}
                        <button className="btn-empty btn-theme" onClick={() => onClickDarkMode()}>
                            {darkTheme ? <BsFillSunFill size={20}/> : <FaMoon />}
                        </button>

                        {/*button close menu*/}
                        <button onClick={() => setIsVisibleMenu(false)} className="btn-empty menu-close">
                            <GrFormClose size={40}/>
                        </button>
                    </div>

                    <CgMenuGridR onClick={() => setIsVisibleMenu(true)} className='btn-empty hamburger' size={35} />
                </nav>
            </div>
        </header>
    );
};

export default Header;