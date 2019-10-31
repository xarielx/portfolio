import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Helmet } from 'react-helmet'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body" >
                <Helmet>
                    <title>Contact - Ariel</title>
                    <meta name="description" content="Ariel Barboza's contact information. tel:407-308-5058 " />
                </Helmet>
                <Grid className="contact-grid" >
                    <Cell col={6}>
                        <h2>Ariel Barboza</h2>
                        <img
                            src="./ari.jpg"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Software Engineer and recent graduate with a Bachelor of Science Degree in Computer Science from the University of Florida. Former United States Army soldier</p>
                    </Cell>
                    <Cell col={6}>
                        <div className="mobileSpace"></div>
                        <div className="contact-square" >
                            <h2>Contact Me</h2>
                            <hr />
                            <div className="contact-list" >
                                <List>
                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                            ‪<a href="tel:407-308-5058">(407) 308-5058</a>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <a href="mailto:ariel@arielbarboza.com?Subject=Portfolio%20Contact" target="_top">ariel@arielbarboza.com</a>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-google-plus-official" aria-hidden="true" />
                                            <a href="skype:arieltico?add">Ariel Barboza - G.Suite</a>
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;