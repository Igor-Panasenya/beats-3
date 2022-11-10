import React from 'react';
import {useContext} from "react";
import {VisibleCartContext} from "../../App";

const DarkBg = () => {

    const { setIsVisibleCart } = useContext(VisibleCartContext);
    const onClickDarkBG = () => {
        setIsVisibleCart(false);
        document.body.classList.remove('no-scroll');
    }

    return (
        <div onClick={() => onClickDarkBG()} className='dark-bg'>

        </div>
    );
};

export default DarkBg;