import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './FooterNavigation.module.css';
import githubIcon from '../../assets/Icons/Icon awesome-github.svg';

const footerNavigation = props => {

    return (
        <ul className={classes.Navigation}>
            <li><NavLink to="/projects" exact={props.exact}>Projects</NavLink></li>
            <li><NavLink to="/aboutme" exact={props.exact}>About Me</NavLink></li>
            <li><NavLink to="/contactme" exact={props.exact}>Contact Me</NavLink></li>
            <li><a href="https://github.com/Lawangin/" ><img alt="github icon" src={githubIcon} /></a></li>
        </ul>
    );
};

export default footerNavigation;