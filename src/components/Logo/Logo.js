import React from 'react';
import { NavLink } from "react-router-dom";

import LogoImage from '../../assets/Logo/LawanginKhanLOGO-01-01.png';
import classes from './Logo.module.css';

const Logo = props => {
    return (
        <>
            <NavLink to="/" exact={props.exact} style={{textDecoration: 'none'}}>
                <div className={classes.Logo}><img className={classes.Image} alt="Logo" src={LogoImage} />
                <h2 className={classes.Name}>Lawangin Khan</h2></div>
            </NavLink>
        </>
    );
};

export default Logo;