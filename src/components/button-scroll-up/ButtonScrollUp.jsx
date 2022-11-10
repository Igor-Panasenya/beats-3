import React from 'react';
import {MdOutlineKeyboardArrowUp} from "react-icons/md";

const ButtonScrollUp = ({scroll}) => {
    return (
        <button onClick={() => window.scroll(0, 0)} className={scroll > 50 ? 'btn scroll-up visible' : 'btn scroll-up'}>
            <MdOutlineKeyboardArrowUp size={25}/>
        </button>
    );
};

export default ButtonScrollUp;