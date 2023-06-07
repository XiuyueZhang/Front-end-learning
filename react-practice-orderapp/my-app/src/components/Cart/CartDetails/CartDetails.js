import React from 'react';
import classes from './CartDetails.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext';
import { useContext } from 'react'
import Food from '../../Meals/Food/Food'

const CartDetails = () => {

    const ctx = useContext(CartContext)
    
    return (
        <Backdrop>
            <div className={classes.back}>
                <div className={classes.wrapper}>
                    <span className={classes.detail}>Cart details</span>
                    <span className={classes.icon}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className={classes.clear}
                        onClick={ctx.clearCartHandler}>Clear cart</span>
                </div>
                <div className={classes.content}>
                    {ctx.items.map(item=>
                        <Food key={item.id} food={item}/>
                    )}
                </div>
                <div className={classes.null}></div>
            </div>
        </Backdrop>
    );
}

export default CartDetails;