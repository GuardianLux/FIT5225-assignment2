import React, {useState} from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { s3Upload } from "../libs/awsLib";

export default function Upload() {
  const upload=(e)=>{
    s3Upload(e.target.files[0])
  }
  return (
    <Box>
      <Typography variant="h1">Upload an Image</Typography>
      <input type="file" onChange={upload}/>
    </Box>
  );


  }

