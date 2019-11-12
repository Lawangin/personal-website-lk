import React from 'react';

import classes from './Tech.module.css';

const Tech = props => {
    let techText = 'REACTJS';
    let attachedClasses = [classes.TechButton, classes.ReactBlue];

    if (props.techState === 'node') {
        techText = 'NODEJS';
        attachedClasses = [classes.TechButton, classes.NodeGreen];
    }

    if (props.techState === 'firebase') {
        techText = 'FIREBASE';
        attachedClasses = [classes.TechButton, classes.FirebaseOrange];
    }

    if (props.techState === 'mongodb') {
        techText = 'MONGODB';
        attachedClasses = [classes.TechButton, classes.MongodbGreen];
    }

    if (props.techState === 'redux') {
        techText = 'REDUX';
        attachedClasses = [classes.TechButton, classes.ReduxBlue];
    }

    if (props.techState === 'aws') {
        techText = 'AWS';
        attachedClasses = [classes.TechButton, classes.AwsOrange];
    }

    if (props.techState === 'heroku') {
        techText = 'HEROKU';
        attachedClasses = [classes.TechButton, classes.HerokuPink];
    }

    if (props.techState === 'graphql') {
        techText = 'GRAPHQL';
        attachedClasses = [classes.TechButton, classes.GraphQLPink];
    }

    return (
        <>
            <div className={attachedClasses.join(' ')}><p>{techText}</p></div>
        </>
    );
};

export default Tech;