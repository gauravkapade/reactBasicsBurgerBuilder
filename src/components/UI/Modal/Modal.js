import React from 'react';
import classes from './Modal.module.css'
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";


const modal = (props) =>{

    return (
        <Aux>
            <Backdrop show={props.show} clicked ={props.modalClodsed}/>
            <div 
            className = {classes.Modal}
            style ={{
                transform: props.show ? "translateY(0)" : "translateY(-110vh)",
                opacity: props.show ? '1' : '0.2'
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;