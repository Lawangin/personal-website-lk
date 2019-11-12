import React from 'react';

import classes from './CodeButton.module.css';

const CodeButton = props => {
    return (
        <>
            <a className={classes.CodeButton} href={props.codeLink}>CODE</a>
            <a className={classes.DemoButton} href={props.demoLink}>DEMO</a>
        </>
    );
};

export default CodeButton;