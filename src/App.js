import React from 'react';
//import logo from './logo.svg';
//import { Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main'
//import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Helmet } from 'react-helmet'

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Ariel Barboza</title>
                <meta name="description" content="Ariel Barboza - Fullstack engineer - The best developer for all your programming needs." />
            </Helmet>
            <div className="demo-big-content">
                <Layout><div className="mobileName"><p><br />&nbsp;Ariel Barboza</p></div>
                    <Header className="header-color" title="My Portfolio" scroll>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/Resume">Resume</a>
                            <a href="/AboutMe">About Me</a>
                            <a href="/Projects">Projects</a>
                            <a href="Contact">Contact</a>
                        </Navigation>
                    </Header>
                    <Drawer title="My Portfolio" href="/">
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/Resume">Resume</a>
                            <a href="/AboutMe">About Me</a>
                            <a href="/Projects">Projects</a>
                            <a href="Contact">Contact</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        {/* Body Of Page */}
                        <Main />
                        <div className="page-content" />
                    </Content>
                </Layout></div></div>
    );
}

export default App;
