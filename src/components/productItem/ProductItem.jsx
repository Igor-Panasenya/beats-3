import React from 'react';
import {BiShoppingBag} from "react-icons/bi";
import {BsCheckLg} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addItemCart} from "../../redux/slices/cartSlice";

const ProductItem = ({productItem}) => {

    const cartList = useSelector(state => state.cart.items);
    const isAddToCart = cartList.some(cartItem => cartItem.id === productItem.id);

    const dispatch = useDispatch();
    const handleClick = (styleItem) => {
        dispatch(addItemCart(styleItem));
    }

    return (
        <div  className="style-card" data-aos="fade-down" data-aos-delay={`${productItem.id}50`}>
            <img src={`img/product${productItem.id}.png`} alt="photo"/>

            <div className="style-card-content">
                <div className="style-card-content-left">
                    <p className="style-card-content-title">{productItem.title}</p>
                    <p className="style-card-content-price">{productItem.price}</p>
                </div>

                <button disabled={isAddToCart ? 'disabled' : ''} onClick={ () => handleClick(productItem) } className="btn">
                    {isAddToCart ? <BsCheckLg /> : <BiShoppingBag size={20} />}
                </button>
            </div>
        </div>
    );
};

export default ProductItem;