import classes from './Cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    console.log(props)
    return (
        <div className={classes.wrapper}>
            <span className={classes.bag}>
                <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <span className={classes.amount}>
                ${props.cartData.totalPrice}
            </span>
            <button className={classes.checkout}>
                <span>Check Out</span>
            </button>
        </div>
    );
}

export default Cart;