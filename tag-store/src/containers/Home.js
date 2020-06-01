import React from "react";
import { Typography, Box } from '@material-ui/core';
import { flexbox, positions, spacing } from '@material-ui/system';

export default function Home() {
  return (
    <Box position="absolute" top="40%" left="40%">
      <Typography variant="h1">Tag Store</Typography>
      <p>An image recognition service</p>
    </Box>
  );
}