import { Button } from '@material-ui/core'
import React from 'react';
import { connect } from 'react-redux'

import Input from '../UI/Input/Input'
import SimpleSelect from '../UI/Select/Select';
import * as actions from '../../store/actions/index';

function AdminPanel(props) {

    const handleChange = (name, value) => {
        props.onChange(name, value)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(props.inputState);
        }}>
            <SimpleSelect value={props.inputState.select} clicked={(e) => handleChange(e.target.name, e.target.value)} name="select" />
            <Input value={props.inputState.name} clicked={(e) => handleChange(e.target.name, e.target.value)} name="name" label="Project Name" />
            <Input value={props.inputState.github} clicked={(e) => handleChange(e.target.name, e.target.value)} name="github" label="Github" />
            <Input value={props.inputState.liveDemo} clicked={(e) => handleChange(e.target.name, e.target.value)} name="liveDemo" label="Live Demo" />
            <Input value={props.inputState.description} clicked={(e) => handleChange(e.target.name, e.target.value)} name="description" label="Description" multiline />
            <Input value={props.inputState.toolsUsed} clicked={(e) => handleChange(e.target.name, e.target.value)} name="toolsUsed" label="Tools used" multiline />
            <Input type='password' value={props.inputState.password} clicked={(e) => handleChange(e.target.name, e.target.value)} name="password" label="Password" />
            <Button type='submit'>Submit</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        inputState: state.adminPanel.inputs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (name, value) => dispatch(actions.setInputState(name, value)),
        onSubmit: (data) => dispatch(actions.saveData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
