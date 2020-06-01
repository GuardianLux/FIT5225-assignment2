import React from "react";
import { Typography, Box } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';

export default function NotFound() {
    return (
        <Box position="absolute" top="40%" left="35%">
            <Typography variant="h1">Sorry, Nothing Here</Typography>
        </Box>
    );
}