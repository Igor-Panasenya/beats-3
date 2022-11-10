import React, {useContext, useState} from 'react';
import './cart.scss';
import {GrFormClose} from "react-icons/gr";
import {RiShoppingCartLine} from "react-icons/ri";
import {BsArrowRightShort} from "react-icons/bs";
import {VisibleCartContext} from "../../App";
import CartItem from "../cartItem/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {TbBasketOff} from "react-icons/tb";
import {clearCart} from "../../redux/slices/cartSlice";
import {FaCheck} from "react-icons/fa";

const Cart = () => {

    const cartList = useSelector(state => state.cart.items);
    const {totalPrice} = useSelector(state => state.cart);

    const { isVisibleCart, setIsVisibleCart } = useContext(VisibleCartContext);
    const onClickCloseCart = () => {
        setIsVisibleCart(false);
        document.body.classList.remove('no-scroll');
    }

    const dispatch = useDispatch();
    const onClickPLaceOrder = () => {
        dispatch(clearCart());
        setIsVisibleCartModal(true);
    }
    const [isVisibleCartModal, setIsVisibleCartModal] = useState(false);
    const onClickOkModalCart = () => {
        setIsVisibleCartModal(false);
        onClickCloseCart();
    }
    return (
        <section className={isVisibleCart ? 'cart visible' : 'cart'}>
            <button onClick={() => onClickCloseCart()} className='btn-empty btn-cart-close'>
                <GrFormClose  size={40}/>
            </button>

            <h4>
                Cart
                <RiShoppingCartLine />
            </h4>

            <div className="cart-items">

                {cartList.length > 0

                    ?

                    cartList.map(cartItem =>
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )

                    :

                    <div className='cart-empty-text'>
                        <h5>Your cart is empty</h5>
                        <TbBasketOff size={80}/>
                    </div>

                }



            </div>
            <div className="cart-total-price">
                <p className='total-price-title'>Total Price</p>
                <span className='total-price-cost'>${totalPrice}</span>
            </div>
            <button disabled={cartList.length > 0 ? '' : 'disabled'} className="btn-empty cart-place-order" onClick={() => onClickPLaceOrder()}>
                <div className="place-order-box">
                    <div className="place-order">
                        <div className="lines"></div>
                        <div className="place-order-content">
                            <p>Place an Order</p>
                            <BsArrowRightShort size={25}/>
                        </div>
                    </div>
                </div>
            </button>



            {/*Modal case*/}
            <div className={isVisibleCartModal ? "modal-cart visible" : "modal-cart"} >
                <h2>Attention!</h2>

                <div className="modal-cart-info">
                    <p className='modal-cart-text'>The order hasn't gone anywhere, but now you understand what a developer can do :)</p>

                </div>

                <button onClick={() => onClickOkModalCart()} className='btn'> <FaCheck /> Ok </button>
            </div>

        </section>
    );
};

export default Cart;