import React, { useState, useRef } from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { Storage } from "aws-amplify";
import config from "../config";
import { useHistory } from 'react-router-dom'

export default function Upload() {

 var fileUrl = ''
 var filename = ''
 var file = ''

 function handleChange(e){
   file = e.target.files[0]
   fileUrl = URL.createObjectURL(file)
   filename = file.name
 }

 function save(){
   Storage.put(filename, file)
    .then(() => {
      console.log('Upload success')
      fileUrl = ''
      filename = ''
      file=''
    })
    .catch(err => {
      console.log(err)
    })
 }

  const history = useHistory()

  function handleBackClick(e) {
    history.push("/Navigation")
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
      <Typography variant="h1">Upload an Image</Typography>
      <input type="file" onChange={handleChange} />
      <img src={fileUrl} />
      <input type="button" value="Upload" onClick={save} />
      <input type="button" value="Back" onClick={handleBackClick} />
    </Box>
  );


}

