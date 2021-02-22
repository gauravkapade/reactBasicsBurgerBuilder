import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const controls =[
    {ingredient:"Salad", type:'salad'},
    {ingredient:"Bacon", type:'bacon'},
    {ingredient:"Cheese", type:'cheese'},
    {ingredient:"Chicken", type:'chicken'}
]

const buildControls = (props) =>{
    return (
        <div className = {classes.BuildControls}>
            <p>Current Burger Price:<strong> ${props.price.toFixed(2)}</strong></p>
            {controls.map((element)=>{
                return <BuildControl key={element.ingredient} 
                ingredientName={element.ingredient}
                addIngredient = {()=>{props.ingredientsAdd(element.type)}}
                removeIngredient = {()=>{props.ingredientsRemove(element.type)}}
                disabled = {props.disable[element.type]}
                />
            })}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.placeOrder}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;