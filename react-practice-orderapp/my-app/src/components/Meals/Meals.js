import React from 'react';
import Food from './Food/Food';
import classes from './Meals.module.css'

// 
const Meals = (props) => {

    return (
        // set scroll bar to Meals
        <div className={classes.Meals}>
            {props.mealsData.map(item=>
                <Food key={item.id} food={item} onAdd={props.onAdd} onRemove={props.onRemove}/>
            )}
            
        </div>
    );
}

export default Meals;