import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummery.module.css';

const checkoutSummery = (props) => {
    return (
        <div className={classes.CheckoutSummery}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.chekoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
    );
}


export default checkoutSummery;