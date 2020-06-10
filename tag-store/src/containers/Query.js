import React from 'react';
import { Typography, Box, Button, TextField, TextareaAutosize } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { useHistory } from 'react-router-dom'

export default function Query() {
    const history = useHistory()

    function handleBackClick(e) {
      history.push("/Navigation")
    }

    function handleTextChange(e) {
        var tagArray = e.target.value.split(",")
        if (tagArray.length > 10) {
            alert("Only 10 tags allowed")
        }
        return tagArray
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
        <Typography variant="h1">Run Query</Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter tags seperated by ','" id="tags" onChange={handleTextChange.bind(this)}/>
        <Button variant="contained">Execute</Button>
        <Button variant="contained" onClick={handleBackClick}>Back</Button>
      </Box>
    );
}