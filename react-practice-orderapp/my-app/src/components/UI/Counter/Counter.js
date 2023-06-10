
import classes from './Counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import MyContext from '../../../store/CartContext'

const Counter = (props) => {

    const ctx = useContext(MyContext)

    const addFood = (item) => {
        ctx.cartDispatch({
            type: "addCartItem",
            item: item
        })
    }
    const removeFood = (item) => {
        // ctx.removeItemHandler(item)
        ctx.cartDispatch({
            type: "removeCartItem",
            item: item
        })
    }

    return (
        <div className={classes.Counter}>
            { (props.food.amount && props.food.amount !== 0)?            
                (<>
                    <button className={classes.Sub} onClick={()=>{removeFood(props.food)}}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <span className={classes.Count}>{props.food.amount}</span>
                </>
                ) : null
            }
            
            <button className={classes.Add} onClick={()=>{addFood(props.food)}}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
}

export default Counter;