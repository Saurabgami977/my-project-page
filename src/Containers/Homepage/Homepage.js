import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Card from '../../Components/Card/Card'
import { Grid } from '@material-ui/core';
import classes from './Homepage.module.css'

function Homepage(props) {
    useEffect(() => {
        props.onfetch()
    }, [])

    let myProjects = [];
    // let basic = Object.keys(props.projects.basic);
    // let fun = Object.keys(props.projects.fun);
    for (const property in props.projects) {
        for (const keys in props.projects[property]) {
            myProjects.push(props.projects[property][keys])
        }
    }
    let advanced = myProjects.filter(project => project.select == 'advanced');
    let basic = myProjects.filter(project => project.select == 'basic');
    let fun = myProjects.filter(project => project.select == 'fun');

    return (
        <div>
            <Grid style={{ padding: '30px' }} container xs={12}>
                <Grid item xs={12}>
                    <h1 style={{ marginBottom: '20px' }}>Advance Projects:</h1>
                </Grid>
                {
                    advanced.map(project => (
                        <Grid xs={12} lg={3} sm={6} md={4}>
                            <Card
                                name={project.name}
                                description={project.description}
                                github={project.github}
                                liveDemo={project.liveDemo}
                                image={project.image}
                            />
                        </Grid>
                    ))
                }
                <Grid className={classes.section} item xs={12}>
                    <hr />
                    <h1  >Basic Projects:</h1>
                </Grid>
                <Grid className={classes.section}>
                    <hr />
                    <h1  >Fun Projects:</h1>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.homepage.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetch: () => dispatch(actions.fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
