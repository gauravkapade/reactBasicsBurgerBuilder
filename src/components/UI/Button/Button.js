import React from 'react';
import classes from './Button.module.css'
import Aux from "../../../hoc/Auxillary";


const button = (props) =>{

    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default button;