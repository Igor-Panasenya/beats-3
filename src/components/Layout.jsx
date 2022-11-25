import React from 'react';
import Header from "./header/Header";
import {Outlet} from "react-router-dom";
import Cart from "./cart/Cart";
import DarkBG from "./dark-bg/DarkBG";
import Footer from "./footer/Footer";

const Layout = ({isVisibleCart, scroll}) => {
    return (
        <>

            <Header scroll={scroll} />

            <main>
                <Outlet />
            </main>

            <Cart />
            {isVisibleCart && <DarkBG />}
            <Footer />

        </>
    );
};

export default Layout;