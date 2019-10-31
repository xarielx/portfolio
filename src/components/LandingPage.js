import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="LandingPage">
                {/* <div className="LandingPage" style={{width: "100%", margin: "auto"}}> */}
                <Grid className="landingGrid">
                    <Cell col={12}>
                        <img src="./ari.jpg" alt="Ariel Barboza" className="Avatar" />
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                            <hr />

                            <p>C++ | Java | SQL | JavaScript | Python | React | NodeJS | HTML/CSS | Bootstrap | MongoDB</p>
                            <div className="social-links" style={{ fontSize: "6px" }}>
                                {/* Linked In */}
                                <a href="https://www.linkedin.com/in/abarboza/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="http://github.com/xarielx" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* Twitter */}
                                <a href="http://twitter.com/arielb506" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>
                                {/* Linked In */}
                                <a href="http://youtube.com/xarielx506" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:ariel@arielbarboza.com?Subject=Portfolio%20Contact" target="_top" rel="noopener noreferrer">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </a>

                            </div>


                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}



export default LandingPage;