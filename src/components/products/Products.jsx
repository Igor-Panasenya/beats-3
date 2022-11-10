import React, {useState} from 'react';
import './products.scss';
import ProductItem from "../productItem/ProductItem";

const Products = () => {

    const productsList = [
        {
            id: '1',
            title: 'Black',
            price: '249',
        },
        {
            id: '2',
            title: 'Red Black',
            price: '249',
        },
        {
            id: '3',
            title: 'Night Black',
            price: '249',
        },
        {
            id: '4',
            title: 'Blue',
            price: '249',
        },
        {
            id: '5',
            title: 'Twilight Gray',
            price: '249',
        }
    ];

    return (
        <section id='products' className='style'>
            <div className="container">
                <h3 data-aos="fade-up">Choose <br/> Your Style</h3>

                <div className="style-list">
                    {productsList.map(productItem =>

                        <ProductItem key={productItem.title} productItem={productItem} />

                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;