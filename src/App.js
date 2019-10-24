import React from 'react';
//import logo from './logo.svg';
//import { Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main'
//import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
    return (
        <div className="App">
            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <div className="demo-big-content">

                <Layout>
                    <Header className="header-color" title="My Portfolio" scroll>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/Resume">Resume</a>
                            <a href="/AboutMe">About Me</a>
                            <a href="/Projects">Projects</a>
                            <a href="Contact">Contact</a>
                        </Navigation>
                    </Header>
                    <Drawer title="My Portfolio">
                        <Navigation>
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
                </Layout>

            </div>
        </div>
    );
}

export default App;
