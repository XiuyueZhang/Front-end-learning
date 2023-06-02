import classes from './Cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const cartAmount = props.cartData.totalPrice

    return (
        <div className={classes.wrapper}>
            <span className={classes.bag}>
                <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <span className={classes.amount}>
                ${props.cartData.totalPrice}
            </span>
            <button className={cartAmount === 0 ? classes.checkoutInactive: classes.checkout }>
                <span className={cartAmount === 0 ? classes.inactive : ''}>Check Out</span>
            </button>

        </div>
    );
}

export default Cart;