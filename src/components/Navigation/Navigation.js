import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './Navigation.module.css';
import hamburgerIcon from '../../assets/Icons/ic_menu.svg';
import githubIcon from "../../assets/Icons/Icon awesome-github.svg";

const Navigation = props => {

    return (
        <ul className={classes.Navigation}>
            <li><NavLink to="/projects" exact={props.exact} activeClassName={classes.active} >
                Projects
            </NavLink></li>
            <li><NavLink to="/aboutme" exact={props.exact} activeClassName={classes.active} >
                About Me
            </NavLink></li>
            <li><NavLink to="/contactme" exact={props.exact} activeClassName={classes.active} >
                Contact Me
            </NavLink></li>
            <li><a href="https://github.com/Lawangin/" ><img alt="github icon" src={githubIcon} /></a></li>
            <div onClick={props.clickedHamburger}><img
                className={classes.NavigationBurger}
                alt="mobile menu" src={hamburgerIcon}
            /></div>
        </ul>
    );
};

export default Navigation;