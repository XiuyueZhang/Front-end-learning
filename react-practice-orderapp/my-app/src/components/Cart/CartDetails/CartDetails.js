import React from 'react';
import classes from './CartDetails.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const CartDetails = () => {
    return (
        <Backdrop>
            <div className={classes.back}>
                <div className={classes.wrapper}>
                    <span className={classes.detail}>Cart details</span>
                    <span className={classes.icon}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className={classes.clear}>Clear cart</span>
                </div>
                <div className={classes.content}></div>
            </div>
        </Backdrop>
    );
}

export default CartDetails;