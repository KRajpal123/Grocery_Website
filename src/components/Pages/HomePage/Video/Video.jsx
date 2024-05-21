import { Grid } from '@mui/material'
import React from 'react'

const Video = () => {
  return (
    <Grid container mt={5} justifyContent="center">
    <Grid item xs={12} sm={8} md={6}>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Grid>
  </Grid>
  )
}

export default Video