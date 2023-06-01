
import classes from './Counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import MyContext from '../../../store/MyContext'

const Counter = (props) => {


    

    const addFood = (item) => {
        // console.log(myParameter);
        // props.onAdd(item)
    }
    const removeFood = (item) => {
        // console.log(myParameter);
        // props.onRemove(item)
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
            <MyContext.Consumer>
        {(abc) => {
            return <div>
                {abc.name}
            </div>
        }}
    </MyContext.Consumer>
        </div>
    );
}

export default Counter;