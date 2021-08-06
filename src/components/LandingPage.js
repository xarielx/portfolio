import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Helmet } from 'react-helmet';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='LandingPage'>
                <Helmet>
                    <title>Ariel Barboza</title>
                    <meta
                        name='description'
                        content='Ariel Barboza - Fullstack engineer - Ariel is a Software Engineer and based in Melbourne, FL.'
                    />
                    <meta
                        name='google-site-verification'
                        content='5erQ6FfMwtttUcuZ94iiU4OEDMShqfMjG0gBqFhmMbE'
                    />
                    <meta property='og:locale' content='en_US' />
                    <meta property='og:type' content='article' />
                    <meta property='fb:app_id' content='ID_APP_FACEBOOK' />
                </Helmet>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        <img
                            src='./ari.jpg'
                            alt='Ariel Barboza'
                            className='Avatar'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Software Engineer</h1>
                            <span style={{ color: 'white' }}>
                                I’m a Software Engineer based in Melbourne, FL
                                specializing in building incredible websites and
                                applications.
                            </span>

                            <p>
                                JavaScript | Python | SQL | React | NodeJS |
                                HTML/CSS | Bootstrap | MongoDB | C++ | Java |
                            </p>
                            <div
                                className='social-links'
                                style={{ fontSize: '6px' }}
                            >
                                {/* Linked In */}
                                <a
                                    href='https://www.linkedin.com/in/abarboza/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        class='fa fa-linkedin-square'
                                        aria-hidden='true'
                                    ></i>
                                </a>
                                {/* Github */}
                                <a
                                    href='http://github.com/xarielx'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        class='fa fa-github-square'
                                        aria-hidden='true'
                                    ></i>
                                </a>
                                {/* Twitter */}
                                <a
                                    href='https://twitter.com/xarielx506'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        class='fa fa-twitter-square'
                                        aria-hidden='true'
                                    ></i>
                                </a>
                                {/* Linked In */}
                                <a
                                    href='http://youtube.com/xarielx506'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        class='fa fa-youtube-square'
                                        aria-hidden='true'
                                    ></i>
                                </a>
                                <a
                                    href='mailto:ariel@arielbarboza.com?Subject=Portfolio%20Contact'
                                    target='_top'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        class='fa fa-envelope'
                                        aria-hidden='true'
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                    <div className='resumeBu'>
                        <button className='downloadResume'>
                            <a href='Resume.pdf' download>
                                Download Resume
                            </a>
                        </button>
                        <br />
                    </div>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
