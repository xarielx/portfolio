import React from 'react';
//import logo from './logo.svg';
import { Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main'
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
    return (
        <div className="App">
            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <div className="demo-big-content">
                <Switch>
                    <Layout>
                        <Header className="header-color" title="My Portfolio" scroll href="/">
                            <Navigation>
                                <Link to="/Resume">Resume</Link>
                                <Link to="/AboutMe">About Me</Link>
                                <Link to="/Projects">Projects</Link>
                                <Link to="Contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer title="My Portfolio">
                            <Navigation>
                                <Link to="/Resume">Resume</Link>
                                <Link to="/AboutMe">About Me</Link>
                                <Link to="/Projects">Projects</Link>
                                <Link to="Contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            {/* Body Of Page */}
                            <Main />
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </Switch>
            </div>
        </div>
    );
}

export default App;
