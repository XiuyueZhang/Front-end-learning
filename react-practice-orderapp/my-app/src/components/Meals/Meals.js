import React from 'react';
import Food from './Food/Food';
import classes from './Meals.module.css'

// 
const Meals = ({mealsData}) => {
    return (
        // set scroll bar to Meals
        <div className={classes.Meals}>
            {mealsData.map(item=>
                <Food key={item.id} title={item.title} desc={item.desc} img={item.img} price={item.price}/>
            )}
            
        </div>
    );
}

export default Meals;