import React from 'react';
import { useSpring, animated } from "react-spring";

import classes from './MainIntro.module.css';
import WorkTogetherButton from '../../components/UI/Buttons/WorkTogetherButton/WorkTogtherButton';
import HumanIcon from '../../assets/Images/humaaans-sitting-8.svg'

const MainIntro = props => {
    const introOpac = useSpring({opacity: '1', from: {opacity: '0' }});
    const introMove = useSpring({from: { transform: 'translateX(-100px)', opacity: '0' },
        to: { transform: 'translateX(0px)', opacity: '1' }, config: {duration: 500}});

    return (
        <>
            <div className={classes.MainSection}>
                <div className={classes.BannerPlaceholder}>
                    <animated.div style={introMove} className={classes.ContextContainer}>
                        <p className={classes.BigText}>
                            Hi, I'm Lawangin!<br/>
                            I'm a full stack developer. <br/>
                            <span className={classes.SmallText}>I solve problems using code and design.</span>
                        </p>
                        <div className={classes.Button} ><WorkTogetherButton text="LET'S WORK TOGETHER" /></div>
                    </animated.div>
                </div>
                <animated.div style={introOpac}>
                    <img className={classes.HumanImage} alt="Human sitting illustration" src={HumanIcon} />
                </animated.div>
            </div>
        </>
    );
};

export default MainIntro;