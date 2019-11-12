import React, {Suspense} from 'react';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";

import './App.css';

import Layout from './containers/Layout/Layout';

const ContactMe = React.lazy(() => {
    return import('./containers/ContactMe/ContactMe');
});

const HomePage = React.lazy(() => {
    return import('./containers/HomePage/HomePage');
});

const Projects = React.lazy(() => {
    return import('./containers/CardGrid/CardGrid');
});

const AboutMe = React.lazy(() => {
    return import('./containers/AboutMe/AboutMe');
});

const app = props => {
    return (
        <>
            <Layout>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/contactme"  render={props => <ContactMe {...props} />}/>
                        <Route path="/projects" render={props => <Projects {...props} />} />
                        <Route path="/aboutme" render={props => <AboutMe {...props} />} />
                        <Route path="/" exact render={props => <HomePage {...props} />}/>
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </Layout>
        </>
    );
};

export default withRouter(app);
