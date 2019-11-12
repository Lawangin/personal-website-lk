import React from 'react';

import classes from './Toolbar.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';

const toolbar = props => {
    return (
        <>
            <div className={classes.Toolbar}>
                <Logo />
                <nav>
                    <Navigation clickedHamburger={props.sideMenuClicked}/>
                </nav>
            </div>
        </>
    );
};

export default toolbar;