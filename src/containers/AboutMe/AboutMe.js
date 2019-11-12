import React from 'react';

import classes from './AboutMe.module.css';
import Portrait from '../../assets/Images/mage 2019.png';
import WorkTogetherButton from '../../components/UI/Buttons/WorkTogetherButton/WorkTogtherButton';

const aboutMe = props => {
    return (
        <>
            <div className={classes.AboutMe}>
                <h1>About Me, My Skills and Interests</h1>
                <div className={classes.AboutMeContent}>
                    <div>
                        <p><strong>Skills but not limited to:</strong><br />
                            Javascript, CSS, HTML5, ReactJS, NodeJS, Mobile Responsive Design,
                            Express, MongoDB, MySQL, jQuery, Firebase<br /><br />
                            Lawangin Khan is full stack developer from the nation’s capital in Washington D.C.
                            who is super passionate about design, development, and business. From a technical standpoint,
                            he spends most of the time working with JavaScript, CSS3, HTML5. And he is looking forward to the future of
                            web and mobile technologies.<br /><br />
                            Lawangin studied Bioinformatics at VCU where he first fell in love with programming during an intro
                            to java programming class. Since then, programming has become his passion where he consistently challenges
                            himself in the ever changing web development world.<br /><br />
                            If you have any questions, email lawangin.khan@gmail.com. Or leave a
                            message by clicking the button below.
                        </p>
                    </div>
                    <div className={classes.Portrait}><img alt="Lawangin portrait" src={Portrait} /> </div>
                </div>
                <WorkTogetherButton text="CONTACT ME" />
            </div>
        </>
    );
};

export default aboutMe;