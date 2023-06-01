
import classes from './Counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Counter = (props) => {

    const addFood = (item) => {
        props.onAdd(item)
    }

    return (
        <div className={classes.Counter}>
            { (props.food.amount && props.food.amount !== 0)?            
                (<>
                    <button className={classes.Sub}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <span className={classes.Count}>{props.amount}</span>
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