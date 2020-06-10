import React from 'react';
import { Typography, Box, Button, TextField, TextareaAutosize } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import axios from 'axios'
import Qs from 'qs'

export default function Query() {
    const history = useHistory()

    var params = [{}]
    var tagArray = []

    function handleBackClick(e) {
      history.push("/Navigation")
    }

    function handleTextChange(e) {
        tagArray = e.target.value.split(",")
        if (tagArray.length > 10) {
            alert("Only 10 tags allowed")
        }
        console.log(tagArray)
        return tagArray
    }
    
    function generateTags () {
        var count = 1
        tagArray.forEach(element => {
            var tag = "tag" + count
            var param = {[tag] : element}
            params.push(param)
            count++
        console.log(params)
        });
    }
    async function handleExecuteClick() {
      const idToken = await (await Auth.currentSession()).getIdToken()
      // console.log(idToken.getJwtToken())
      console.log(Object.keys(params))
      // params.forEach(obj => {
      //   console.log(Object.keys(obj))
      //   console.log(params[Object.keys(obj)])
      // });

      // axios({
      //   method: "GET",
      //   url: "https://7wo7odchxb.execute-api.us-east-1.amazonaws.com/dev/search?",
      //   headers: {
      //     Authorization: "Bearer " + idToken.getJwtToken()
      //   },
      //   params: {
      //     // tag1: "person",
      //     // tag2: "dog",
      //     // tag3: "tennis racket"
      //     params
      //   },
      //   paramsSerializer: params => {
      //     return Qs.stringify(params, {arrayFormat: "repeat"})
      //   }
      // })
      // .then(res => {
      //   console.log("response", res)
      // })
      // .catch(err => {
      //   console.log("Error", err)
      // })
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" top="40%" left="25%" right="25%" position="absolute" mx="auto">
        <Typography variant="h1">Run Query</Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter tags seperated by ','" id="tags" onChange={handleTextChange.bind(this)}/>
        <Button variant="contained" onClick={generateTags}>Execute</Button>
        <Button variant="contained" onClick={handleBackClick}>Back</Button>
      </Box>
    );
}