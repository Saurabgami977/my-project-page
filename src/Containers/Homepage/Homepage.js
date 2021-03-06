import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Card from '../../Components/Card/Card';
import { Grid } from '@material-ui/core';
import classes from './Homepage.module.css';

function Homepage(props) {
    useEffect(() => {
        props.onfetch()
    }, [])

    let myProjects = [];
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
            <Grid style={{ padding: '30px' }} container >
                <Grid item xs={12}>
                    <h1 style={{ marginBottom: '20px' }}>Advance Projects:</h1>
                </Grid>
                {
                    advanced.length ?
                        advanced.map((project, index) => (
                            <Grid item xs={12} lg={3} sm={6} md={4} key={index}>
                                <Card
                                    name={project.name}
                                    description={project.description}
                                    github={project.github}
                                    liveDemo={project.liveDemo}
                                    image={project.image}
                                />
                            </Grid>
                        )) : <p>No advance projects!!!</p>
                }
                <Grid item xs={12}>
                    <hr />
                    <h1>Basic Projects:</h1>
                </Grid>
                {
                    basic.length ?
                        basic.map((project, index) => (
                            <Grid key={index} item xs={12} lg={3} sm={6} md={4}>
                                <Card
                                    name={project.name}
                                    description={project.description}
                                    github={project.github}
                                    liveDemo={project.liveDemo}
                                    image={project.image}
                                />
                            </Grid>
                        )) : <p>No Basic Projects</p>
                }
                <Grid className={classes.section} item xs={12}>
                    <hr />
                    <h1>Fun Projects:</h1>
                </Grid>
                {
                    fun.length ?
                        fun.map((project, index) => (
                            <Grid key={index} item xs={12} lg={3} sm={6} md={4}>
                                <Card
                                    name={project.name}
                                    description={project.description}
                                    github={project.github}
                                    liveDemo={project.liveDemo}
                                    image={project.image}
                                />
                            </Grid>
                        ))
                        : <p>No Fun Projects</p>
                }
            </Grid>
        </div >
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
