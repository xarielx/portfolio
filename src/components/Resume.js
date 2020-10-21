import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { Helmet } from "react-helmet";

class Resume extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ariel Barboza</title>
          <meta
            name="description"
            content="Ariel Barboza, Resume,  Experience, Education, Fullstack engineer The best developer for all your programming needs."
          />
        </Helmet>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/ari.jpg"
                alt="avatar"
                style={{ height: "200px", borderRadius: "15%" }}
              />
            </div>

            <h2 style={{ paddingTop: "0em" }}>Ariel Barboza</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am a motivated business professional undergoing a Bachelor’s
              degree in Computer Science expecting to graduate in 2019. I have a
              talent for quickly mastering technology. I am diplomatic and
              tactful with professionals and non-professionals at all levels. I
              am accustomed to handling sensitive, confidential records.
              Demonstrated history of working in the corporate information
              technology field and military experience. I am flexible and
              versatile – able to maintain composure under pressure. Poised and
              competent with demonstrated ability to easily transcend cultural
              differences. Thrive in deadline-driven environments. Excellent
              team-building and leadership skills.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Gainesville, Florida</p>
            <h5>Phone</h5>
            <p>
              <a href="tel:407-308-5058">(407) 308-5058</a>
            </p>
            <h5>Email</h5>
            <p>
              <a
                href="mailto:ariel@arielbarboza.com?Subject=Portfolio%20Contact"
                target="_top"
              >
                ariel@arielbarboza.com
              </a>
            </p>
            <h5>LinkedIn</h5>
            <a
              style={{ fontSize: "50px" }}
              href="https://www.linkedin.com/in/abarboza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <div className="resumeBu1">
              <button className="downloadResume">
                <a href="Resume.pdf" download>
                  Download Resume
                </a>
              </button>
              <br />
            </div>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear={2023}
              schoolName="Cornell University"
              schoolDescription="Master of Engineering in Systems Engineering"
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="University of Florida"
              schoolDescription="Bacherlor of Science Degree in Computer Science - GPA = 3.32"
            />

            <Education
              startYear={2016}
              endYear={2017}
              schoolName="Santa Fe College"
              schoolDescription="Associate in Art's Degree - GPA = 3.33"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={"Present"}
              jobName="Lockheed Martin"
            />

            <Experience
              startYear={2020}
              endYear={"Present"}
              jobName="Software Engineer, Leadership & Development Program"
              jobDescription="Lead an Agile Scrum team of 15 developers as a Scrum Master and perform engineering and development changes as a
                    Software Engineer on a project that integrates multiple components supporting full-lifecycle management and sustainment to
                    more than 300,000+ fielded training aids, devices, and simulators. Use Jira, Slack, Postfacto, Git and Bitbucket to track bugs,
                    features, progress and other tasking.
                    • Engineered over 220 software solutions using SQL Server Integration Services (SSIS), SQL Server Reporting Services,
                    • Oracle Databases, Microsoft SQL Server, and Tableau.
                    • Led the transformation of 42 reports to more efficient software architecture resulting in a 40% decrease in DWH load time.
                    • Enforced Kanban principles as a Scrum Master that resulted in reduction of failback rate by 20% in less than six weeks.
                    • Coached new team members in Scrum best practices to decrease failback rate from 20% to 4.5% in three sprints.
                    • Established team velocity metrics by incorporating capacity forecasting into sprint planning sessions.
                    • Resolved a complex communication issue by reshaping team communication via implementing Slack, now the fourth most used Slack Channel at Lockheed Martin.
                    • Decreased punt rate by 78% by instituting time-tracking tool, Jira leading to SOAR RMS-wide recognition."
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Software and Systems Engineering Intern"
              jobDescription="Worked as a member of an Agile team to maintain and provide support for the software stack, design systems, analyze requirements, integrate and test software as both a Software and Systems Engineer
              on a development program.
                            • Developed 90+ software fixes and added functionality to the system using Java/J2EE, SQL, and JavaScript.
                            • Tested the transition and full integration of 35 reports from CSV extraction to SSRS Reporting Services to make the reports
more user friendly for the end customer.
                            • Acted as Project Manager for an intern project to develop a Python – Django Framework Web application on a mobile
device using the Systems Engineering Lifecycle."
            />

            <Experience
              startYear={2012}
              endYear={2015}
              jobName="United States Army"
              jobDescription="19K M1 Armor Crewman, Enlisted Solider/CPL Gunner
              Led, supervised, and served as a member of M1 Armor unit in offensive and defensive combat operations and supported the
staffing, training, and scheduling of solider development programs for the battalion.
                            • Volunteered as the President of Better Opportunities for Single Soldiers to improve the morale and welfare of 500+ soldiers
through implementation of engagement events and programing.
                            • Led three soldiers in the unit including basic needs, payroll, combat readiness and training of day-to-day operations.
                            • Acted as Gunner and Tank Commander with ultimate responsibility for $6.2M in equipment"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="C++" progress={100} />
            <Skills skill="SQL" progress={100} />
            <Skills skill="React" progress={87} />
            <Skills skill="Angular" progress={82} />
            <Skills skill="Java" progress={81} />
            <Skills skill="Python" progress={79} />
            <Skills skill="JavaScript" progress={78} />
            <Skills skill="NodeJS" progress={65} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
