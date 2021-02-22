import React from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = ( props ) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;