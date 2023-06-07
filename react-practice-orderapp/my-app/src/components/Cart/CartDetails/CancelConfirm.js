import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CancelConfirm.module.css'

const CancelConfirm = () => {

    
    return (
        <Backdrop>
            <div className={classes.wrapper}>
                <h2>Confirm to clear the cart</h2>
                <div className={classes.button}>
                    <button className={classes.cancelButton}>Cancel</button>
                    <button className={classes.confirmButton}>Confirm</button>
                </div>
            </div>
        </Backdrop>
    );
}

export default CancelConfirm;