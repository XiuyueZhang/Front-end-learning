import classes from './Cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faCircle} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/CartContext'
import { useContext, useState } from 'react'
import CartDetails from './CartDetails/CartDetails'
import React from 'react';
import Checkout from './Checkout/Checkout'

const Cart = () => {

    const ctx = useContext(CartContext)

    const [showDetails, setShowDetails] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const showDetailsHandler = () => {
        if(ctx.totleAmount === 0) return;
        setShowDetails(prevState => !showDetails)
    }

    const showCartHandler = () => {
        if(ctx.totleAmount === 0) return;
        setShowCart(prevState => !showCart)
    }

    const closeCartHandler = () => {
        setShowCart(false)
    }

    return (
        <div className={classes.wrapper} onClick={showDetailsHandler}>
            {(showDetails && ctx.totleAmount !== 0) && <CartDetails />}
            {showCart && <Checkout onHide={closeCartHandler}/>}

            <span className={classes.bag}>
                <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <span className={`${classes.number} ${ctx.totleAmount === 0 ? classes.hide : ''}`}>
                <FontAwesomeIcon icon={faCircle} />
                <span className={classes.amount}>
                    {ctx.totleAmount}
                </span>
            </span>
            {ctx.totalPrice === 0? <span className={classes.msg}
                onClick={showDetailsHandler}>
                    Please add items</span>:<span className={classes.price}>
                {ctx.totalPrice}
            </span>}
            
            <button className={ctx.totalPrice === 0 ? classes.checkoutInactive: classes.checkout} onClick={showCartHandler}>
                <span className={ctx.totalPrice === 0 ? classes.inactive : ''}>Check Out</span>
            </button>

        </div>
    );
}

export default Cart;