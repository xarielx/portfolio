import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import {Helmet} from 'react-helmet'


class Resume extends Component {
    render() {
        return (
            <div>
                <Helmet>
            <title>Ariel Barboza</title>
            <meta name="description" content="Ariel Barboza, Resume,  Experience, Education, Fullstack engineer The best developer for all your programming needs." />
        </Helmet>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="/ari.jpg"
                                alt="avatar"
                                style={{ height: '200px', borderRadius: "15%"}}
                            />
                        </div>

                        <h2 style={{ paddingTop: '0em' }}>Ariel Barboza</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I am a motivated business professional undergoing a Bachelor’s degree in Computer Science expecting to graduate in 2019. I have a talent for quickly mastering technology. I am diplomatic and tactful with professionals and non-professionals at all levels. I am accustomed to handling sensitive, confidential records. Demonstrated history of working in the corporate information technology field and military experience. I am flexible and versatile – able to maintain composure under pressure. Poised and competent with demonstrated ability to easily transcend cultural differences. Thrive in deadline-driven environments. Excellent team-building and leadership skills.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Gainesville, Florida</p> 
                        <h5>Phone</h5>
                        <p><a href="tel:407-308-5058">(407) 308-5058</a></p>
                        <h5>Email</h5>
                        <p><a href="mailto:ariel@arielbarboza.com?Subject=Portfolio%20Contact" target="_top">ariel@arielbarboza.com</a></p>
                        <h5>LinkedIn</h5>
                        <a style={{ fontSize: "50px"}} href="https://www.linkedin.com/in/abarboza/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <div className="resumeBu1"><button className="downloadResume"><a href="Resume.pdf" download>Download Resume</a></button><br /></div>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName="University of Florida"
                            schoolDescription="Bacherlor of Science Degree in Computer Science - GPA = 3.30"
                        />

                        <Education
                            startYear={2016}
                            endYear={2017}
                            schoolName="Santa Fe College"
                            schoolDescription="Associate in Art's Degree - GPA = 3.33"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2> 

                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Lockheed Martin"
                            jobDescription="Software and Systems Engineering Intern. As a Software and System engineer intern, I worked as a member of an Agile team in support of bringing full-lifecycle management and sustainment to
                            more than 300,000+ fielded training aids, devices, and simulators. Used Jira, Git and Bitbucket to track bugs, features, progress and other taskings.
                            • Developed software fixes and added functionality to the system using Java/J2EE, SQL, and JavaScript.
                            • Conducted systems integration and testing support.
                            • Brainstorm with team members to develop new concepts and approaches to improve software functionality.
                            • Acted as Project Manager for an intern competition where I developed a Python - Django Framework Web application on a mobile
                            device, going through a fast-paced version of the systems development life cycle"
                        />

                        <Experience
                            startYear={2012}
                            endYear={2015}
                            jobName="United States Army"
                            jobDescription=" 19K M1 Armor Crewman, Enlisted Soldier/CPL Gunner. Secret Security Clearance. 2012-2015
                            The M1 armor crewman leads, supervises and serves as a member of M1 armor unit in offensive and defensive combat operations. In addition, serves
                            or assists on staff at battalion or higher level.
                            • President of Better Opportunities for Single Soldiers, a volunteer assignment to improve the morale and welfare of 500+ single soldiers
                            in the unit.
                            • In charge of the primary needs and readiness of 3 soldiers in my unit, from payroll, to combat readiness and training of day to day operations.
                            • Performed primary duties as gunner and secondary duties as Tank Commander.
                            • Responsible for USD $6.2 million dollars of equipment."
                            />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="C++"
                            progress={100}
                        />
                        <Skills
                            skill="Java"
                            progress={85}
                        />
                        <Skills
                            skill="Python"
                            progress={55}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={45}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={45}
                        />
                        


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;