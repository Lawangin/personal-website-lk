import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './SideMenu.module.css'
import Backdrop from '../UI/Backdrop/Backdrop';
import closeIcon from '../../assets/Icons/close-circle-outline-icon-red.svg';
import githubIcon from "../../assets/Icons/Icon awesome-github.svg";

const SideMenu = props => {
    let attachedClass = [classes.SideMenu, classes.Close];
    if (props.open) {
        attachedClass = [classes.SideMenu, classes.Open];
    }


    return (
        <>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedClass.join(' ')} onClick={props.close} >
                <div className={classes.SideHeaderHolder} onClick={props.burgerMenuClicked}>
                    <h2 className={classes.MenuText}>MENU</h2>
                    <img className={classes.CloseIcon} alt="mobile menu" src={closeIcon} />
                </div>
                <ul className={classes.SideMenuLinks}>
                    <li><NavLink to="/" exact={props.exact} activeClassName={classes.active} >Home</NavLink></li>
                    <li><NavLink to="/projects" exact={props.exact} activeClassName={classes.active} >Projects</NavLink></li>
                    <li><NavLink to="/aboutme" exact={props.exact} activeClassName={classes.active} >About Me</NavLink></li>
                    <li><NavLink to="/contactme" exact={props.exact} activeClassName={classes.active} >Contact Me</NavLink></li>
                    <li><a href="https://github.com/Lawangin/" ><img alt="github icon" src={githubIcon} /></a></li>
                </ul>
            </div>
        </>
    );
};

export default SideMenu;