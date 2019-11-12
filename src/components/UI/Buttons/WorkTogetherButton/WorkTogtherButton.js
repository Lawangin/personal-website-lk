import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './WorkTogetherButton.module.css';
import ArrowIcon from '../../../../assets/Icons/Icon awesome-arrow-right.svg';

const workTogetherButton = props => {
    return (
        <NavLink to="/contactme" exact={props.exact} style={{textDecoration: 'none'}}>
            <button className={classes.Button}>
                <div className={classes.Content}>{props.text} <img className={classes.Arrow} alt="work together submit" src={ArrowIcon} /></div>
            </button>
        </NavLink>
    );
};

export default workTogetherButton;