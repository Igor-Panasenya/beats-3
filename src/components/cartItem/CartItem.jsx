import React, {useState} from 'react';
import './cartItem.scss';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {BiMinus, BiPlus} from "react-icons/bi";

import {useDispatch} from "react-redux";
import {removeItemCart, addCount, removeCount} from "../../redux/slices/cartSlice";

const CartItem = ({cartItem}) => {

    const dispatch = useDispatch()

    // ДОБАВЛЕНИЕ +1 КОЛИЧЕСТВА ТОВАРА В КОРЗИНЕ
    const addCountItem = () => {
        dispatch(addCount(cartItem))
    }
    // УДАЛЕНИЕ -1 КОЛИЧЕСТВА ТОВАРА В КОРЗИНЕ
    const delCountItem = () => {
        dispatch(removeCount(cartItem))
    }

    // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
    const delCartItem = () => {
        dispatch(removeItemCart(cartItem));
    }

    const [countCartItem, setCountCartItem] = useState(1);

    return (
        <div key={cartItem.id} className="cart-item">
            <img
                className='cart-item-image'
                src={`img/product${cartItem.id}.png`}
                alt="photo"
            />

            <div className="cart-item-description">
                <p className="cart-item-title">{cartItem.title}</p>
                <p className="cart-item-price">{cartItem.price}</p>
            </div>

            <div className="cart-item-count-box">
                <button disabled={cartItem.count == 1 ? 'disabled' : ''} className="btn-empty" onClick={delCountItem}>
                    <BiMinus />
                </button>

                <span className="cart-item-count">
                    {cartItem.count}
                </span>

                <button className="btn-empty" onClick={addCountItem}>
                    <BiPlus />
                </button>
            </div>

            <button onClick={delCartItem} className="btn-empty delete-item">
                <AiOutlineCloseCircle size={30}/>
            </button>
        </div>
    );
};

export default CartItem;