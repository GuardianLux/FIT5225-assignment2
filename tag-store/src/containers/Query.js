import React from 'react';
import { Typography, Box, Button, TextField, TextareaAutosize } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import axios from 'axios'
import Qs from 'qs'

export default function Query() {
    const tagList = ["person"]
    const history = useHistory()
    const params = [
      {
        tag1: "person"
      },
      {
        tag2: "dog"
      }
    ]

    function handleBackClick(e) {
      history.push("/Navigation")
    }

    async function handleExecuteClick() {
      const idToken = await (await Auth.currentSession()).getIdToken()
      // console.log(idToken.getJwtToken())

      axios({
        method: "GET",
        url: "https://7wo7odchxb.execute-api.us-east-1.amazonaws.com/dev/search?",
        headers: {
          Authorization: "Bearer " + idToken.getJwtToken()
        },
        params: {
          tag1: "person",
          tag2: "dog",
          tag3: "tennis racket"
        },
        paramsSerializer: function(params) {
          return Qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      .then(res => {
        console.log("response", res)
      })
      .catch(err => {
        console.log("Error", err)
      })
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
        <Typography variant="h1">Run Query</Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter tags seperated by ','" />
        <Button variant="contained" onClick={handleExecuteClick}>Execute</Button>
        <Button variant="contained" onClick={handleBackClick}>Back</Button>
      </Box>
    );
}