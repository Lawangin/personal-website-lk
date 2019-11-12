import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './Footer.module.css';
import LogoIcon from '../../assets/Logo/LawanginKhanLOGO-01-01.png';
import FooterNavigation from '../../components/Navigation/FooterNavigation';

const footer = props => {
    return (
        <>
            <div className={classes.Footer}>
                <div className={classes.Logo}>
                    <NavLink to="/" exact={props.exact}>
                        <img alt="logo" src={LogoIcon} />
                    </NavLink>
                    <p> Copyright © 2019 Lawangin Khan </p>
                </div>
                <FooterNavigation />
            </div>
        </>
    );
};

export default footer;