import React from 'react';
import classes from './Checkout.module.css'
import  ReactDOM  from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const checkoutRoot = document.getElementById("checkout-root")

const Checkout = (props) => {


    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div className={classes.close} onClick={props.onHide}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>, 
        checkoutRoot
    )
}

export default Checkout;