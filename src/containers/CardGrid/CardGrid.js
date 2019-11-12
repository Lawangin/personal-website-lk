import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from "react-spring";

import classes from './CardGrid.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BurgerImage from '../../assets/Images/CardImages/burger-builder-app.png';
import BlogImage from '../../assets/Images/CardImages/blog-api-app.png';
import BitcoinImage from '../../assets/Images/CardImages/bitcoin-tracker.png';
import ShopImage from '../../assets/Images/CardImages/shope-nodejs.png';
import IngredientsImage from '../../assets/Images/CardImages/ingredient-list-app.png';

const CardGrid = props => {
    const [project] = useState({
        burger: {
            title: 'Burger Builder App',
            info: `Reactjs application that builds a burger and if authenticated, writes to firebase database.
                        The project includes technologies such as react router, authentication, form validation, and redux.
                        Used CSS modules to customize each component. Deployed to AWS S3 bucket.`,
            techUsed: [
                props.techs[0],
                props.techs[2],
                props.techs[4],
                props.techs[5]
            ],
            image: BurgerImage,
            codeUrl: 'https://github.com/Lawangin/Burger-builder',
            demoUrl: 'http://create-a-burger.s3-website-us-east-1.amazonaws.com/'
        },
        blog: {
            title: 'Blog with API App',
            info: `Reactjs front end application with Nodejs backend. Once authenticated, users may make a blog post with
                        title, image upload, and write content. Backend API is made with graphQL. Code attached is backend 
                        and can provide front end upon request. Front end deployed with AWS and backend deployed with Heroku.`,
            techUsed: [
                props.techs[0],
                props.techs[1],
                props.techs[5],
                props.techs[6],
                props.techs[7]
            ],
            image: BlogImage,
            codeUrl: 'https://github.com/Lawangin/Blog-backend-api',
            demoUrl: 'https://master.dl2k7a785sqgj.amplifyapp.com/'
        },
        bitcoin: {
            title: 'Bitcoin Tracker App',
            info: `App made with reactjs. Tracks bitcoin in USD and EURO using coindesk API. Has a drop down option
                        for request intervals at one hour, one minute and one second. Deployed the react app demo to github.`,
            techUsed: [
                props.techs[0],
                props.techs[5]
            ],
            image: BitcoinImage,
            codeUrl: 'https://github.com/Lawangin/bitcoin-tracker-app',
            demoUrl: 'https://lawangin.github.io/bitcoin-tracker-app/'
        },
        shop: {
            title: 'Online Store App',
            info: `NodeJS app made with Express framework. An e-commerce shop where an authenticated user can post a product
            with image upload. User may also purchase product with stripe checkout. Front-end made with EJS template engine.
            Data is stored in mongoDB with mongoose framework. Deployed on Heroku.`,
            techUsed: [
                props.techs[1],
                props.techs[3],
                props.techs[6]
            ],
            image: ShopImage,
            codeUrl: 'https://github.com/Lawangin/Nodejs-Express-project',
            demoUrl: 'https://shop-nodejs-express.herokuapp.com/'
        },
        ingredientsList: {
            title: 'Shopping List App',
            info: `Reactjs application that lets user add ingredients to a list for shopping purposes and delete it at will.
            Data gets uploaded to firebase. Made with modern reactjs hooks and authentication with useContext hooks. 
            Uploaded to AWS amplify.`,
            techUsed: [
                props.techs[0],
                props.techs[2],
                props.techs[5]
            ],
            image: IngredientsImage,
            codeUrl: 'https://github.com/Lawangin/grocery-list-app',
            demoUrl: 'https://master.do0yej13ku8io.amplifyapp.com/'
        }
    });
    const firstAnimate = useSpring({config: {duration: 500}, from: { transform: 'translate3d(0,40px,0)', opacity: '0' },
        to: { transform: 'translate3d(0,0px,0)', opacity: '1' }, delay: 500});

    const secondAnimate = useSpring({config: {duration: 500}, from: { transform: 'translate3d(0,40px,0)', opacity: '0' },
        to: { transform: 'translate3d(0,0px,0)', opacity: '1' }, delay: 750});

    const thirdAnimate = useSpring({config: {duration: 500}, from: { transform: 'translate3d(0,40px,0)', opacity: '0' },
        to: { transform: 'translate3d(0,0px,0)', opacity: '1' }, delay: 1000});

    const fourthAnimate = useSpring({config: {duration: 500}, from: { transform: 'translate3d(0,40px,0)', opacity: '0' },
        to: { transform: 'translate3d(0,0px,0)', opacity: '1' }, delay: 1250});

    const fifthAnimate = useSpring({config: {duration: 500}, from: { transform: 'translate3d(0,40px,0)', opacity: '0' },
        to: { transform: 'translate3d(0,0px,0)', opacity: '1' }, delay: 1500});

    return (
        <div className={classes.ProjectCardGrid}>
            <animated.div style={firstAnimate} >
                <ProjectCard projectData={project.burger} />
            </animated.div>
            <animated.div style={secondAnimate}>
                <ProjectCard projectData={project.blog} />
            </animated.div>
            <animated.div style={thirdAnimate}>
                <ProjectCard projectData={project.bitcoin} />
            </animated.div>
            <animated.div style={fourthAnimate}>
                <ProjectCard projectData={project.shop} />
            </animated.div>
            <animated.div style={fifthAnimate}>
                <ProjectCard projectData={project.ingredientsList} />
            </animated.div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
       techs: state.techStyle
    }
};

export default connect(mapStateToProps)(CardGrid);