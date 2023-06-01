import React from 'react';
import Food from './Food/Food';
import classes from './Meals.module.css'

// 
const Meals = ({mealsData}) => {
    return (
        // set scroll bar to Meals
        <div className={classes.Meals}>
            {mealsData.map(item=>
                <Food key={item.id} food={item}/>
            )}
            
        </div>
    );
}

export default Meals;