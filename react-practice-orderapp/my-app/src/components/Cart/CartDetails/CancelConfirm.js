import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CancelConfirm.module.css';
import CartContext from '../../../store/CartContext';
import { useContext } from 'react'

const CancelConfirm = () => {

    const ctx = useContext(CartContext)

    return (
        <Backdrop>
            <div className={classes.wrapper}>
                <h2>Confirm to clear the cart</h2>
                <div className={classes.button}>
                    <button className={classes.cancelButton} onClick={ctx.clearCartCancel}>Cancel</button>
                    <button className={classes.confirmButton} onClick={ctx.clearCartHandler}>Confirm</button>
                </div>
            </div>
        </Backdrop>
    );
}

export default CancelConfirm;