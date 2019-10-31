import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ariel Barboza</h2>
                        <img
                            src="./ari.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Software Engineer and recent graduate with a Bachelor of Science Degree in Computer Science from the University of Florida. Former United States Army soldier</p>

                    </Cell>
                    <Cell col={6}>
                        <div className="contact-square">
                            <h2>Contact Me</h2>
                            <hr />

                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                            ‪(407) 308-5058‬
                                    </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            ariel@arielbarboza.com
                                    </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="listname" style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-skype" aria-hidden="true" />
                                            a.barboza@ufl.edu | arieltico
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