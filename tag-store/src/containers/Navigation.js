import React from 'react';
import { makestyles, makeStyles } from '@material-ui/core/styles'
import { Paper, MenuList, MenuItem, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        marginRight: theme.spacing(2)
    }
}))

export default function Navigation() {
    const classes = useStyles()
    const history = useHistory()

    function handleUploadClick(e) {
        console.log("clicked")
        history.push("/Upload")
    }

    return (
        <div className={classes.root}>
            <Typography variant="h6" >Navigation Menu</Typography>
            <br />
            <Paper>
                <MenuList>
                    <MenuItem onClick={handleUploadClick}>Upload Image</MenuItem>
                    <MenuItem>Query Image</MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}
