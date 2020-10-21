import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ControlledCarousel from "./carousel";
//import Skills from './skills';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="aboutBack">
        <Helmet>
          <title>About - Ariel</title>
          <meta
            name="description"
            content="Mentioning some of the projects I have worked on in different programming languages, skills, certifications and awards that I have"
          />
        </Helmet>
        <div className="aboutSkills">
          <h3>SKILLS, CERTIFICATIONS, AND AWARDS</h3>
          <h4>Computer Science</h4>
          <p>
            Java, C++, OOP, Python, JavaScript, SQL, Angular, React, Data
            Structures, Git, Agile, Scrum, NodeJS, Django, NoSQL, MEAN Stack,
            Tableau, SSIS, SSRS, T-SQL, C#
          </p>
          <h4>Information Technology</h4>
          <p>
            Risk Management, Process Improvement, Project Management, Customer
            Service, SharePoint, MS Office, Scheduling
          </p>
          <h4>Awards & Certifications</h4>
          <p>
            Lockheed Martin SOAR, Lean Six Sigma White Belt, Army Achievement
            Medal, Good Conduct Medal, General George S. Patton Jr. Award (1 of
            600 soldiers), Excellence in Armor Award (10 of 1,200 soldiers),
            Global War on Terrorism Ribbon
          </p>
          <h4>Awards</h4>
          <p>
            Army Achievement Medal, Good Conduct Medal, General George S. Patton
            Jr. Award (awarded to 1 soldier from 600+ soldiers), Excellence in
            Armor (awarded to 10 soldiers out of 1200 soldiers), Global War on
            Terrorism.
          </p>
          <h4>Volunteering</h4>
          <p>
            Mentor to six transitioning service members as part of the Vetrati
            Mentoring Network
          </p>
          <h4>Clearance</h4>
          <p>Secret Security Clearance</p>
          <h4>Languages</h4>
          <p>Fluent in English and Spanish</p>
        </div>
        <div className="pics">
          <ControlledCarousel useState={this.useState} />
        </div>
      </div>
    );
  }
}

export default AboutMe;
