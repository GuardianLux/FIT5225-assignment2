import React, { useState, useRef } from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import { useHistory } from 'react-router-dom'

export default function Upload() {
  const file = useRef(null);
  const upload = (file) => {
    s3Upload(file)
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      upload(file);
      history.push("/Navigation");
    } catch (e) {
      console.log(e);
    }
  }

  const history = useHistory()

  function handleBackClick(e) {
    history.push("/Navigation")
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
      <Typography variant="h1">Upload an Image</Typography>
      <input type="file" onChange={handleFileChange} />
      <input type="button" value="Upload" onClick={handleSubmit} />
      <input type="button" value="Back" onClick={handleBackClick} />
    </Box>
  );


}

