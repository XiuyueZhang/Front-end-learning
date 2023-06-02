import classes from './Cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faCircle} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/CartContext'
import { useContext } from 'react'

const Cart = () => {

    const ctx = useContext(CartContext)

    return (
        <div className={classes.wrapper}>
            <span className={classes.bag}>
                <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <span className={classes.number}>
                <FontAwesomeIcon icon={faCircle} />
                <span className={classes.amount}>
                    {ctx.totleAmount}
                </span> 
            </span>
            <span className={classes.price}>
                {ctx.totalPrice}
            </span>
            <button className={ctx.totalPrice === 0 ? classes.checkoutInactive: classes.checkout }>
                <span className={ctx.totalPrice === 0 ? classes.inactive : ''}>Check Out</span>
            </button>

        </div>
    );
}

export default Cart;