
import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { useAppContext } from '../libs/contextLib'

export default function SignIn() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { userHasAuthenticated } = useAppContext()    // use hook to update state and pass to context

    async function handleSignIn(e) {
        e.preventDefault()
        try {
            await Auth.signIn(userName, password)
            alert("Logged In")
            userHasAuthenticated(true)
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <Box flexGrow={1} display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
            <Typography variant="h2">Login</Typography>
            <TextField
                id="filled-basic"
                label="Username"
                variant="filled"
                onChange={e => setUserName(e.target.value)}
            />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={e => setPassword(e.target.value)}
            />
            <Button
            variant="contained"
            href="/"
            onClick={handleSignIn}
            >Sign In</Button>
        </Box>
    );
}