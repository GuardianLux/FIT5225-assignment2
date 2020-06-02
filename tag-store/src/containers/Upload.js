import React, {useState} from 'react';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';
import ImageUploader from 'react-images-upload';

class Upload extends React.Component {
    constructor(props) {
      super(props);
      this.state = { pictures: [] };
      this.onDrop = this.onDrop.bind(this);
    }
  
    onDrop(pictureFiles, pictureDataURLs) {
      this.setState({
        pictures: this.state.pictures.concat(pictureFiles)
      });
    }
  
    render() {
      return (
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      );
    }
  }
  export default Upload