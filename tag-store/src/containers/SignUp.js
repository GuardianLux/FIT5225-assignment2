
import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { useFormFields } from '../libs/hooksLib' 

export default function SignUp() {
    // const [userName, setUserName] = useState("")
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    const [fields, handleFieldChange] = useFormFields({
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })

    function handleRegisterClick(e) {
        e.preventDefault()
        console.log("username", fields.userName)
        console.log("firstname", fields.firstName)
        console.log("lastname", fields.lastName)
        console.log("password", fields.password)
        console.log("confirm password", fields.confirmPassword)
    }
    
    return (
        <Box flexGrow={1} display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
            <Typography variant="h2">Register</Typography>
            <TextField
                id="filled-basic"
                label="Username"
                variant="filled"
                name="userName"
                onChange={handleFieldChange}
            />
            <TextField
                id="filled-basic"
                label="First Name"
                variant="filled"
                name="firstName"
                onChange={handleFieldChange}
            />
            <TextField
                id="filled-basic"
                label="Last Name"
                variant="filled"
                name="lastName"
                onChange={handleFieldChange}
            />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name="password"
                onChange={handleFieldChange}
            />
            <TextField
                id="filled-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name="confirmPassword"
                onChange={handleFieldChange}
            />
            <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
        </Box>
    );
}