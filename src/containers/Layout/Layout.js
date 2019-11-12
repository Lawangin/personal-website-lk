import React, { useState, useCallback } from 'react';

import classes from './Layout.module.css';
import Toolbar from "../Toolbar/Toolbar";
import SideMenu from '../../components/SideMenu/SideMenu';
import Footer from '../Footer/Footer';

const Layout = props => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    const closeSideMenuHandler = () => {
        setShowSideMenu(false);
    };

    const toggleSideMenuHandler = useCallback(() => {
        setShowSideMenu(prevState => !prevState);
    }, [setShowSideMenu]);


    return (
        <>
            <Toolbar sideMenuClicked={toggleSideMenuHandler} />
            <SideMenu open={showSideMenu} close={closeSideMenuHandler} burgerMenuClicked={toggleSideMenuHandler} />
            <main className={classes.MainSection}>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;