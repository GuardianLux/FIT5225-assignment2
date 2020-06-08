import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { s3Upload } from "../libs/awsLib";
import { useHistory } from 'react-router-dom'

export default function Upload() {
  const upload = (e) => {
    s3Upload(e.target.files[0])
  }

  const history = useHistory()

  function handleBackClick(e) {
    history.push("/Navigation")
  }

  return (
    <Box>
      <Typography variant="h1">Upload an Image</Typography>
      <input type="file" onChange={upload} />
      <input type="button" value="Back" onClick={handleBackClick} />
    </Box>
  );


}

