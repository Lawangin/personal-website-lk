import React from 'react';

import MainIntro from '../MainIntro/MainIntro';
import CardGrid from '../CardGrid/CardGrid';
import AboutMe from '../AboutMe/AboutMe';

const homePage = props => {


    return (
        <>
            <MainIntro/>
            <CardGrid/>
            <AboutMe/>
        </>
    );
};

export default homePage;