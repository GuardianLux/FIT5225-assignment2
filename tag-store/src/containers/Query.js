import React from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { useHistory } from 'react-router-dom'

export default function Query() {

    const history = useHistory()

    function handleBackClick(e) {
      history.push("/Navigation")
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
        <Typography variant="h1">Run Query</Typography>
        <TextField id="standard-basic" label="Enter tags seperated by ','" />
        <Button variant="contained">Execute</Button>
        <Button variant="contained" onClick={handleBackClick}>Back</Button>
      </Box>
    );
}