import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ControlledCarousel from './carousel';
//import Skills from './skills';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='aboutBack'>
                <Helmet>
                    <title>About - Ariel</title>
                    <meta
                        name='description'
                        content='Mentioning some of the projects I have worked on in different programming languages, skills, certifications and awards that I have'
                    />
                    <meta property='og:locale' content='en_US' />
                    <meta property='og:type' content='article' />
                    <meta property='fb:app_id' content='ID_APP_FACEBOOK' />
                </Helmet>
                <div className='aboutSkills'>
                    <h3 className='text-5xl font-bold mb-6 text-center'>
                        About Me
                    </h3>
                    <div className='aboutSkills'>
                        <p>
                            Hey, I’m Ariel. I live in Melbourne, FL and I’m a
                            Software Engineer at Lockheed Martin, an aerospace,
                            arms, defense, information security, and technology
                            company with worldwide interests.
                        </p>
                        <p>
                            I have a background and over 3 years experience as a
                            Customer Service and Technical Support
                            Representative. Some of the companies I worked for
                            are Amazon.com, Hewlett-Packard and
                            CareerBuilder.com
                        </p>
                        <p>
                            After deciding that I wanted to shift away from call
                            centers, I joined the United States Army as a Tank
                            Crewman, primarily stationed in Fort Bliss, Texas.
                        </p>
                        <p>
                            After honorably serving the U.S. Army, I
                            successfully obtained a Bachelor of Science Degree
                            in Computer Science from the University of Florida.
                            Go Gators!
                            <span role='img' aria-label='gator'>
                                🐊
                            </span>
                        </p>
                        <p>
                            I am currently a Master of Engineering candidate at
                            Cornell University.
                            <span role='img' aria-label='gator'>
                                🔴
                            </span>
                        </p>
                        <p>
                            In my free time you can find me going to the gym,
                            traveling, going to all theme parks, and surfing.
                        </p>
                    </div>
                </div>
                <div className='pics'>
                    <ControlledCarousel useState={this.useState} />
                </div>
            </div>
        );
    }
}

export default AboutMe;
