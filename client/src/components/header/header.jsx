import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    let theme = 'gray'
    return (
        <div className={classes.root}>
            <AppBar style={{ ['background-color']: theme }} position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ color: 'lightgray' }} className={classes.title}>
                        Pod podoshvoj
          </Typography>
                        <Link to="/homepage" style={{ textDecoration: 'none', color: 'lightgray' }}><Button color="inherit">Home</Button></Link>
                        <Link to="/signin" style={{ textDecoration: 'none', color: 'lightgray' }}><Button color="inherit">Sign in</Button></Link>
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'lightgray' }}><Button color="inherit">Sign up</Button></Link>
                </Toolbar>
            </AppBar>
        </div >
    );
}