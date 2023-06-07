import classes from './Cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faCircle} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/CartContext'
import { useContext, useState } from 'react'
import CartDetails from './CartDetails/CartDetails'
import React from 'react';

const Cart = () => {

    const ctx = useContext(CartContext)

    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(!showCart)
    }

    return (
        <div className={classes.wrapper}>
            {showCart && <CartDetails />}

            <span className={classes.bag} onClick={showCartHandler}>
                <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <span className={`${classes.number} ${ctx.totleAmount === 0 ? classes.hide : ''}`}>
                <FontAwesomeIcon icon={faCircle} />
                <span className={classes.amount}>
                    {ctx.totleAmount}
                </span>
            </span>
            {ctx.totalPrice === 0? <span className={classes.msg}
                onClick={showCartHandler}>
                    Please add items</span>:<span className={classes.price}>
                {ctx.totalPrice}
            </span>}
            
            <button className={ctx.totalPrice === 0 ? classes.checkoutInactive: classes.checkout }>
                <span className={ctx.totalPrice === 0 ? classes.inactive : ''}>Check Out</span>
            </button>

        </div>
    );
}

export default Cart;