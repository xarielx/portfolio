import React, { Component } from 'react';
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
} from 'react-mdl';
import { Helmet } from 'react-helmet';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    <Helmet>
                        <title>Projects by Ariel</title>
                        <meta
                            name='description'
                            content='List of Notable projects developed by Ariel Barboza - Fullstack engineer - The best developer for all your programming needs.'
                        />
                        <meta
                            name='google-site-verification'
                            content='5erQ6FfMwtttUcuZ94iiU4OEDMShqfMjG0gBqFhmMbE'
                        />
                        <meta property='og:locale' content='en_US' />
                        <meta property='og:type' content='article' />
                        <meta property='fb:app_id' content='ID_APP_FACEBOOK' />
                    </Helmet>
                    {/* Project 1 */}
                    <Card
                        shadow={5}
                        style={{ minWidth: '450', margin: 'auto' }}
                    >
                        <CardTitle
                            style={{
                                color: 'grey',
                                fontStyle: 'oblique',
                                height: '176px',
                                background:
                                    'url(./edu4less.png) center / cover',
                            }}
                        >
                            Education4Less
                        </CardTitle>
                        <CardText>
                            Education4Less is a web scraper tool that gathers
                            scholarships available for undergraduate education,
                            helping students find much needed financial aid. It
                            runs in a Python Django Framework and has a
                            PostgreSQL Database when in production.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a
                                    href='https://github.com/xarielx/education4less'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-github-square'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        Django Python
                                    </i>
                                </a>{' '}
                            </Button>
                            <Button colored>
                                <a
                                    href='https://education4less.herokuapp.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-external-link'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        Education4Less
                                    </i>
                                </a>{' '}
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <div
                                class='fb-share-button'
                                data-href='https://education4less.herokuapp.com/'
                                data-layout='button_count'
                                data-size='small'
                            >
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'
                                    class='fb-xfbml-parse-ignore'
                                >
                                    {' '}
                                    <IconButton name='share' />
                                </a>
                            </div>
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    <Card
                        shadow={5}
                        style={{ minWidth: '450', margin: 'auto' }}
                    >
                        <CardTitle
                            style={{
                                color: 'grey',
                                fontStyle: 'oblique',
                                height: '176px',
                                background: 'url(./faceR.png) center / cover',
                            }}
                        ></CardTitle>
                        <CardText>
                            Website built for FaceR - a company part of
                            University of Florida's Gator Hatchery program.
                            Built in ReactJS and using MongoDB
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                {/* React */}
                                <a
                                    href='https://github.com/xarielx/sw_project'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-github-square'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        React
                                    </i>
                                </a>{' '}
                            </Button>
                            <Button colored>
                                <a
                                    href='https://group5e.herokuapp.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-external-link'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        FaceR
                                    </i>
                                </a>{' '}
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <div
                                class='fb-share-button'
                                data-href='https://group5e.herokuapp.com'
                                data-layout='button_count'
                                data-size='small'
                            >
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'
                                    class='fb-xfbml-parse-ignore'
                                >
                                    {' '}
                                    <IconButton name='share' />
                                </a>
                            </div>
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className='projects-grid'>
                    <Card
                        shadow={5}
                        style={{ minWidth: '450', margin: 'auto' }}
                    >
                        <CardTitle
                            style={{
                                color: 'grey',
                                fontStyle: 'oblique',
                                height: '176px',
                                background: 'url(./ipmcs.PNG) center / cover',
                            }}
                        >
                            iPMCS
                        </CardTitle>
                        <CardText>
                            iPMCS is a Django Framework project that drives to
                            intelligently store Training Manuals in a portable
                            and accessible way.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                {/* Github */}
                                <a
                                    href='https://github.com/xarielx/iPMCS'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-github-square'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        iPMCS Github
                                    </i>
                                </a>{' '}
                            </Button>
                            <Button colored>
                                <a
                                    href='https://ipmcs.herokuapp.com/accounts/login/?next=/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <i
                                        style={{
                                            fontSize: '1.5em',
                                            color: 'black',
                                        }}
                                        class='fa fa-external-link'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                        iPMCS
                                    </i>
                                </a>{' '}
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <div
                                class='fb-share-button'
                                data-href='https://ipmcs.herokuapp.com/accounts/login/?next=/'
                                data-layout='button_count'
                                data-size='small'
                            >
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'
                                    class='fb-xfbml-parse-ignore'
                                >
                                    {' '}
                                    <IconButton name='share' />
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
            <div className='prbody'>
                <Tabs
                    className='tabBody'
                    style={{ padding: '0px' }}
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab style={{ color: 'white' }} className='tabsR'>
                        Django
                    </Tab>
                    <Tab style={{ color: 'white' }} className='tabsR'>
                        React
                    </Tab>
                    <Tab style={{ color: 'white' }} className='tabsR'>
                        Java
                    </Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;
