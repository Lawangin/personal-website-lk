import React from 'react';

import classes from './ProjectCard.module.css';
import CodeButton from '../../components/UI/Buttons/CodeButton/CodeButton';
import Tech from '../UI/Tech/Tech';

const ProjectCard = props => {
    let projectTechArray = [];

    for(let i = 0; i < props.projectData.techUsed.length; i++) {
        projectTechArray.push(props.projectData.techUsed[i]);
    }

    let displayTech = projectTechArray.map(tech => {
        return <Tech key={tech} techState={tech} />
    });


    return (
        <div className={classes.Card}>
            <div className={classes.Content}>
                <div className={classes.ProjectImage}>
                    <img alt="first project" src={props.projectData.image} />
                </div>
                {/*<h1 style={{lineHeight: '10px'}}>{props.projectData.title}</h1>*/}
                <div className={classes.TextArea}>
                    <div>
                        <div className={classes.CardForMobile}>
                        <div className={classes.SmallImage}>
                            <img alt="first project" src={props.projectData.image} />
                        </div>
                        <strong className={classes.CardTitle}>
                            {props.projectData.title}
                        </strong>
                        </div>
                        <br/>{props.projectData.info}
                    </div>
                    <div className={classes.ButtonArea}>
                        <CodeButton codeLink={props.projectData.codeUrl} demoLink={props.projectData.demoUrl} />
                    </div>
                </div>
            </div>
            <div className={classes.TechButton}>
                {displayTech}
            </div>
        </div>
    );
};

export default ProjectCard;