import React from 'react';
import classes from './Food.module.css'
import Counter from '../../UI/Counter/Counter';

const Food = (props) => {
    return (
        <div className={classes.Food}>
            <div className={classes.ImgBox}>
                <img src={props.img} alt={props.title} />
            </div>
            <div>
                <h2 className={classes.Title}>{props.title}</h2>
                <p className={classes.Desc}>{props.desc}</p>
                <div className={classes.PriceBox}>
                    <span className={classes.Price}>{props.price}</span>
                    <Counter amount={1}/>
                </div>
            </div>
        </div>
    );
}

export default Food;