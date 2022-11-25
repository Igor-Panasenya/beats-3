import React from 'react';
import Banner from "../components/banner/Banner";
import Sponsor from "../components/sponsors/Sponsor";
import Specs from "../components/specs/Specs";
import Case from "../components/case/Case";
import Discount from "../components/dicsount/Discount";
import Products from "../components/products/Products";

const MainPage = () => {
    return (
        <>
            <Banner />
            <Sponsor />
            <Specs />
            <Case />
            <Discount />
            <Products />
        </>
    );
};

export default MainPage;