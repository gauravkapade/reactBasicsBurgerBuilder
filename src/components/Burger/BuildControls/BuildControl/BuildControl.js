import React from 'react';
import classes from './BuildControl.module.css'
const buildControl = (props) =>{
    return (
    <div className={classes.BuildControl}>
            <div className = {classes.Label}>{props.ingredientName}</div>
            <button className = {classes.More} onClick = {props.addIngredient} >Add Me</button>
            <button className = {classes.Less} onClick = {props.removeIngredient} disabled ={props.disabled}>Remove</button>
        </div>
    );
}

export default buildControl;