import React from 'react';
import classes from './Food.module.css'
import Counter from '../../UI/Counter/Counter';

const Food = (props) => {

    return (
        <div className={classes.Food}>
            <div className={classes.ImgBox}>
                <img src={props.food.img} alt={props.food.title} />
            </div>
            <div>
                <h2 className={classes.Title}>{props.food.title}</h2>
                <p className={classes.Desc}>{props.food.desc}</p>
                <div className={classes.PriceBox}>
                    <span className={classes.Price}>{props.food.price}</span>
                    <Counter amount={props.food.amount}/>
                </div>
            </div>
        </div>
    );
}

export default Food;