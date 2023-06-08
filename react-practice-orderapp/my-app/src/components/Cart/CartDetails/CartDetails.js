import React from 'react';
import classes from './CartDetails.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext';
import { useContext, useState } from 'react'
import Food from '../../Meals/Food/Food'
import CancelConfirm from './CancelConfirm';

const CartDetails = () => {

    const ctx = useContext(CartContext)

    const [showCancelConfirm, setShowCancelConfirm] = useState(false)

    const clearCartConfirm = () => {
        setShowCancelConfirm(true)
    }
    
    const clearCartCancel = (e) => {
        e.stopPropagation()
        setShowCancelConfirm(false)
        
    }
    

    return (
        <Backdrop onClick={clearCartCancel}>
            {showCancelConfirm && <CancelConfirm clearCartCancel={clearCartCancel} />}
            <div
                className={classes.back}
                onClick={e => {
                    e.stopPropagation();
                }}
                >
                <div className={classes.wrapper}>
                    <span className={classes.detail}>Cart details</span>
                    <span className={classes.icon}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className={classes.clear}
                        onClick={clearCartConfirm}>Clear cart</span>
                </div>
                <div className={classes.content}>
                    {ctx.items.map(item=>
                        <Food noDesc key={item.id} food={item}/>
                    )}
                </div>
                
            </div>
        </Backdrop>
    );
}

export default CartDetails;