import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Projects" component={Projects} />
    </Switch>
)

export default Main;