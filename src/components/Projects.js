import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import { Helmet } from "react-helmet";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Helmet>
            <title>Projects by Ariel</title>
            <meta
              name="description"
              content="List of Notable projects developed by Ariel Barboza - Fullstack engineer - The best developer for all your programming needs."
            />
          </Helmet>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./python.png) center / cover",
              }}
            >
              Django Project
            </CardTitle>
            <CardText>
              Django Project that uses RasberryPi to store training manuals to
              perform Preventive Maintenance Checks and Services for military
              vehicles.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/xarielx/DjangoIpmcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={{ fontSize: "1.5em", color: "black" }}
                    class="fa fa-github-square"
                    aria-hidden="true"
                  >
                    {" "}
                    iPMCS
                  </i>
                </a>{" "}
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <div
                class="fb-share-button"
                data-href="https://github.com/xarielx/DjangoIpmcs"
                data-layout="button_count"
                data-size="small"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  {" "}
                  <IconButton name="share" />
                </a>
              </div>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./logo192.png) center / cover",
              }}
            >
              React Project
            </CardTitle>
            <CardText>React Project - Project Manager</CardText>
            <CardActions border>
              <Button colored>
                {/* React */}
                <a
                  href="https://github.com/Software5E/sw_project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={{ fontSize: "1.5em", color: "black" }}
                    class="fa fa-github-square"
                    aria-hidden="true"
                  >
                    {" "}
                    React
                  </i>
                </a>{" "}
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <div
                class="fb-share-button"
                data-href="https://github.com/Software5E/sw_project"
                data-layout="button_count"
                data-size="small"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  {" "}
                  <IconButton name="share" />
                </a>
              </div>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./Java.png) center / cover",
              }}
            >
              Java Project
            </CardTitle>
            <CardText>Project coded in Java</CardText>
            <CardActions border>
              <Button colored>
                {/* Github */}
                <a
                  href="https://github.com/xarielx/Project-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={{ fontSize: "1.5em", color: "black" }}
                    class="fa fa-github-square"
                    aria-hidden="true"
                  >
                    {" "}
                    Java
                  </i>
                </a>{" "}
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <div
                class="fb-share-button"
                data-href="https://github.com/xarielx/Project-3"
                data-layout="button_count"
                data-size="small"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  {" "}
                  <IconButton name="share" />
                </a>
              </div>
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="prbody">
        <Tabs
          className="tabBody"
          style={{ padding: "0px" }}
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "white" }} className="tabsR">
            Django
          </Tab>
          <Tab style={{ color: "white" }} className="tabsR">
            React
          </Tab>
          <Tab style={{ color: "white" }} className="tabsR">
            Java
          </Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
