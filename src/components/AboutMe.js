import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import ControlledCarousel from './carousel'
//import Skills from './skills';


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="aboutBack">
                <Helmet>
                    <title>About - Ariel</title>
                    <meta name="description" content="Mentioning some of the projects I have worked on in different programming languages, skills, certifications and awards that I have" />
                </Helmet>
                <div className="aboutSkills">
                    <h3>NOTABLE PROJECTS</h3>
                    <p>Developed a 24-bit Image Editor, learned artificial intelligence programming and predicting behaviors by using Robocode and a high
                scoring A.I. for Pacman. Created more than fifty step-by-step knowledge base articles for Careerbuilder.com’s IT department.</p>
                    <p>Acted as Project Manager in a summer-long Software and Hardware project in which I developed a Django based web application to
                function on a custom-made mobile device, the project went through all the stages of the Systems and Software development life cycle.</p>

                    <h3>SKILLS, CERTIFICATIONS, AND AWARDS</h3>
                    <h4>Computer Science</h4>
                    <p>Proficiency in Java/J2EE, C++, OOP, Python, JavaScript, SQL, Data Structures, Git, Agile, Scrum, NodeJS, Django, NoSQL, MEAN Stack.</p>
                    <h4>Information Technology</h4>
                    <p>Risk Management, Process Improvement, Project Management, Customer Service, SharePoint, MS Office, Scheduling</p>
                    <h4>Military</h4>
                    <p>Secret Security Clearance, Lean Six Sigma White Belt Certification. U.S. Army Combatives (Hand-to-hand Combat) Instructor, Special
                Forces Assessment and Selection, Armor Crew, Leadership, Teamwork.</p>
                    <h4>Awards</h4>
                    <p>Army Achievement Medal, Good Conduct Medal, General George S. Patton Jr. Award (awarded to 1 soldier from 600+ soldiers), Excellence
                in Armor (awarded to 10 soldiers out of 1200 soldiers), Global War on Terrorism.</p>
                </div>
                <div className="pics"><ControlledCarousel useState={this.useState} /></div>
            </div>
        );
    }
}



export default AboutMe;