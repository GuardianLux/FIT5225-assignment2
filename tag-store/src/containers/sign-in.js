
import React from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';


export default function SignIn() {
    return (
            <Box flexGrow={1} display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
                <Typography variant="h2">Login</Typography>
                <TextField id="filled-basic" label="Username" variant="filled" />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
                <Button variant="contained" href="/">Sign In</Button>
            </Box>
    );
}