import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <form id={props.name} className={classes.root} noValidate autoComplete="off">
            <TextField type={props.type} onChange={props.clicked} name={props.name} multiline={props.multiline} rows={5} label={props.label} variant="outlined" />
        </form>
    );
}
