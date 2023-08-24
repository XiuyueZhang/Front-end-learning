import React from 'react';
import classes from './Checkout.module.css'
import  ReactDOM  from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Food from '../../Meals/Food/Food'
import CartContext from '../../../store/CartContext';
import { useContext } from 'react'

const checkoutRoot = document.getElementById("checkout-root")

const Checkout = (props) => {

    const ctx = useContext(CartContext)



    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div className={classes.close} onClick={props.onHide}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            <div className={classes.detail}>
                Details
            </div>
            <div className={classes.content}>
                {ctx.items.map(item=>
                    <Food noDesc key={item.id} food={item}/>
                )}
            </div>
            <div className={classes.total}>
                {ctx.totalPrice}
            </div>
            <div className={classes.wrapper}>
                <span className={classes.price}>
                    {ctx.totalPrice}
                </span>
                <button className={classes.button}>
                    <span>Check Out</span>
                </button>
            </div>
        </div>, 
        checkoutRoot
    )
}

export default Checkout;